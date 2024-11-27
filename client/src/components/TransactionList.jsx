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
            <p>{transaction.date.slice(0, 10)}</p>{" "}
            {/* Sliced to show only the date */}
            <p>${transaction.total || transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
