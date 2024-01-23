import React from "react";
import "./image.css";

const Cookies = () => {
  return (
    <div className="Cookies">
      <h2>Cookies</h2>
      <img
        className="image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/800px-2ChocolateChipCookies.jpg"
      />
      <ul>
        <li>Calories: 499</li>
        <li>Price: 3.99</li>
      </ul>
    </div>
  );
};

export default Cookies;
