'use client';

export default function TransactionHistory() {
  const transactions = [
    { id: 1, type: 'Deposit', amount: 4500, date: '2026-06-01', status: 'Completed' },
    { id: 2, type: 'Task Completion', amount: 1000, date: '2026-06-02', status: 'Completed' },
    { id: 3, type: 'Bonus', amount: 500, date: '2026-06-01', status: 'Completed' },
    { id: 4, type: 'Withdrawal', amount: 3000, date: '2026-06-10', status: 'Pending' },
  ];

  return (
    <div className="card">
      <h2 className="subsection-title mb-6">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td className="font-semibold">{tx.type}</td>
                <td className="font-bold text-purple-600">₦{tx.amount.toLocaleString()}</td>
                <td>{new Date(tx.date).toLocaleDateString()}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tx.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}