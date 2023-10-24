"use client";
import React, { FormEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

type AppRoutes = { [x in string]: { route: string; label: string } };

const Navbar = () => {
  const routes: AppRoutes = {
    world: { route: "/world", label: "World" },
    food: { route: "/food", label: "Food" },
    science: { route: "/science", label: "Science" },
    sport: { route: "/sport", label: "Sport" },
    health: { route: "/health", label: "Health" },
  };

  const [search, setSearch] = useState<string>("");
  const pathname = usePathname();
  const router = useRouter();

  const searchKeyword = (e: FormEvent) => {
    e.preventDefault();
    if (!search) {
      router.push("/");
    } else {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <>
      <nav className="flex justify-between">
        <div className="text-start">
          <ul className="flex flex-row">
            {Object.values(routes).map((route, index) => (
              <li key={index} className=" mr-3">
                <Link href={route.route}>
                  <p
                    className={`${route.route == pathname ? " font-bold" : ""}`}
                  >
                    {route.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <form className=" flex space-x-2 items-center" onSubmit={searchKeyword}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search..."
            className="border-[1.2px] border-black  pl-3"
          />
          <button type="submit">
            {<BiSearch className=" text-black text-xl" />}
          </button>
        </form>
      </nav>
      <div className="w-full h-[1px] bg-black mt-2" />
    </>
  );
};

export default Navbar;
