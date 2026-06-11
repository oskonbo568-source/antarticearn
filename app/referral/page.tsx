'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ReferralPage() {
  const userReferralCode = 'REF-ABC12-XYZ34'; // This would come from the logged-in user
  const [copiedCode, setCopiedCode] = useState(false);
  const [referrals, setReferrals] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2026-06-01', earnings: 500, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2026-06-05', earnings: 1500, status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', joinDate: '2026-06-08', earnings: 2000, status: 'Active' },
  ]);

  const totalReferrals = referrals.length;
  const totalEarnings = referrals.reduce((sum, ref) => sum + ref.earnings, 0);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userReferralCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="section-title">🎁 Referral Program</h1>
          <p className="text-gray-600">Earn ₦2,000 for every successful referral! Share your code and watch your earnings grow.</p>
        </div>

        {/* Your Referral Code Card */}
        <div className="card border-2 border-purple-600 mb-8 bg-gradient-to-r from-purple-50 to-purple-100">
          <h2 className="subsection-title">Your Unique Referral Code</h2>
          <p className="text-gray-600 mb-6">Share this code with friends. They'll need it during registration to get the bonus!</p>
          
          <div className="bg-white p-6 rounded-lg border-2 border-purple-300 mb-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs text-gray-600 mb-2">Your Code</p>
                <p className="text-3xl font-mono font-bold text-purple-600">{userReferralCode}</p>
              </div>
              <button
                onClick={copyToClipboard}
                className={`btn-primary transition ${copiedCode ? 'bg-green-500 hover:bg-green-600' : ''}`}
              >
                {copiedCode ? '✓ Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg">
            <p className="text-sm text-purple-900">
              <strong>💡 Pro Tip:</strong> Share your code on social media, with friends, or in communities to maximize your referrals!
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <p className="text-gray-600 mb-2">Total Referrals</p>
            <p className="text-4xl font-bold text-purple-600">{totalReferrals}</p>
            <p className="text-xs text-gray-500 mt-2">Active members you've invited</p>
          </div>
          <div className="card">
            <p className="text-gray-600 mb-2">Referral Earnings</p>
            <p className="text-4xl font-bold text-purple-600">₦{totalEarnings.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-2">Total earned from referrals</p>
          </div>
          <div className="card">
            <p className="text-gray-600 mb-2">Per Referral Bonus</p>
            <p className="text-4xl font-bold text-purple-600">₦2,000</p>
            <p className="text-xs text-gray-500 mt-2">Earned when they complete 1st task</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="card mb-8 bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300">
          <h2 className="subsection-title">📊 How the Referral Program Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
              <div className="text-3xl text-center mb-3">1️⃣</div>
              <h4 className="font-bold text-purple-900 text-center mb-2">Share Code</h4>
              <p className="text-xs text-gray-600 text-center">Give your referral code to a friend</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
              <div className="text-3xl text-center mb-3">2️⃣</div>
              <h4 className="font-bold text-purple-900 text-center mb-2">They Register</h4>
              <p className="text-xs text-gray-600 text-center">Friend uses your code during signup</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
              <div className="text-3xl text-center mb-3">3️⃣</div>
              <h4 className="font-bold text-purple-900 text-center mb-2">First Deposit</h4>
              <p className="text-xs text-gray-600 text-center">They deposit ₦4,500 or more</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
              <div className="text-3xl text-center mb-3">4️⃣</div>
              <h4 className="font-bold text-purple-900 text-center mb-2">Get ₦2,000</h4>
              <p className="text-xs text-gray-600 text-center">Instant bonus in your account</p>
            </div>
          </div>
        </div>

        {/* Referral Terms */}
        <div className="card mb-8 border-l-4 border-purple-600">
          <h2 className="subsection-title">📋 Referral Program Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-purple-900 mb-3">✅ Eligibility Requirements</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• You must have an active account</li>
                <li>• Your referral must complete registration with your code</li>
                <li>• Referred user must deposit minimum ₦4,500</li>
                <li>• Referred user must complete first task</li>
                <li>• Account must be in good standing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-900 mb-3">💰 Earning Details</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• ₦2,000 bonus per successful referral</li>
                <li>• Unlimited referrals possible</li>
                <li>• Bonus credited within 24 hours</li>
                <li>• No withdrawal limits on referral earnings</li>
                <li>• Stacks with your other earnings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your Referrals Table */}
        <div className="card">
          <h2 className="subsection-title mb-6">👥 Your Referrals</h2>
          <div className="overflow-x-auto">
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Join Date</th>
                  <th>Referral Bonus</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map((ref) => (
                  <tr key={ref.id}>
                    <td className="font-semibold">{ref.name}</td>
                    <td className="text-sm">{ref.email}</td>
                    <td className="text-sm">{new Date(ref.joinDate).toLocaleDateString()}</td>
                    <td className="font-bold text-purple-600">₦{ref.earnings.toLocaleString()}</td>
                    <td>
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                        {ref.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="card mt-8 bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300">
          <h2 className="subsection-title text-center">📱 Share Your Referral Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-blue-400 rounded-lg hover:bg-blue-50 transition">
              <span className="text-xl">👍</span>
              <span className="font-semibold text-sm">Facebook</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-sky-400 rounded-lg hover:bg-sky-50 transition">
              <span className="text-xl">🐦</span>
              <span className="font-semibold text-sm">Twitter</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-green-400 rounded-lg hover:bg-green-50 transition">
              <span className="text-xl">💬</span>
              <span className="font-semibold text-sm">WhatsApp</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-50 transition">
              <span className="text-xl">✉️</span>
              <span className="font-semibold text-sm">Email</span>
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link href="/profile" className="btn-secondary inline-block">
            ← Back to Profile
          </Link>
        </div>
      </div>
    </div>
  );
}