import React from "react";

type TextProps = {
  children: React.ReactNode;
  isBold?: boolean;
  additionalClasses?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  isBold = false,
  additionalClasses = "",
}) => {
  return (
    <p className={`${isBold ? "font-bold" : ""} ${additionalClasses}`}>
      {children}
    </p>
  );
};

export default Text;
