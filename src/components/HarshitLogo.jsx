// HarshitLogo.jsx
import React from "react";

const HarshitLogo = ({ width = 200, height = 60, fill = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 100"
    width={width}
    height={height}
    fill={fill}
  >
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily='"Brush Script MT", cursive'
      fontSize="64"
      fill={fill}
    >
      Harshit
    </text>
  </svg>
);

export default HarshitLogo;
