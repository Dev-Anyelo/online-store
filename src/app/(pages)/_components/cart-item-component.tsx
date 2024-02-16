"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { toast } from "sonner";
import { useContext } from "react";
import { Trash2Icon } from "lucide-react";
import { CartItem } from "@/types/cartTypes";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";

interface CartItemProps {
  item: CartItem;
}

const CartItemComponent = ({ item }: CartItemProps) => {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: item,
    });

    toast.success("Removed from cart");

    return cart;
  };

  return (
    <Card className="w-fit h-fit shadow-md py-3 rounded border border-gray-100 dark:border dark:border-gray-800 hover:opacity-85">
      <CardContent>
        <img
          src={item.images}
          alt={item.title}
          className="w-full object-cover rounded-md h-60"
        />
        <CardTitle className="text-lg font-normal mt-5 text-wrap">
          {item.title}
        </CardTitle>
      </CardContent>

      <CardFooter className="flex justify-between items-center h-fit">
        <CardDescription className="text-lg text-muted-foreground">
          ${item.price.toFixed(2)}
        </CardDescription>
        <Button size="sm" variant="destructive" onClick={removeFromCart}>
          <Trash2Icon className="w-4 h-4 mr-2" /> Delete
        </Button>
      </CardFooter>
      <div>
        <CardDescription className="text-lg text-muted-foreground text-center">
          Quantity: {item.quantity}
        </CardDescription>
      </div>
    </Card>
  );
};

export default CartItemComponent;
