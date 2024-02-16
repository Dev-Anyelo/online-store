"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loadProductById } from "@/data/product";
import { CartContext } from "@/context/CartContext";
import ProductDetail from "../../_components/card-detail";
import SomethingWrong from "@/public/something-wrong.svg";

interface ProductDetailProps {
  params: {
    id: number;
  };
}

const ProductDetailPage = async ({ params }: ProductDetailProps) => {
  const { cart } = useContext(CartContext);
  const product = await loadProductById(params.id);
  const isProductInCart = cart.some((item) => item.id === product.id);

  const quantityProduct = isProductInCart
    ? cart.find((item) => item.id === product.id)?.quantity ?? 0
    : 0;

  return (
    <>
      {product.id ? (
        <ProductDetail
          title={product.title}
          description={product.description}
          images={product.images}
          quantityProduct={quantityProduct}
          price={product.price}
        />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[24rem] py-12 text-center">
          <div className="space-y-3">
            <h1 className="font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl text-center text-wrap">
              Product not found
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-wrap">
              Oops! The product you’re looking for could not be found.
            </p>
          </div>
          <div className="mt-6 mb-6">
            <Link href="/">
              <Button size="lg" variant="outline">
                <ChevronLeftIcon className="w-4 h-4 mr-2" />
                Go back
              </Button>
            </Link>
          </div>
          <Image
            src={SomethingWrong}
            alt="something-wrong"
            width={400}
            height={400}
          />
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
