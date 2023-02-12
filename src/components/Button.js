import React from "react";

const Button = ({ children, color }) => {
  const txtColor = color === "white" ? "text-white" : "text-primary";
  return (
    <button
      className={`${txtColor} font-bold  text-xs py-3 px-6 rounded-lg border-2 border-dark-400`}
    >
      {children}
    </button>
  );
};

export default Button;
