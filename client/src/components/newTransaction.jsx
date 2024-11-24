import React, { useState } from "react";
import CategoryComponent from "./Categories";

export default function NewTransaction({ onAddTransaction }) {
  //state (formData) manages input values for each field
  const [formData, setFormData] = useState({
    category_id: "",
    description: "",
    type: "expense",
    total: "",
    date: "",
    user: "",
  });

  // handleChange function updates formData based on user input
  const handleChange = (e) => {
    //Destructuring e.target into name and value allows this function to dynamically update each form field based on the name attribute
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // function to handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Call onAddTransaction and pass the form data
    onAddTransaction({ ...formData, total: parseFloat(formData.total) });

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
        {/* Category ID input */}
        <input
          type="text"
          name="category_id"
          placeholder="Category"
          value={formData.category_id}
          onChange={handleChange} // Add the onChange handler here
        />

        {/* Type select dropdown */}
        <select
          name="type"
          value={formData.type}
          onChange={handleChange} // Ensure this is outside the options
        >
          <option value="Utilities">Utilities</option>
          <option value="Income">Income</option>
          <option value="Transport">Transport</option>
          <option value="Groceries">Groceries</option>
          <option value="Eating Out">Eating Out</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Insurance">Insurance</option>
          <option value="Rent/Mortgage">Rent/Mortgage</option>
        </select>
        {/* <input
        type="text"
        name="category_id"
        placeholder="Category"
        value={formData.category_id}
        onChange={handleChange}
      /> */}
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
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}
