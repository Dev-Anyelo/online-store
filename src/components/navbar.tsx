"use client";

import Link from "next/link";
import DropdownUser from "./drop-down-user";
import Dropdown from "@/components/drop-down";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/theme-button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full mx-auto px-5 py-3 shadow-sm z-10 dark:bg-gray-900 bg-white dark:border-b dark:border-b-gray-500">
      <nav className="w-full flex justify-between items-center mx-auto">
        <h4 className="text-xl font-semibold w-fit">
          <Link href="/" className="hover:text-sky-600 hover:cursor-pointer">
            Logo
          </Link>
        </h4>
        <ul className="md:flex justify-between items-center gap-4 mx-auto hidden">
          <li>
            <Link href="/">
              <Button
                variant={pathname === "/" ? "default" : "outline"}
                size="sm"
                className="sm:text-lg text-sm"
              >
                All
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Button
                variant={pathname === "/clothes" ? "default" : "outline"}
                className="sm:text-lg text-sm"
              >
                Clothes
              </Button>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Button
                variant={pathname === "/electronics" ? "default" : "outline"}
                className="sm:text-lg text-sm"
              >
                Electronics
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <Button
                variant={pathname === "/products" ? "default" : "outline"}
                className="sm:text-lg text-sm"
              >
                My products
              </Button>
            </Link>
          </li>
        </ul>

        <div className="flex gap-3 justify-center items-center">
          <Dropdown />
          <ModeToggle />
          <DropdownUser />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
