import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import BudgetSummary from "./components/BudgetSummary";
import NewTransaction from "./components/newTransaction";
import TransactionList from "./components/TransactionList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header"; // Import Header component

export default function App() {
  let [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]); // <-- Add this line here

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/transactions");
      setTransactions(response.data);
    } catch (error) {
      console.error("Failed to fetch transactions", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data); // assuming the response contains an array of categories
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch transactions when component mounts
    fetchCategories(); // Fetch categories when component mounts
  }, []);

  const addTransaction = async (transaction) => {
    try {
      let response = await axios.post("/api/new-transactions", transaction, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchData();
    } catch (error) {
      console.error("Failed to add transaction", error);
    }
  };

  return (
    <>
      {/* Add the Header above the navigation links */}
      <Header />

      {/* Button container with className */}
      <div className="button-container">
        <Link to="/" className="button">
          Home
        </Link>
        <Link to="/budget-summary" className="button">
          Budget Summary
        </Link>
        <Link to="/new-transaction" className="button">
          New Transaction
        </Link>
        <Link to="/transaction-list" className="button">
          Transaction List
        </Link>
        <Link to="/login" className="button">
          Login
        </Link>
        <Link to="/register" className="button">
          Register
        </Link>
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/budget-summary"
          element={
            <BudgetSummary
              transactions={transactions}
              categories={categories}
            />
          }
        />
        <Route
          path="/new-transaction"
          element={<NewTransaction onAddTransaction={addTransaction} />}
        />
        <Route
          path="/transaction-list"
          element={<TransactionList transactions={transactions} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
