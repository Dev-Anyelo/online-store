"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useContext } from "react";
import { CartItem } from "@/types/cartTypes";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  Trash2Icon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProductProps {
  product: CartItem;
}

const CardWrapper = ({ product }: ProductProps) => {
  const { cart, dispatch } = useContext(CartContext);
  const isProductInCart = cart.some((item) => item.id === product.id);

  const quantityProduct = isProductInCart
    ? cart.find((item) => item.id === product.id)?.quantity ?? 0
    : 0;

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { ...product, quantity: 1 },
    });

    toast.success("Added to cart");
  };
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: product,
    });

    toast.success("Removed from cart");
    return cart;
  };

  const increaseQuantity = () => {
    if (isProductInCart) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: product.id, quantity: quantityProduct + 1 },
      });
    }
  };

  const decreaseQuantity = () => {
    if (isProductInCart && quantityProduct > 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: product.id, quantity: quantityProduct - 1 },
      });
    }
  };

  return (
    <Card
      className="w-full h-full shadow-lg hover:shadow-xl py-3 rounded border border-gray-100 hover:border-gray-200  dark:border dark:border-blue-950 hover:opacity-85
      hover:-translate-y-2 transition-transform duration-500 ease-in-out"
    >
      <CardContent>
        <Link href={`/products/${product.id}`}>
          <img
            src={product.images}
            alt={product.title}
            className="w-full object-cover rounded-md hover:cursor-pointer h-60"
          />
        </Link>
        <CardTitle className="text-lg font-normal mt-5 text-wrap">
          {product.title} {product.categoryId}
        </CardTitle>
      </CardContent>

      <CardFooter className="flex justify-between items-center h-fit">
        <CardDescription className="text-lg text-muted-foreground">
          ${product.price.toFixed(2)}
        </CardDescription>

        {isProductInCart ? (
          <Button size="sm" variant="destructive" onClick={removeFromCart}>
            <Trash2Icon className="w-4 h-4 mr-2" /> Remove
          </Button>
        ) : (
          <Button size="sm" variant="default" onClick={addToCart}>
            <ShoppingCartIcon className="w-4 h-4 mr-2" /> Add to cart
          </Button>
        )}
      </CardFooter>
      <div className="w-full flex justify-between px-3">
        <span className="text-lg text-muted-foreground">
          Quantity: {quantityProduct}
        </span>

        <div className="flex justify-between gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={decreaseQuantity}
                  disabled={isProductInCart ? false : true}
                  className={`${isProductInCart ? "" : "cursor-not-allowed"}`}
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <TooltipContent>
                  {isProductInCart ? "Decrease" : "You must add the product"}
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={increaseQuantity}
                  disabled={isProductInCart ? false : true}
                  className={`${isProductInCart ? "" : "cursor-not-allowed"}`}
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
                <TooltipContent>
                  {isProductInCart ? "Increase" : "You must add the product"}
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Card>
  );
};

export default CardWrapper;
