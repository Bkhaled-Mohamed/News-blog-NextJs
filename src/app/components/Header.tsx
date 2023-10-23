"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-1">
        <Link href="/">
          <div className=" relative w-[200px] h-[50px] flex items-center">
            <h1 className=" flex items-center text-2xl font-bold bg-black text-white px-2">
              NEWS <span className="text-blue-800">LY</span>
            </h1>
          </div>
        </Link>

        <div>
          <Link href="/">
            <div className=" relative w-[200px] h-[50px] flex items-center justify-end">
              <h1 className=" object-contain">Login/Register</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black mb-2" />
      <div>
        <h1 className=" text-8xl text-center">NEWSLETTER</h1>
      </div>
      <div className="w-full h-[1px] bg-black mb-2" />
    </>
  );
};

export default Header;
