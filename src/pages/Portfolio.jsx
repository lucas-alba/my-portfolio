import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ticker.css';
import PerformanceChart from './PerformanceChart';

const Portfolio = () => {
  const [summary, setSummary] = useState(null);
  const [prices, setPrices] = useState([]);
  const [performance, setPerformance] = useState([]);

  // Fetch summary once
  useEffect(() => {
    axios.get('http://localhost:8080/api/portfolio/summary')
      .then(res => setSummary(res.data))
      .catch(err => console.error("❌ Summary Error:", err));
  }, []);

  // Auto-refresh prices
  useEffect(() => {
    const fetchPrices = () => {
      axios.get('http://localhost:8080/api/market/prices')
        .then(res => {
          setPrices(res.data);
          console.log("🔁 Updated prices:", res.data);
        })
        .catch(err => console.error("❌ Prices Error:", err));
    };

    fetchPrices(); // initial call
    const interval = setInterval(fetchPrices, 15000); // every 15 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  // Auto-refresh performance
  useEffect(() => {
    const fetchPerformance = () => {
      axios.get('http://localhost:8080/api/portfolio/performance')
        .then(res => {
          const formatted = res.data.map(entry => ({
            time: new Date(entry.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }),
            value: entry.portfolioValue
          }));
          setPerformance(formatted);
        })
        .catch(err => console.error("❌ Performance Error:", err));
    };

    fetchPerformance();
    const interval = setInterval(fetchPerformance, 60000); // every 60 seconds

    return () => clearInterval(interval);
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

      {/* 📈 Portfolio Performance Chart */}
      {performance.length > 0 ? (
        <PerformanceChart data={performance} />
      ) : (
        <p className="text-center text-gray-400 mt-12">Loading performance data...</p>
      )}
    </div>
  );
};

export default Portfolio;