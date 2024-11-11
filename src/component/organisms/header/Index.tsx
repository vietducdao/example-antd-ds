import React from "react";
import Logo from "../../atoms/logo/Index";
import Navbar from "../../molecules/navbar/Index";

const Header: React.FC = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
