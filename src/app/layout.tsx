import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AYNcore E-commerce",
  description: "Made with AYNcore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${poppins.className} bg-darkcolor`}>
        <Navbar />
        <main className='main flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
