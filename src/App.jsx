import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Card from './components/Card';
import { fetchData } from './services/api';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchData();
        console.log("Fetched data:", data);
        setProducts(Object.values(data.products));
        setFilteredProducts(Object.values(data.products)); // Initialize filteredProducts with all products
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === 'minPrice' || name === 'maxPrice') {
      filterByPrice(name, value);
    } else {
      filterByOther(name, value);
    }
  };

  const filterByPrice = (name, value) => {
    const minPrice = name === 'minPrice' ? parseFloat(value) : parseFloat(document.getElementById('minPrice').value);
    const maxPrice = name === 'maxPrice' ? parseFloat(value) : parseFloat(document.getElementById('maxPrice').value);

    const filtered = products.filter(product => {
      const price = parseFloat(product.price);
      return price >= minPrice && price <= maxPrice;
    });
    
    console.log("Filtered products by price:", filtered);
    setFilteredProducts(filtered);
  };

  const filterByOther = (name, value) => {
    const subcategoryInput = document.getElementById('subcategory');
    const subcategory = name === 'subcategory' ? value : subcategoryInput?.value ?? '';

    const sortInput = document.getElementById('sort');
    const sort = name === 'sort' ? value : sortInput?.value ?? '';

    let filtered = [...products];

    if (subcategory.trim() !== '') {
        filtered = filtered.filter(product => product.subcategory && product.subcategory.toLowerCase().includes(subcategory.toLowerCase()));
    }

    if (sort === 'asc') {
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sort === 'desc') {
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredProducts(filtered);
};


  return (
    <div className="container mx-auto">
      <Filter handleFilterChange={handleFilterChange} />
      <Card products={filteredProducts} />
    </div>
  );
};

export default App;
