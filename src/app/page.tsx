"use client";

import { useEffect, useState } from "react";
import { CartItem } from "@/types/cartTypes";
import { loadProducts } from "@/data/product";
import CardWrapper from "./(pages)/_components/card";
import { SkeletonsCards } from "@/skeletons/skeleton-card";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    setIsLoading(true);
    loadProducts().then((res) => {
      setProducts(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <SkeletonsCards />;
  }

  return (
    <main className="min-h-screen flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-5 md:p-10 gap-3">
      {products.map((product: CartItem) => (
        <CardWrapper key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Home;
