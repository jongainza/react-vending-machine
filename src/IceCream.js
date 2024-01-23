import React from "react";
import "./image.css";

const IceCream = () => {
  return (
    <div className="IceCream">
      <h2>Ice Cream</h2>
      <img
        className="image"
        src="https://images.squarespace-cdn.com/content/v1/5eecc807ed0b34634531b2eb/1645802422007-G7SB4ZC8NVZBZBEUZRU8/FOIC_NZICBLOG1.jpg"
      />
      <ul>
        <li>Calories: 740</li>
        <li>Price: 3.48</li>
      </ul>
    </div>
  );
};

export default IceCream;
