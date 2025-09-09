import React from "react";

function Filters({ search, setSearch, category, setCategory, setCurrentPage }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setCurrentPage(1);
        }}
      >
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Travel">Travel</option>
        <option value="Food">Food</option>
      </select>
    </div>
  );
}

export default Filters;
