import React from "react";

type IconProps = {
  icon: React.ReactNode;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ icon, color = "text-blue-700" }) => {
  return <div className={`text-4xl ${color}`}>{icon}</div>;
};

export default Icon;
