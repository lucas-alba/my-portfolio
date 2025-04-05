import React from 'react';
import TradingSimNav from './TradingSimNav';
import Portfolio from './Portfolio';

const TradingSim = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      <div className="flex flex-col justify-center items-center pt-32 px-12 text-center">
        <h1 className="text-[8vw] font-bold mb-8">TRADING SIM</h1>
        <p className="text-xl max-w-3xl mb-20 text-gray-300">
          This project is a real-time simulator with strategy bots, simulating stock trading with various strategies.
        </p>
      </div>

      {/* Portfolio Section */}
      <Portfolio />
    </div>
  );
};

export default TradingSim;
