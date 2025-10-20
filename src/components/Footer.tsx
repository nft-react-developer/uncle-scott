import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-300 mb-2">
            © 2025 Currency Portfolio Tracker. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built with ❤️ by{' '}
            <a 
              rel="nofollow" 
              target="_blank" 
              href="https://meku.dev"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Meku.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
