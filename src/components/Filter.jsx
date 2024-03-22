

import React from 'react';

const Filter = ({ handleFilterChange }) => {
  return (
    <div className="p-4 bg-gray-200 flex flex-col justify-center items-center h-full">
      <h2 className="text-lg font-semibold mb-2 inline">Filter Products</h2>
      <form onChange={handleFilterChange}>
        <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col">
            <label htmlFor="subcategory">Subcategory:</label>
            <select id="subcategory" name="subcategory" className="border p-2 rounded-md">
                <option value="mobile">Mobile</option>
                <option value="tablet">Tablet</option>
                <option value="smart-watches">Smart Watches</option>
                <option value="fitness-tracker">Fitness Tracker</option>
            </select>
        </div>

          <div className="flex flex-col">
            <label htmlFor="priceRange">Price Range:</label>
            <input type="number" id="minPrice" name="minPrice" placeholder="Min" className="border p-2 rounded-md" />
            <input type="number" id="maxPrice" name="maxPrice" placeholder="Max" className="border p-2 rounded-md" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="sort">Sort:</label>
            <select id="sort" name="sort" className="border p-2 rounded-md">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
