import React from "react";

type HeadingProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ text, level = 2, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`font-bold ${className}`}>{text}</Tag>;
};

export default Heading;
