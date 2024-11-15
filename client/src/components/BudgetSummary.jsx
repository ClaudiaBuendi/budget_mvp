//This component calculates totals and balance based on transactions.
import { useState, useEffect } from "react";
import "./BudgetSummary.css"; // Import the CSS file

export default function BudgetSummary({ transactions }) {
  //state variables: expenses and income are initialised with null. They will hold the totals for expenses and income.
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);

  //useEffect now depends on transactions, so whenever the transactions prop updates, the totals for income and expenses will automatically recalculate.
  useEffect(() => {
    let tempExpenses = 0;
    let tempIncome = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "expense") {
        tempExpenses += transaction.amount;
      } else if (transaction.type === "income") {
        tempIncome += transaction.amount;
      }
    });

    //set the totals in state
    setExpenses(tempExpenses);
    setIncome(tempIncome);
  }, [transactions]);

  return (
    <div className="full-page-background">
      <div className="budget-summary">
        <h1>Budget Summary</h1>
        <div className="totals">
          <p className="income">Total Income: ${income}</p>
          <p className="expenses">Total Expenses: ${expenses}</p>
        </div>
        <p>Total Income: ${income}</p>
        <p>Total Expenses: ${expenses}</p>
      </div>
    </div>
  );
}
