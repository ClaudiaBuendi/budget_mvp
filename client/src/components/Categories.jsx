import { useState, useEffect } from "react";
import axios from "axios";

export default function CategoryComponent({ onChange }) {
  const [categories, setCategories] = useState([]);

  // Fetch categories from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchData();
  }, []); // Run only once when the component mounts

  // Handle category selection
  const handleCategoryChange = (e) => {
    onChange("category_id", e.target.value); // Pass selected category ID to parent component
  };

  return (
    <div>
      <select name="category_id" onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
