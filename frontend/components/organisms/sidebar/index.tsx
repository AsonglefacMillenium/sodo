import NavItem from "@/components/molecules/navItem";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-[#2C3440] flex flex-col gap-16 px-6 py-2">
      <div className="flex gap-4 w-[70%] items-center">
        <div>
          <img src="/assets/images/logo.png" alt="" />
        </div>
        <h1 className="text-[#29A19C] font-semibold text-lg">Todo Book</h1>
      </div>

      <div className="w-full flex flex-col gap-2">
        <NavItem route="/" text="Главная" icon={<BiHomeAlt />} />
      </div>
    </div>
  );
};

export default Sidebar;
