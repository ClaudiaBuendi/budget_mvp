import { useState, useEffect } from "react";
import "./BudgetSummary.css"; // Import the CSS file

export default function BudgetSummary({ transactions, categories }) {
  // state variables: expenses, income, remainingBudget, and categoryTotals are initialized.
  const [expenses, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState({});

  // useEffect now depends on transactions and categories.
  useEffect(() => {
    let tempExpenses = 0;
    let tempIncome = 0;
    const totals = {};

    // Initialize category totals to 0
    categories.forEach((category) => {
      totals[category.name] = 0;
    });

    // Loop through transactions to calculate totals for income, expenses, and category breakdown
    transactions.forEach((transaction) => {
      if (transaction.type === "expense") {
        tempExpenses += transaction.amount;

        const categoryName = categories.find(
          (cat) => cat.id === transaction.category_id
        )?.name;

        if (categoryName) {
          totals[categoryName] += transaction.amount;
        }
      } else if (transaction.type === "income") {
        tempIncome += transaction.amount;
      }
    });

    setExpenses(tempExpenses);
    setIncome(tempIncome);
    setRemainingBudget(tempIncome - tempExpenses); // Calculate remaining budget
    setCategoryTotals(totals); // Set the category breakdown
  }, [transactions, categories]);

  return (
    <div className="full-page-background">
      <div className="budget-summary">
        <h1>Budget Summary</h1>
        <div className="totals">
          <p className="income">Total Income: ${income}</p>
          <p className="expenses">Total Expenses: ${expenses}</p>
        </div>

        {/* Display Remaining Budget */}
        <p className="balance">Remaining Budget: ${remainingBudget}</p>

        {/* Display Expenses by Category */}
        <div className="category-breakdown">
          <h2>Expenses by Category</h2>
          <ul>
            {Object.entries(categoryTotals).map(([category, total]) => (
              <div key={category}>
                {category}: ${total}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
