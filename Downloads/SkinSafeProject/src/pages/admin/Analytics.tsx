import React, { useState } from 'react';
import { BarChart3, TrendingUp, MapPin, PieChart as PieChartIcon } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export function Analytics() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('month');

  // Mock data for verified vs unverified
  const verificationData = [
    { name: 'Jan', verified: 2400, unverified: 120 },
    { name: 'Feb', verified: 2800, unverified: 140 },
    { name: 'Mar', verified: 3200, unverified: 98 },
    { name: 'Apr', verified: 3600, unverified: 156 },
    { name: 'May', verified: 4200, unverified: 132 },
    { name: 'Jun', verified: 3900, unverified: 189 },
    { name: 'Jul', verified: 4500, unverified: 145 },
    { name: 'Aug', verified: 4800, unverified: 167 },
    { name: 'Sep', verified: 5200, unverified: 198 },
    { name: 'Oct', verified: 5600, unverified: 178 },
    { name: 'Nov', verified: 6100, unverified: 203 },
    { name: 'Dec', verified: 6400, unverified: 187 }
  ];

  // Mock data for product categories
  const categoryData = [
    { name: 'Serum', value: 35, count: 437 },
    { name: 'Moisturizer', value: 25, count: 312 },
    { name: 'Cleanser', value: 18, count: 225 },
    { name: 'Sunscreen', value: 12, count: 150 },
    { name: 'Toner', value: 10, count: 125 }
  ];

  // Mock data for verification frequency
  const frequencyData = [
    { time: '00:00', verifications: 45 },
    { time: '04:00', verifications: 32 },
    { time: '08:00', verifications: 156 },
    { time: '12:00', verifications: 289 },
    { time: '16:00', verifications: 234 },
    { time: '20:00', verifications: 198 },
    { time: '23:00', verifications: 89 }
  ];

  // Mock data for top locations
  const topLocations = [
    { location: 'New York, USA', verifications: 2456, percentage: 18.5 },
    { location: 'Los Angeles, USA', verifications: 1987, percentage: 15.0 },
    { location: 'London, UK', verifications: 1654, percentage: 12.5 },
    { location: 'Tokyo, Japan', verifications: 1432, percentage: 10.8 },
    { location: 'Sydney, Australia', verifications: 1289, percentage: 9.7 }
  ];

  const COLORS = ['#3b82f6', '#22c55e', '#14b8a6', '#f59e0b', '#ef4444'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-gray-900">Analytics</h2>
              <p className="text-gray-600">Insights and trends from verification data</p>
            </div>
          </div>

          {/* Time Range Filter */}
          <div className="flex gap-2">
            {(['week', 'month', 'year'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  timeRange === range
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Verification Rate</p>
              <TrendingUp className="text-secondary-600" size={20} />
            </div>
            <p className="text-3xl text-gray-900 mb-1">96.8%</p>
            <p className="text-sm text-secondary-600">↑ 2.3% from last month</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Avg. Response Time</p>
              <BarChart3 className="text-primary-600" size={20} />
            </div>
            <p className="text-3xl text-gray-900 mb-1">0.8s</p>
            <p className="text-sm text-secondary-600">↓ 0.2s improvement</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Daily Verifications</p>
              <TrendingUp className="text-accent-600" size={20} />
            </div>
            <p className="text-3xl text-gray-900 mb-1">1,043</p>
            <p className="text-sm text-secondary-600">↑ 15% increase</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Global Reach</p>
              <MapPin className="text-danger-600" size={20} />
            </div>
            <p className="text-3xl text-gray-900 mb-1">47</p>
            <p className="text-sm text-gray-600">Countries served</p>
          </div>
        </div>

        {/* Verified vs Unverified Chart */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="mb-6">
            <h4 className="text-gray-900 mb-2">Verified vs Unverified Products</h4>
            <p className="text-gray-600">Monthly comparison of verification results</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={verificationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Legend />
              <Bar dataKey="verified" fill="#22c55e" name="Verified" radius={[8, 8, 0, 0]} />
              <Bar dataKey="unverified" fill="#ef4444" name="Unverified" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Verification Frequency */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="mb-6">
              <h4 className="text-gray-900 mb-2">Verification Frequency</h4>
              <p className="text-gray-600">Hourly verification activity</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={frequencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="verifications"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Product Categories */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="mb-6">
              <h4 className="text-gray-900 mb-2">Product Categories</h4>
              <p className="text-gray-600">Distribution by product type</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value: any, name: string, props: any) => [
                    `${props.payload.count} products`,
                    name
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Locations */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="mb-6">
            <h4 className="text-gray-900 mb-2">Top Verification Locations</h4>
            <p className="text-gray-600">Geographic distribution of verifications</p>
          </div>

          <div className="space-y-4">
            {topLocations.map((location, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 text-center">
                  <span className="text-2xl text-gray-400">#{index + 1}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary-600" />
                      <span className="text-gray-900">{location.location}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-900">{location.verifications.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm ml-2">({location.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${location.percentage * 5}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 bg-gray-100 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">Interactive map visualization</p>
              <p className="text-sm text-gray-400">Geographic heatmap would display here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
