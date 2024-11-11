import React from "react";

type HeadingProps = {
  text: string;
  level?: 1 | 2 | 3;
};

const Heading: React.FC<HeadingProps> = ({ text, level = 1 }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className="text-2xl font-bold">{text}</Tag>;
};

export default Heading;
