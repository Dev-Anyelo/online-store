import { Suspense } from "react";
import { SkeletonsCards } from "@/skeletons/skeleton-card";
import CartContents from "../_components/cart-contents";

const CartPage = () => {
  return (
    <div className="w-full h-full mt-20">
      <Suspense fallback={<SkeletonsCards />}>
        <CartContents />
      </Suspense>
    </div>
  );
};

export default CartPage;
