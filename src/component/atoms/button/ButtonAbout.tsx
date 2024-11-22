import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 border font-semibold ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
