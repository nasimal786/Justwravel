import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (category) => {
    setFilteredCategory(category);
  };

  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
  };

  const filteredAndSortedProducts = () => {
    const filteredProducts = products.filter(
      (product) => !filteredCategory || product.category === filteredCategory
    );

    return filteredProducts.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
  };

  return (
    <div className="max-w m-6 text-xs">
      {/* Sorting and filtering options */}
      <div className="flex justify-end space-x-4 mb-4">
        {/* Sorting dropdown */}
        <div className="relative">
          <label className="text-gray-600">Sort by Price:</label>
          <select
            className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={sortOrder}
            onChange={handleSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Filtering options */}
        <div className="flex space-x-4 items-center">
          <div className="relative">
            <label className="text-gray-600">Filter:</label>
            <select
              className="block appearance-none bg-white border border-gray-300 hover:border-gray-400 px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={filteredCategory}
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women Clothing</option>
              <option value="men's clothing">Men Clothing</option>
            </select>
          </div>
        </div>
      </div>

      {/* Render the product cards based on the sorting and filtering */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredAndSortedProducts().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
