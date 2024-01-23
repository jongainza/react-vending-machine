import React from "react";
import "./image.css";

const Chocolate = () => {
  return (
    <div className="Chocolate">
      <h2>Chocolate</h2>
      <img
        className="image"
        src="https://post.healthline.com/wp-content/uploads/2021/02/dark-chocolate-bar-1296x728-header.jpg"
      />
      <ul>
        <li>Calories: 288</li>
        <li>Price: 7.15</li>
      </ul>
    </div>
  );
};

export default Chocolate;
