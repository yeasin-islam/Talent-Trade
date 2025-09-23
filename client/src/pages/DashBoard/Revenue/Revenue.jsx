import React from "react";

const Revenue = () => {
  const earnings = []; // Fetch earnings history

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Revenue & Payments</h2>

      {earnings.length === 0 ? (
        <p>No payments yet.</p>
      ) : (
        <table className="table-auto w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((item, idx) => (
              <tr key={idx} className="text-center">
                <td>{item.date}</td>
                <td>${item.amount}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Revenue;
