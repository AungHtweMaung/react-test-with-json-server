
import React, { useState } from 'react';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99,
    image: 'https://via.placeholder.com/200x150?text=Headphones',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 129.99,
    image: 'https://via.placeholder.com/200x150?text=Smart+Watch',
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    price: 39.99,
    image: 'https://via.placeholder.com/200x150?text=Mouse',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 89.99,
    image: 'https://via.placeholder.com/200x150?text=Keyboard',
  },
];

export default function HomePage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Online Shop</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button style={styles.button} onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

