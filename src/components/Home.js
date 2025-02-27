import React from "react";
import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.jpg";
import A3 from "../assets/A3.jpg";
import A4 from "../assets/A4.jpg";
import A5 from "../assets/A5.jpg";
import A6 from "../assets/A6.jpg";
import A7 from "../assets/A7.jpg";
import A8 from "../assets/A8.jpg";
import A9 from "../assets/A9.jpg";

import "./Home.css"; // Ensure this CSS file is linked

const products = [
  { id: 1, img: A1, name: "Sneaker 1", price: "₹4,999" },
  { id: 2, img: A2, name: "Sneaker 2", price: "₹5,499" },
  { id: 3, img: A3, name: "Sneaker 3", price: "₹6,299" },
  { id: 4, img: A4, name: "Sneaker 4", price: "₹4,799" },
  { id: 5, img: A5, name: "Sneaker 5", price: "₹5,999" },
  { id: 6, img: A6, name: "Sneaker 6", price: "₹6,499" },
  { id: 7, img: A7, name: "Sneaker 7", price: "₹10,899" },
  { id: 8, img: A8, name: "Sneaker 8", price: "₹9,999" },
  { id: 9, img: A9, name: "Sneaker 9", price: "8,799" },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Welcome to Our Store</h1>
      <h1 className="brand-name">ANIOR</h1>

      <p className="subtitle">Explore our latest sneaker collection.</p>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <img src={product.img} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
