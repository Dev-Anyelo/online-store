"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartItem } from "@/types/cartTypes";
import EmptyCart from "@/public/empty-cart.svg";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import CartItemComponent from "@/app/(pages)/_components/cart-item-component";
import { ChevronLeftIcon } from "lucide-react";

const CartContents = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="flex justify-start flex-wrap gap-4 px-2 sm:px-4 w-full h-full">
      {cart.length === 0 ? (
        <div className="flex justify-center w-full flex-col items-center gap-y-5 md:gap-y-10">
          <h1 className="font-bold tracking-tighter text-3xl sm:text-5xl md:text-6xl text-center text-wrap">
            You shopping cart is empty!
          </h1>
          <Link href="/">
            <Button size="lg" variant="outline">
              <ChevronLeftIcon className="w-4 h-4 mr-2" />
              See products
            </Button>
          </Link>
          <Image src={EmptyCart} alt="empty-cart" width={400} height={400} />
        </div>
      ) : (
        cart.map((item: CartItem) => (
          <CartItemComponent key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default CartContents;
