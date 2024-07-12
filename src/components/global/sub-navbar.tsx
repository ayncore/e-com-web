import React from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";

// import logo from "@/assets/company/ayncorewhiteicon.png";
import MaxWidthWrapper from "../layout/max-width-wrapper";



export interface NavbarInterface {
    name?: string;
    link?: string;
    onClick?: string;
    icon?: React.ReactNode | string;
}

const SubNavbar: React.FC = () => {
    const navbarLink: NavbarInterface[] = [
        {
            name: "Men",
            link: "collections/men",
        },
        {
            name: "Women",
            link: "collections/women",
        },
        {
            name: "Electronics",
            link: "collections/electronics",
        },
        {
            name: "Sport",
            link: "collections/sport",
        },
        {
            name: "Electronics",
            link: "collections/electronics",
        },
        {
            name: "Sport",
            link: "collections/sport",
        },
        {
            name: "Groceries",
            link: "collections/groceries",
        },
        {
            name: "Fashion",
            link: "collections/fashion",
        },
    ];



    return (
        <MaxWidthWrapper className="lg:py-4 py-4 flex items-center justify-center  ">

            <nav className="w-full   flex justify-between items-center   ">
                {/* Left side: Logo */}
                <div className="flex gap-10 w-fit items-center">
                    <span className="hidden md:block">
                        All Categoris
                    </span>
                    <BiMenu />
                </div>

                {/* Center: SubNavbar links */}
                <div className="flex items-center w-f mx-auto   text font-semibold space-x-8">
                    {navbarLink.map((navLink, index) => (
                        <Link href={`/${navLink.link}`} key={index}
                            className=" hover:text-gray-500 transiton-all ease-in-out duration-500">{navLink.name}
                        </Link>
                    ))}
                </div>



            </nav>
        </MaxWidthWrapper>
    );
};

export default SubNavbar;
