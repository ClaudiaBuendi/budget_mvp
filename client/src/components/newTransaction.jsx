import React, { useState } from "react";
import CategoryComponent from "./Categories";

export default function NewTransaction({ onAddTransaction }) {
  // state for form data
  const [formData, setFormData] = useState({
    category_id: "",
    description: "",
    type: "expense",
    total: "",
    date: "",
    user: "",
  });

  // state for success message
  const [message, setMessage] = useState("");

  // handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle category change
  const handleCategoryChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submission
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

    // Clear message after 3 seconds (optional)
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div>
      <h1>New Transaction</h1>
      <CategoryComponent onChange={handleCategoryChange} />
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
        <input
          type="text"
          name="category_id"
          placeholder="Category"
          value={formData.category_id}
          onChange={handleChange}
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input
          type="text"
          name="user"
          placeholder="username"
          value={formData.user}
          onChange={handleChange}
        />
        <input
          type="number"
          name="total"
          placeholder="total"
          value={formData.total}
          onChange={handleChange}
        />
        <button type="submit">Add Transaction</button>
      </form>

      {/* Show success message if transaction is added */}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}
