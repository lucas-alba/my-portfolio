import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ticker.css'; // Make sure to import your CSS file if it's separate

const Portfolio = () => {
  const [summary, setSummary] = useState(null);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Fetch Portfolio Summary
    axios.get('http://localhost:8080/api/portfolio/summary')
      .then(res => {
        console.log("✅ Summary:", res.data);
        setSummary(res.data);
      })
      .catch(err => {
        console.error("❌ Summary Error:", err);
      });

    // Fetch Stock Prices
    axios.get('http://localhost:8080/api/market/prices')
      .then(res => {
        console.log("✅ Prices:", res.data);
        setPrices(res.data);
      })
      .catch(err => {
        console.error("❌ Prices Error:", err);
      });
  }, []);

  return (
    <div className="p-8 bg-black text-white min-h-screen font-sans">
      {/* 📈 Scrolling Stock Ticker */}
      <div className="overflow-hidden whitespace-nowrap mb-8 border-y border-gray-700 py-2">
        <div className="animate-scroll flex gap-8 text-lg font-medium">
          {[...prices, ...prices].map(({ symbol, price }, idx) => (
            <div
              key={symbol + idx}
              className="bg-white text-black px-4 py-2 rounded-2xl shadow min-w-max"
            >
              {symbol}: ${price !== null ? price.toFixed(2) : 'Loading...'}
            </div>
          ))}
        </div>
      </div>

      {/* 💼 Portfolio Section */}
      <h1 className="text-3xl font-bold mb-6">💼 Portfolio Summary</h1>

      {summary ? (
        <div className="text-lg">
          <p>💵 Cash Balance: ${summary.cashBalance.toFixed(2)}</p>

          {summary.holdings && Object.keys(summary.holdings).length > 0 && (
            <div className="mt-4">
              <p>📊 Holdings:</p>
              <ul className="ml-4 list-disc">
                {Object.entries(summary.holdings).map(([symbol, qty]) => (
                  <li key={symbol}>
                    {symbol}: {qty} share{qty !== 1 ? 's' : ''}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>Loading portfolio summary...</p>
      )}
    </div>
  );
};

export default Portfolio;