import React from 'react';
import { Package, CheckCircle, XCircle, FileText, TrendingUp, TrendingDown } from 'lucide-react';
import { StatsCard } from '../../components/StatsCard';
import { Table } from '../../components/Table';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Dashboard() {
  // Mock data for weekly verification trend
  const weeklyData = [
    { day: 'Mon', verifications: 245 },
    { day: 'Tue', verifications: 312 },
    { day: 'Wed', verifications: 289 },
    { day: 'Thu', verifications: 356 },
    { day: 'Fri', verifications: 421 },
    { day: 'Sat', verifications: 198 },
    { day: 'Sun', verifications: 167 }
  ];

  // Mock data for recent verification logs
  const recentLogs = [
    {
      code: 'SS-2024-ABC123',
      product: 'Hydrating Face Serum',
      status: 'Verified',
      timestamp: '2024-12-06 14:32',
      user: 'user@example.com'
    },
    {
      code: 'SS-2024-DEF456',
      product: 'Vitamin C Brightening Cream',
      status: 'Verified',
      timestamp: '2024-12-06 14:28',
      user: 'customer@email.com'
    },
    {
      code: 'FAKE-CODE-001',
      product: 'Unknown',
      status: 'Failed',
      timestamp: '2024-12-06 14:15',
      user: 'test@test.com'
    },
    {
      code: 'SS-2024-GHI789',
      product: 'Anti-Aging Night Serum',
      status: 'Verified',
      timestamp: '2024-12-06 14:02',
      user: 'buyer@mail.com'
    },
    {
      code: 'SS-2024-JKL012',
      product: 'Gentle Cleansing Foam',
      status: 'Verified',
      timestamp: '2024-12-06 13:45',
      user: 'shopper@domain.com'
    }
  ];

  const tableColumns = [
    {
      key: 'code',
      label: 'Verification Code',
      sortable: true
    },
    {
      key: 'product',
      label: 'Product',
      sortable: true
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => (
        <span
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
            value === 'Verified'
              ? 'bg-secondary-100 text-secondary-700'
              : 'bg-danger-100 text-danger-700'
          }`}
        >
          {value === 'Verified' ? (
            <CheckCircle size={14} />
          ) : (
            <XCircle size={14} />
          )}
          {value}
        </span>
      )
    },
    {
      key: 'timestamp',
      label: 'Timestamp',
      sortable: true
    },
    {
      key: 'user',
      label: 'User',
      sortable: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">Welcome back! Here's an overview of your verification system.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Products"
            value="1,247"
            icon={Package}
            color="blue"
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Total Verifications"
            value="8,923"
            icon={CheckCircle}
            color="green"
            trend={{ value: 8, isPositive: true }}
          />
          <StatsCard
            title="Failed Verifications"
            value="127"
            icon={XCircle}
            color="red"
            trend={{ value: 3, isPositive: false }}
          />
          <StatsCard
            title="Pending Reports"
            value="23"
            icon={FileText}
            color="yellow"
            trend={{ value: 5, isPositive: false }}
          />
        </div>

        {/* Weekly Trend Chart */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-gray-900 mb-2">Weekly Verification Trend</h4>
              <p className="text-gray-600">Number of verifications per day this week</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-700 rounded-lg">
              <TrendingUp size={20} />
              <span>+15% vs last week</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#6b7280" />
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
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Verification Logs */}
        <div className="mb-8">
          <h4 className="text-gray-900 mb-4">Recent Verification Logs</h4>
          <Table
            columns={tableColumns}
            data={recentLogs}
            searchPlaceholder="Search logs..."
            itemsPerPage={5}
          />
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h6 className="text-gray-900">Verification Rate</h6>
              <TrendingUp className="text-secondary-600" size={20} />
            </div>
            <div className="text-3xl text-gray-900 mb-2">98.6%</div>
            <p className="text-sm text-gray-600">Products successfully verified</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h6 className="text-gray-900">Avg. Response Time</h6>
              <TrendingDown className="text-secondary-600" size={20} />
            </div>
            <div className="text-3xl text-gray-900 mb-2">0.8s</div>
            <p className="text-sm text-gray-600">Average verification speed</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h6 className="text-gray-900">Active Users</h6>
              <TrendingUp className="text-secondary-600" size={20} />
            </div>
            <div className="text-3xl text-gray-900 mb-2">2,341</div>
            <p className="text-sm text-gray-600">Users this month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
