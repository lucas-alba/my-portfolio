import React from 'react';
import { Link } from 'react-router-dom';

const TradingSimNav = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white fixed top-0 left-0 right-0 z-50">
      <div className="text-lg font-bold">
        <Link to="/">Lucas Alba</Link>
      </div>

      <div>
        <Link
          to="/"
          className="text-lg font-semibold px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors"
        >
          Home
        </Link>
      </div>
    </nav>
  );
};

export default TradingSimNav;
