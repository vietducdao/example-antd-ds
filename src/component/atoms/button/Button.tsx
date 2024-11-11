import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  direction: "left" | "right";
  additionalClasses?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  direction,
  additionalClasses = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex  items-center justify-center space-x-2 ${additionalClasses}`}
    >
      {direction === "left" && <span>←</span>}
      <span>{label}</span>
      {direction === "right" && <span>→</span>}
    </button>
  );
};

export default Button;
