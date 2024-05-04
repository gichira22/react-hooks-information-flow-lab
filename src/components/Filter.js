// Filter.js

import React from "react";

const Filter = ({ onCategoryChange }) => {
  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" onChange={handleChange}>
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>
    </div>
  );
};

export default Filter;
