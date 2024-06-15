import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/carts/3');
        setCart(response.data.products);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      const productDetails = await Promise.all(
        cart.map(async (item) => {
          try {
            const response = await axios.get(`https://fakestoreapi.com/products/${item.productId}`);
            return response.data;
          } catch (error) {
            console.error('Error fetching product data:', error);
            return null;
          }
        })
      );
      setProducts(productDetails.filter(product => product !== null));
    };

    if (cart.length > 0) {
      fetchProductData();
    }
  }, [cart]);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCart;
