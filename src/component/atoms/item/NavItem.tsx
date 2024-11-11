import React from "react";

interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, active }) => (
  <a
    href={href}
    className={`text-gray-800 ${
      active ? "text-orange-500" : ""
    } hover:text-red-500`}
  >
    {label}
  </a>
);

export default NavItem;
