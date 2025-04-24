import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ticker.css';
import PerformanceChart from './PerformanceChart';
import formatToEST from './formatToEST';
import isMarketOpen from './isMarketOpen';
import getTimeUntilMarketOpen from './getTimeUntilMarketOpen';

const Portfolio = () => {
  const [summary, setSummary] = useState(null);
  const [prices, setPrices] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [trades, setTrades] = useState([]);
  const [timeUntilOpen, setTimeUntilOpen] = useState(getTimeUntilMarketOpen());
  const [isPerformanceLoaded, setIsPerformanceLoaded] = useState(false);

  const SUMMARY_API = import.meta.env.VITE_SUMMARY_API;
  const PRICES_API = import.meta.env.VITE_PRICES_API;
  const PERFORMANCE_API = import.meta.env.VITE_PERFORMANCE_API;
  const TRADES_API = import.meta.env.VITE_PORTFOLIO_TRADES;

  // Tick the countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilOpen(getTimeUntilMarketOpen());
    }, 60000);

    setTimeUntilOpen(getTimeUntilMarketOpen());
    return () => clearInterval(interval);
  }, []);

  // Fetch portfolio summary
  useEffect(() => {
    axios.get(SUMMARY_API)
      .then(res => setSummary(res.data))
      .catch(err => console.error("Summary Error:", err));
  }, []);

  // Auto refresh prices
  useEffect(() => {
    const fetchPrices = () => {
      axios.get(PRICES_API)
        .then(res => {
          setPrices(res.data);
          console.log("Updated prices:", res.data);
        })
        .catch(err => console.error("Prices Error:", err));
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  // Performance data
  useEffect(() => {
    const fetchPerformance = () => {
      axios.get(PERFORMANCE_API)
        .then(res => {
          setIsPerformanceLoaded(true); 

          if (!res.data || res.data.length === 0) {
            console.log("📉 No performance data returned — market likely closed.");
            return;
          }

          const formatted = res.data.map(entry => ({
            time: formatToEST(entry.timestamp),
            value: entry.portfolioValue
          }));
          setPerformance(formatted);
        })
        .catch(err => {
          setIsPerformanceLoaded(true);  
          console.error("Performance Error:", err);
        });
    };

    fetchPerformance();
    const interval = setInterval(fetchPerformance, 60000);
    return () => clearInterval(interval);
  }, []);

  // Fetch trades
  useEffect(() => {
    axios.get(TRADES_API)
      .then(res => setTrades(res.data))
      .catch(err => console.error("Trades Error:", err));
  }, []);

  return (
    <div className="p-8 bg-black text-white min-h-screen font-sans">
      {/* Scrolling Stock Prices */}
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

      {/* Performance Chart or Loading or Market Closed */}
      {!isPerformanceLoaded ? (
        <div className="text-center text-lg text-gray-400 mt-12">Loading performance data...</div>
      ) : performance.length > 0 ? (
        <PerformanceChart data={performance} />
      ) : (
        <div className="bg-yellow-100 text-yellow-900 px-4 py-3 rounded-lg shadow mt-12 text-center text-lg font-semibold max-w-xl mx-auto">
          Market is closed. Reopens in {timeUntilOpen}
        </div>
      )}

      {/* Holdings */}
      {summary?.holdings && Object.keys(summary.holdings).length > 0 && (
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Current Holdings</h2>
          <ul className="space-y-4">
            {Object.entries(summary.holdings)
              .filter(([_, qty]) => qty > 0)
              .map(([symbol, qty]) => {
                const stock = prices.find(p => p.symbol === symbol);
                const currentPrice = stock ? stock.price.toFixed(2) : '—';

                return (
                  <li
                    key={symbol}
                    className="flex justify-between items-center px-6 py-4 bg-[#1a1a1a] rounded-xl shadow"
                  >
                    <div className="text-lg font-medium">{symbol}</div>
                    <div className="text-sm text-gray-400">{qty} share{qty !== 1 ? 's' : ''}</div>
                    <div className="text-sm text-white">Price: ${currentPrice}</div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      
      {/* Trade History */}
      {trades.length > 0 && (
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Last 5 Executed Trades</h2>
          <ul className="space-y-4">
            {trades
              .slice()
              .reverse()
              .slice(0, 5)
              .map((trade, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-6 py-4 bg-[#1a1a1a] rounded-xl shadow"
                >
                  <div className="text-lg font-medium">
                    {trade.type === 'BUY' ? 'Bought' : 'Sold'} {trade.quantity} {trade.symbol}
                  </div>
                  <div className="text-sm">
                    <span className="text-white">
                      @ ${trade.price.toFixed(2)}
                    </span>{' '}
                    <span className="text-gray-400">
                      •{' '}
                      {new Date(trade.timestamp).toLocaleString(undefined, {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      })}
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Portfolio;