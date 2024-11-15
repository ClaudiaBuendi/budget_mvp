import { useState, useEffect } from "react";
import axios from "axios";

//getcategories
export default function CategoryComponent({ onChange }) {
  //initialise state with useState
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    try {
      // communicate with db
      const response = await axios.get("/api/categories");
      console.log(response);
      // update front end state to reflect db info
      setCategories(response.data);
    } catch (error) {
      // handle errors
      console.error("Failed to fetch categories", error);
    }
  };

  const CategoryDropdown = () => {
    // State to hold categories
    const [categories, setCategories] = useState([]);

    // Function to update the categories
    const getCategories = () => {
      const exampleCategories = [
        { id: 1, name: "Transport" },
        { id: 2, name: "Groceries" },
        { id: 3, name: "Eating out" },
        { id: 4, name: "Utilities" },
        { id: 5, name: "Entertainment" },
        { id: 6, name: "Insurance" },
        { id: 7, name: "Rent" },
      ];
      setCategories(exampleCategories);
    };

    // useEffect to run getCategories when component mounts
    useEffect(() => {
      getCategories();
    }, []);

    // Handler for select change
    const handleChange = (event) => {
      const selectedCategoryId = event.target.value;
      console.log("Selected Category ID:", selectedCategoryId);
      // You can handle selected category ID here
    };

    return (
      <div>
        <select name="category_id" onChange={handleChange}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  };
  //   useEffect(() => {
  //     fetchData();
  //     console.log(categories);
  //   }, []);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     onChange(name, value);
  //   };

  //   //   //function to update the categories
  //   //   const getCategories = () => {
  //   //     const exampleCategories = [
  //   //       "Transport",
  //   //       "Groceries",
  //   //       "Eating out",
  //   //       "Utilities",
  //   //       "Entertainment",
  //   //       "Insurance",
  //   //       "Rent",
  //   //     ];
  //   //     setCategories(exampleCategories);
  //   //   };
  //   return (
  //     <div>
  //       <select name="category_id" onChange={handleChange}>
  //         {categories.map((category, index) => (
  //           <option value={category.id}>{category.name}</option>
  //         ))}
  //       </select>
  //     </div>
  //   );
}
