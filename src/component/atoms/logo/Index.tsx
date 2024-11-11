import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 text-blue-700 font-bold text-2xl">
      <img src="/images/icon.svg" alt="Logo" className="h-8 w-8" />{" "}
      <span className="text-2xl font-bold text-blue-700 ml-2">TheBox</span>
    </div>
  );
};
export default Logo;
