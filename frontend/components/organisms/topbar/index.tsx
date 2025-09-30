import AddButton from "@/components/molecules/buttons/addButton";
import NavItem from "@/components/molecules/navItem";
import React, { useEffect, useRef, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";

const Topbar = ({ onClick }: { onClick: () => void }) => {
  const [showNav, setShowNav] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNav]);
  return (
    <div className="w-full gap-8 flex items-center">
      <IoMdMenu className="text-4xl lg:hidden visible text-[#f9f9f9]" onClick={() => setShowNav(true)}/>
      <AddButton onClick={onClick} />

      {showNav && (
        <div className="w-full fixed top-0 left-0 h-full bg-[rgba(0,0,0,0.8)] items-center flex visible lg:hidden">
          <div ref={navRef} className="w-[20%] h-full bg-[#2C3440] flex flex-col gap-16 px-4 py-2">
            <div className="flex gap-4 w-[70%] items-center">
              <div>
                <img src="/assets/images/logo.png" alt="" />
              </div>
              <h1 className="text-[#29A19C] font-semibold text-lg">
                Todo Book
              </h1>
            </div>

            <div className="w-full flex flex-col gap-2">
              <NavItem route="/" text="Главная" icon={<BiHomeAlt />} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
