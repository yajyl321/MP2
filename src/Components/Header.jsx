import React from "react";
import logo from "./../assets/Images/logo.png";
import { HiHome } from "react-icons/hi2";
import { FaBriefcase, FaEnvelope } from "react-icons/fa";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },

    {
      name: "Services",
      icon: FaBriefcase,
    },
    {
      name: "Contact Us",
      icon: FaEnvelope,
    },
  ];

  return (
    <div className="flex items-center gap-8 justify-between p-5">
      <img src={logo} className="w-[50px] md:w-[80px] object-cover" />
      <div className="flex gap-8">
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default Header;
