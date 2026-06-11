'use client';

import Link from 'next/link';

export default function DepositPage() {
  const packages = [
    { id: 1, name: 'Package 1', price: 1000, daily: 1000, total: 60000, validity: '60 days' },
    { id: 2, name: 'Package 2', price: 5000, daily: 1668, total: 99960, validity: '60 days' },
    { id: 3, name: 'Package 3', price: 10000, daily: 3333, total: 199980, validity: '60 days' },
    { id: 4, name: 'Package 4', price: 20000, daily: 6668, total: 399960, validity: '60 days' },
    { id: 5, name: 'Package 5', price: 40000, daily: 13333, total: 799980, validity: '60 days' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">💳 Deposit</h1>
      <p className="text-gray-600 mb-8">Choose a package and start earning</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border-2 border-purple-200">
            <h3 className="text-xl font-bold text-purple-600 mb-4">{pkg.name}</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Investment:</span>
                <span className="font-bold text-orange-600">₦{pkg.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Daily Return:</span>
                <span className="font-bold text-green-600">₦{pkg.daily.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Return:</span>
                <span className="font-bold text-purple-600">₦{pkg.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Validity:</span>
                <span className="font-bold">{pkg.validity}</span>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition">
              Select & Deposit
            </button>
          </div>
        ))}
      </div>

      {/* Payment Instructions */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
        <h3 className="font-bold text-orange-900 mb-3">💰 Payment Information</h3>
        <p className="text-sm text-orange-800 mb-4">
          Bank Transfer to: <br/>
          <strong>9021318622 (Opay)</strong><br/>
          Account: AntarcticEarn
        </p>
        <p className="text-xs text-orange-700">Supported methods: Paystack, Opay, Titan</p>
      </div>

      <Link href="/" className="inline-block">
        <button className="text-purple-600 font-semibold hover:underline">← Back to Home</button>
      </Link>
    </div>
  );
}