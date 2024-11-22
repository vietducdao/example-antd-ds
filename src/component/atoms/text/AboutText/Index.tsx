import React from "react";

interface AboutTextProps {
  title: string;
  description: string;
}

const AboutText: React.FC<AboutTextProps> = ({ description }) => {
  return (
    <div className="text-white">
      <p className="mb-4">{description}</p>
    </div>
  );
};

export default AboutText;
