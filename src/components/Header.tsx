import React from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <TrendingUp className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Currency Portfolio</h1>
            <p className="text-emerald-100 text-sm sm:text-base">Track your USD to ARS investments</p>
          </div>
        </div>
        
        <nav className="mt-4">
          <div className="flex items-center space-x-2 text-emerald-100">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm">Real-time exchange rate tracking</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
