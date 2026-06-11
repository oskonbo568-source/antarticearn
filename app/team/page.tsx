'use client';

import { useState } from 'react';

export default function TeamPage() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const groups = [
    {
      id: 1,
      name: 'Premium Earners',
      description: 'A community of dedicated earners working together',
      members: 1250,
      badge: '⭐',
      minDeposit: 'VIP 1+',
      bonus: 'Extra 5% on tasks',
      members_list: ['User1', 'User2', 'User3', 'User4', 'User5']
    },
    {
      id: 2,
      name: 'Task Masters',
      description: 'Expert task completers sharing tips and strategies',
      members: 850,
      badge: '🎯',
      minDeposit: 'All',
      bonus: 'Daily challenges',
      members_list: ['UserA', 'UserB', 'UserC', 'UserD', 'UserE']
    },
    {
      id: 3,
      name: 'Referral Kings',
      description: 'Focus on referral rewards and network growth',
      members: 650,
      badge: '👑',
      minDeposit: 'VIP 3+',
      bonus: 'Exclusive referral codes',
      members_list: ['Member1', 'Member2', 'Member3', 'Member4', 'Member5']
    },
    {
      id: 4,
      name: 'Survey Specialists',
      description: 'Complete surveys and earn consistent income',
      members: 2100,
      badge: '📋',
      minDeposit: 'All',
      bonus: '10% bonus per survey',
      members_list: ['SurveyUser1', 'SurveyUser2', 'SurveyUser3', 'SurveyUser4', 'SurveyUser5']
    },
    {
      id: 5,
      name: 'VIP Exclusive Club',
      description: 'Premium group for high-value members',
      members: 320,
      badge: '💎',
      minDeposit: 'VIP 5+',
      bonus: 'Premium tasks, higher rewards',
      members_list: ['VIPUser1', 'VIPUser2', 'VIPUser3', 'VIPUser4', 'VIPUser5']
    },
    {
      id: 6,
      name: 'Newbies Welcome',
      description: 'Support group for new members getting started',
      members: 3400,
      badge: '🌱',
      minDeposit: 'All',
      bonus: 'Guided tasks & support',
      members_list: ['NewUser1', 'NewUser2', 'NewUser3', 'NewUser4', 'NewUser5']
    },
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="section-title">Join Our Teams & Groups</h1>
          <p className="text-gray-600">Connect with other earners and unlock group bonuses</p>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div key={group.id} className="card hover:shadow-lg transition-all cursor-pointer" onClick={() => setSelectedGroup(group)}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{group.badge}</span>
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {group.members.toLocaleString()} members
                </span>
              </div>
              
              <h3 className="font-bold text-lg text-purple-900 mb-2">{group.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{group.description}</p>
              
              <div className="bg-purple-50 p-3 rounded mb-4">
                <p className="text-xs text-gray-600 mb-1">📌 Group Bonus</p>
                <p className="text-sm font-semibold text-purple-600">{group.bonus}</p>
              </div>

              <div className="flex justify-between items-center mb-4 pb-4 border-b border-purple-200">
                <div>
                  <p className="text-xs text-gray-600">Min. Requirement</p>
                  <p className="font-semibold text-purple-600 text-sm">{group.minDeposit}</p>
                </div>
              </div>

              <button className="btn-primary w-full">
                Join Group
              </button>
            </div>
          ))}
        </div>

        {/* Modal for Group Details */}
        {selectedGroup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedGroup(null)}>
            <div className="bg-white rounded-xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className="text-5xl text-center mb-4">{selectedGroup.badge}</div>
              <h2 className="text-2xl font-bold text-center mb-2 text-purple-900">{selectedGroup.name}</h2>
              <p className="text-gray-600 text-center mb-4">{selectedGroup.description}</p>
              
              <div className="bg-purple-50 p-4 rounded mb-4">
                <p className="font-semibold text-purple-900 mb-2">Group Benefits:</p>
                <p className="text-sm text-gray-700 mb-2">✓ {selectedGroup.bonus}</p>
                <p className="text-sm text-gray-700 mb-2">✓ Connect with {selectedGroup.members.toLocaleString()} members</p>
                <p className="text-sm text-gray-700">✓ Exclusive group challenges</p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-purple-900 mb-2">Active Members:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedGroup.members_list.map((member, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setSelectedGroup(null)} className="btn-secondary flex-1">
                  Close
                </button>
                <button className="btn-primary flex-1">
                  Join Group
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}