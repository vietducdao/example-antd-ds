import React from "react";

type TextProps = {
  children: React.ReactNode;
  isBold?: boolean;
  additionalClasses?: string;
  className?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  isBold = false,
  additionalClasses = "",
  className = "",
}) => {
  return (
    <p
      className={`${
        isBold ? "font-bold" : ""
      } ${className} ${additionalClasses}`}
    >
      {children}
    </p>
  );
};

export default Text;
