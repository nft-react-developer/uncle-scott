import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface CurrencyCardProps {
  title: string;
  usdAmount: number;
  exchangeRate: number;
  dailyChange: number;
  changePercentage: number;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  title,
  usdAmount,
  exchangeRate,
  dailyChange,
  changePercentage
}) => {
  const pesosAmount = usdAmount * exchangeRate;
  const isPositive = dailyChange >= 0;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
        <div className="p-2 bg-emerald-50 rounded-lg">
          <DollarSign className="w-5 h-5 text-emerald-600" />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">USD Amount</span>
          <span className="font-medium text-stone-800">${usdAmount.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Exchange Rate</span>
          <span className="font-medium text-stone-800">${exchangeRate.toFixed(2)} ARS</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Pesos Amount</span>
          <span className="font-semibold text-emerald-600">${pesosAmount.toLocaleString()} ARS</span>
        </div>
        
        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Daily Change</span>
            <div className="flex items-center space-x-1">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span className={`font-medium ${isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
                {isPositive ? '+' : ''}{changePercentage.toFixed(2)}%
              </span>
            </div>
          </div>
          <div className="text-right mt-1">
            <span className={`text-sm ${isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}${dailyChange.toFixed(2)} ARS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;
