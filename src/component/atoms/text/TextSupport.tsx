import React from "react";

type TextProps = {
  text: string;
  size?: string;
  color?: string;
};

const Text: React.FC<TextProps> = ({
  text,
  size = "text-lg",
  color = "text-blue-800",
}) => {
  return <p className={`${size} ${color} font-semibold text-center`}>{text}</p>;
};

export default Text;
