import React from 'react';

// Define the products array
const products = [
  { id: 1, name: 'Laptop', description: 'High-performance laptop for professionals.', price: 1200 },
  { id: 2, name: 'Smartphone', description: 'Latest model with advanced features.', price: 800 },
  { id: 3, name: 'VR Experience Headset', description: 'Immerse yourself in stunning virtual worlds with cutting-edge visual fidelity and seamless tracking.', price: 800 },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="Product-item">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
