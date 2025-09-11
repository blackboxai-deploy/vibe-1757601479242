'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            💰 P2P Financial Matching Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect depositors and withdrawers seamlessly with automated matching, 
            admin oversight, and secure transactions in Indian Rupees.
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/admin" className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-purple-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Review and approve transactions, manage users, and monitor platform activity
                </p>
                <div className="inline-flex items-center text-purple-600 font-semibold">
                  Access Admin Panel →
                </div>
              </div>
            </div>
          </Link>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">User Portal</h3>
              <p className="text-gray-600 mb-4">
                Create deposits, manage withdrawals, and track transaction history
              </p>
              <div className="inline-flex items-center text-blue-600 font-semibold">
                Coming Soon
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Platform Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Automatic Matching</h4>
              <p className="text-gray-600 text-sm">
                Smart algorithms automatically pair deposits with withdrawals based on amount and availability
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Progress Tracking</h4>
              <p className="text-gray-600 text-sm">
                Visual progress bars show completion status for multi-depositor withdrawals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Admin Oversight</h4>
              <p className="text-gray-600 text-sm">
                Every transaction requires admin approval with receipt verification and UTR tracking
              </p>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            System Online - Admin Dashboard Fully Functional
          </div>
        </div>
      </div>
    </div>
  );
}