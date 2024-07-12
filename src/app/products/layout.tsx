import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Products",
  description: "Made with AYNcore",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <div className="main flex-1">{children}</div>
   
  );
}
