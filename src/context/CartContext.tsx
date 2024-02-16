"use client";

import { cartReducer } from "@/reducers/CartReducer";
import { createContext, useReducer, Dispatch } from "react";
import { CartItem, CartState, CartAction } from "@/types/cartTypes";

const initialState: CartState = {
  items: [],
};

export const CartContext = createContext<{
  cart: CartItem[];
  dispatch: Dispatch<CartAction>;
}>({
  cart: [],
  dispatch: () => null,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.items, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
