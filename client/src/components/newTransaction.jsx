import React, { useState } from "react";
import CategoryComponent from "./Categories";

export default function NewTransaction({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    category_id: "",
    description: "",
    type: "expense",
    total: "",
    date: "",
    // user: "",
  });
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle category change
  const handleCategoryChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call onAddTransaction and pass the form data
    onAddTransaction({ ...formData, total: parseFloat(formData.total) });

    // Show success message
    setMessage("Transaction added successfully!");

    // Reset form fields after submission
    setFormData({
      category_id: "",
      description: "",
      type: "expense",
      total: "",
      date: "",
      user: "",
    });
  };

  return (
    <div>
      <div className="header-banner">
        <h1 className="h1">New Transaction</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <CategoryComponent onChange={handleCategoryChange} />
        <input
          type="number"
          name="total"
          placeholder="Total"
          value={formData.total}
          onChange={handleChange}
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        {/* <input
          type="text"
          name="user"
          placeholder="Username"
          value={formData.user}
          onChange={handleChange}
        /> */}
        <button type="submit">Add Transaction</button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}
