'use client';

import Link from 'next/link';

export default function AccountPage() {
  const userInfo = {
    name: 'User Name',
    email: 'user@antarticearn.com',
    phone: '09021318622',
    vipLevel: 'VIP 1',
    joinDate: 'June 1, 2026',
    totalEarnings: 5500,
    balance: 2000
  };

  return (
    <div className="min-h-screen bg-purple-50 py-8 px-4 pb-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">👤 Account</h1>
        <p className="text-gray-600 mb-8">Manage your profile and settings</p>

        {/* Profile Card */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-8 mb-8 text-white shadow-lg">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{userInfo.name}</h2>
              <p className="text-purple-100">{userInfo.email}</p>
            </div>
            <div className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold">
              ⭐ {userInfo.vipLevel}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-purple-700 bg-opacity-50 p-4 rounded-lg">
              <p className="text-purple-100 text-sm mb-1">Phone</p>
              <p className="font-bold">{userInfo.phone}</p>
            </div>
            <div className="bg-purple-700 bg-opacity-50 p-4 rounded-lg">
              <p className="text-purple-100 text-sm mb-1">Member Since</p>
              <p className="font-bold">{userInfo.joinDate}</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-200">
            <p className="text-gray-600 text-sm mb-2">Total Earnings</p>
            <p className="text-3xl font-bold text-green-600">₦{userInfo.totalEarnings.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-200">
            <p className="text-gray-600 text-sm mb-2">Current Balance</p>
            <p className="text-3xl font-bold text-blue-600">₦{userInfo.balance.toLocaleString()}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-purple-200">
            <p className="text-gray-600 text-sm mb-2">VIP Status</p>
            <p className="text-3xl font-bold text-purple-600">VIP 1</p>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">⚙️ Account Settings</h3>
          
          <div className="space-y-2">
            <button className="w-full text-left p-4 hover:bg-purple-50 rounded-lg transition border-b border-gray-200 flex justify-between items-center">
              <span className="font-semibold text-gray-800">Edit Profile</span>
              <span>→</span>
            </button>
            
            <button className="w-full text-left p-4 hover:bg-purple-50 rounded-lg transition border-b border-gray-200 flex justify-between items-center">
              <span className="font-semibold text-gray-800">Change Password</span>
              <span>→</span>
            </button>

            <button className="w-full text-left p-4 hover:bg-purple-50 rounded-lg transition border-b border-gray-200 flex justify-between items-center">
              <span className="font-semibold text-gray-800">Transaction History</span>
              <span>→</span>
            </button>

            <button className="w-full text-left p-4 hover:bg-purple-50 rounded-lg transition border-b border-gray-200 flex justify-between items-center">
              <span className="font-semibold text-gray-800">Bank Accounts</span>
              <span>→</span>
            </button>

            <button className="w-full text-left p-4 hover:bg-red-50 rounded-lg transition flex justify-between items-center">
              <span className="font-semibold text-red-600">Logout</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-purple-200 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-around items-center h-20">
            <Link href="/" className="flex flex-col items-center justify-center w-full h-20 text-gray-500 hover:text-purple-400 transition">
              <span className="text-2xl mb-1">🏠</span>
              <span className="text-xs font-semibold">Home</span>
            </Link>
            <Link href="/tasks" className="flex flex-col items-center justify-center w-full h-20 text-gray-500 hover:text-purple-400 transition">
              <span className="text-2xl mb-1">💼</span>
              <span className="text-xs font-semibold">Tasks</span>
            </Link>
            <Link href="/referral" className="flex flex-col items-center justify-center w-full h-20 text-gray-500 hover:text-purple-400 transition">
              <span className="text-2xl mb-1">🎁</span>
              <span className="text-xs font-semibold">Referral</span>
            </Link>
            <Link href="/account" className="flex flex-col items-center justify-center w-full h-20 text-purple-600 border-b-4 border-purple-600 hover:bg-purple-50 transition">
              <span className="text-2xl mb-1">👤</span>
              <span className="text-xs font-semibold">Account</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}