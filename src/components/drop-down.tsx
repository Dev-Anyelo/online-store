"use client";

import Link from "next/link";

import { BaggageClaimIcon, ShoppingCartIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const Dropdown = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 border-none">
        {totalItems > 0 && (
          <span className=" bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}{" "}
        <ShoppingCartIcon className="border-none mr-2" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-40 mt-3 p-3 rounded-md shadow-md  mr-3"
        align="center"
      >
        <DropdownMenuLabel>
          <span>My Orders</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
          <DropdownMenuItem>
        <Link href="/products" className="flex w-full ">
            <BaggageClaimIcon className="h-4 w-4 mr-2 inline" />
            Products
            {totalItems > 0 && (
              <span className=" bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
        </Link>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
