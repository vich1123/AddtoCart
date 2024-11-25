import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ addToCart }) => {
  const [products] = useState([
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
    { id: 3, name: 'Product C', price: 200 },
  ]);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/cart')}>Go to Cart</button>
    </div>
  );
};

export default Product;
