import React from "react";
import Link from "next/link";
import { LuSearch, LuUser2, LuShoppingCart } from "react-icons/lu";

import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Input } from "../ui/Input";
import { Button } from "../ui/button";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { cls } from "../../utils/cls";


interface NavbarProps {
  currentuser?: boolean;
}

export interface NavbarInterface {
  name?: string;
  className?: string;

  link?: string;
  onClick?: string;
  icon?: React.ReactNode | string;
}

const Navbar: React.FC<NavbarProps> = ({ currentuser = true }) => {


  const navbarButton: NavbarInterface[] = [
    {
      icon: <LanguageSwitcher />,
      className: "hidden md:block"
    },
    {
      icon: currentuser ? <LuUser2 /> : "Login",
      link: "profile",
    },
    {
      icon: <LuShoppingCart />,
      link: "cart",
    },
  ];

  return (
    <MaxWidthWrapper className="lg:py-4 py-2 flex items-center justify-center  ">

      <nav className="w-full  flex justify-between gap-10 items-center   ">
        <div className="flex text-2xl items-center">
          <Link href="/">
            <span>
              Anycore
            </span>
          </Link>
          {/* <Image src={ayncore} height={40} width={100} alt="AYNcore" /> */}
        </div>

        <div className="flex relative items-center w-full space-x-8">
          <Input placeholder="search..." className="rounded-sm w-full h-10 px-4" />
          <Button
            className=" 
            bg-red-500
            absolute 
            right-0 
            text-white
            inset-y-0
            p-4
            flex
            items-center justify-center
            "

          >
            <LuSearch />
          </Button>
        </div>

        <div className="flex items-center space-x-2">

          {navbarButton.map((navButton, index) => (
            <Link href={`/${navButton.link}`} key={index}
              className={cls(" hover:text-gray-500 transition-all ease-in-out duration-700 text-xl", navButton.className)}>
              {navButton.icon}
            </Link>
          ))}
        </div>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
