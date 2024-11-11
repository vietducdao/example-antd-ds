import React from "react";
import NavItem from "../../atoms/item/NavItem";

const NavBar: React.FC = () => (
  <nav className="flex space-x-8 text-[14px]">
    <NavItem label="Home" href="#home" />
    <NavItem label="About Us" href="#about" />
    <NavItem label="Projects" href="#projects" />
    <NavItem label="Services" href="#services" />
    <NavItem label="Contact Us" href="#contact" active />
  </nav>
);

export default NavBar;
