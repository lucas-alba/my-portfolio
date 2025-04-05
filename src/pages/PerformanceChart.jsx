import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const PerformanceChart = ({ data }) => {
  if (!data || data.length < 2) {
    return (
      <p className="text-gray-400 text-center mt-12">
        Not enough data to render chart.
      </p>
    );
  }

  const isUp = data[data.length - 1].value >= data[0].value;
  const changePercent = (
    ((data[data.length - 1].value - data[0].value) / data[0].value) *
    100
  ).toFixed(2);
  const latestValue = data[data.length - 1].value;

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-lg mt-12 flex flex-col items-center">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold mb-1">Portfolio Performance</h2>
        <p className="text-sm text-gray-400 mb-1">
          Current Value: ${latestValue.toFixed(2)}
        </p>
        <p
          className={`font-semibold ${
            isUp ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {isUp ? 'Up' : 'Down'} {changePercent}%
        </p>
      </div>

      {/* Make the chart visually balanced by giving it full width */}
      <div className="w-full h-[22rem]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 12, fill: '#ccc' }}
              minTickGap={20}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#ccc' }}
              width={60}
              domain={['auto', 'auto']}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#222',
                border: 'none',
                color: 'white',
                fontSize: '14px',
              }}
              labelStyle={{ fontWeight: 'bold' }}
              formatter={(value) => [`$${value.toFixed(2)}`, 'Value']}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={isUp ? '#22c55e' : '#f87171'}
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
