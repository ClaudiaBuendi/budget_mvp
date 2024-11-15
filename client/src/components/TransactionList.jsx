import { useState, useEffect } from "react";

export default function Transactions({ transactions }) {
  return (
    <div className="container">
      <h1>Transaction List</h1>
      <div>
        {transactions.map((transaction) => (
          <div key={transaction.id}>
            <h2>
              {transaction.description} - {transaction.type}
            </h2>
            <p>{transaction.date.slice(0, -14)}</p>
            <p>${transaction.total || transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
