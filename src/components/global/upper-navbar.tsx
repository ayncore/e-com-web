import React from "react";
import Link from "next/link";

// import logo from "@/assets/company/ayncorewhiteicon.png";
import MaxWidthWrapper from "../layout/max-width-wrapper";



export interface NavbarInterface {
    name?: string;
    link?: string;
    onClick?: string;
    icon?: React.ReactNode | string;
}

const UpperNavbar: React.FC = () => {
    const navbarLink: NavbarInterface[] = [
        {
            name: "Get free shipping – Free 30 day money back guarantee",
            // link: "collections/men",
        },
        {
            name: "Phone: (012) 800 456 789",
            // link: "collections/women",
        },
        {
            name: "Track Order",
            link: "/track-order",
        },

    ];



    return (
        <MaxWidthWrapper className="lg:py-3 py-3 border-b border-gray-600 text-sm flex items-center justify-center  ">

            <nav className="w-full  flex-wrap gap-3  flex justify-center md:justify-between items-center   ">

                <div className="flex gap-10 items-center">
                    <span className="block">
                        {navbarLink[0]?.name}
                    </span>
                </div>

                <div className="flex flex-wrap justify-center md:justify-between  items-center space-x-8">
                    {navbarLink?.slice(1, navbarLink.length).map((navLink, index) => (
                        <Link href={`/${navLink.link}`} key={index}
                            className=" hover:text-white">{navLink.name}
                        </Link>
                    ))}
                </div>


            </nav>
        </MaxWidthWrapper>
    );
};

export default UpperNavbar;