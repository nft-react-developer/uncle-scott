import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CurrencyCard from '../components/CurrencyCard';
import AddCurrencyForm from '../components/AddCurrencyForm';
import ExchangeRateChart from '../components/ExchangeRateChart';

interface CurrencyPosition {
  id: string;
  title: string;
  usdAmount: number;
}

interface ExchangeRateData {
  current: number;
  previous: number;
  change: number;
  changePercentage: number;
}

const Home: React.FC = () => {
  const [positions, setPositions] = useState<CurrencyPosition[]>([
    { id: '1', title: 'Investment Portfolio', usdAmount: 5000 },
    { id: '2', title: 'Emergency Fund', usdAmount: 2500 }
  ]);

  const [exchangeRate, setExchangeRate] = useState<ExchangeRateData>({
    current: 1025.50,
    previous: 1018.75,
    change: 6.75,
    changePercentage: 0.66
  });

  const [chartData] = useState([
    { date: '01/15', rate: 1015.25 },
    { date: '01/16', rate: 1018.75 },
    { date: '01/17', rate: 1022.30 },
    { date: '01/18', rate: 1019.80 },
    { date: '01/19', rate: 1025.50 }
  ]);

  const addPosition = (title: string, amount: number) => {
    const newPosition: CurrencyPosition = {
      id: Date.now().toString(),
      title,
      usdAmount: amount
    };
    setPositions(prev => [...prev, newPosition]);
    toast.success('Currency position added successfully!');
  };

  const totalUSD = positions.reduce((sum, pos) => sum + pos.usdAmount, 0);
  const totalARS = totalUSD * exchangeRate.current;
  const totalDailyChange = totalUSD * exchangeRate.change;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total USD</h3>
            <p className="text-2xl font-bold text-stone-800">${totalUSD.toLocaleString()}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total ARS</h3>
            <p className="text-2xl font-bold text-emerald-600">${totalARS.toLocaleString()}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Daily Change</h3>
            <p className={`text-2xl font-bold ${totalDailyChange >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
              {totalDailyChange >= 0 ? '+' : ''}${totalDailyChange.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Exchange Rate Chart */}
        <div className="mb-8">
          <ExchangeRateChart data={chartData} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Currency Positions */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-stone-800 mb-6">Your Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {positions.map(position => (
                <CurrencyCard
                  key={position.id}
                  title={position.title}
                  usdAmount={position.usdAmount}
                  exchangeRate={exchangeRate.current}
                  dailyChange={position.usdAmount * exchangeRate.change}
                  changePercentage={exchangeRate.changePercentage}
                />
              ))}
            </div>
          </div>

          {/* Add Position Form */}
          <div>
            <h2 className="text-xl font-semibold text-stone-800 mb-6">Add Position</h2>
            <AddCurrencyForm onAdd={addPosition} />
            
            {/* Current Rate Info */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h4 className="font-medium text-amber-800 mb-2">Current Exchange Rate</h4>
              <p className="text-2xl font-bold text-amber-600">
                ${exchangeRate.current.toFixed(2)} ARS
              </p>
              <p className={`text-sm mt-1 ${exchangeRate.change >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                {exchangeRate.change >= 0 ? '+' : ''}{exchangeRate.change.toFixed(2)} ({exchangeRate.changePercentage >= 0 ? '+' : ''}{exchangeRate.changePercentage.toFixed(2)}%)
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
