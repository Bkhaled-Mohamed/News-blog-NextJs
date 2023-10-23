"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type AppRoutes = { [x in string]: { route: string; label: string } };

const Navbar = () => {
  const routes: AppRoutes = {
    world: { route: "/world", label: "World" },
    food: { route: "/food", label: "Food" },
    science: { route: "/science", label: "Science" },
    sport: { route: "/sport", label: "Sport" },
    health: { route: "/health", label: "Health" },
  };

  const pathname = usePathname();
  return (
    <>
      <nav className="flex justify-between">
        <div className="text-start">
          <ul className="flex flex-row">
            {Object.values(routes).map((route, index) => (
              <li key={index} className=" mr-3">
                <Link href={route.route}>
                  <p>{route.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="search..."
            className="border-[1.2px] border-black  pl-3"
          />
        </div>
      </nav>
      <div className="w-full h-[1px] bg-black mt-2" />
    </>
  );
};

export default Navbar;
