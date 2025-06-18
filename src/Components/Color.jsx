import React from "react";

const Color = ({ color, setColor }) => {
  return (
    <div className="ml-20 bg-emerald-200">
      <input
        type="text"
        onChange={(e) => setColor(e.target.value)}
        className="border-1 rounded-full"
        placeholder="Enter the Color"
        value={color}
      />
    </div>
  );
};

export default Color;
