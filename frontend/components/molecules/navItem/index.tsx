import Link from "next/link";
import { ReactNode } from "react";
import { BiHomeAlt } from "react-icons/bi";

interface NavItemProps {
  text: string;
  route: string;
  icon: ReactNode;
}
const NavItem = ({ ...props }: NavItemProps) => {
  return (
    <Link href={props.route} className="flex gap-4 text-normal text-[#f9f9f9] items-center">
      <div className="text-[#f9f9f9] text-lg">{props.icon}</div>

      <p>{props.text}</p>
    </Link>
  );
};

export default NavItem;
