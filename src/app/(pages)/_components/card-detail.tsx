import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductDetail = ({
  title,
  price,
  images,
  description,
  quantityProduct,
}: {
  title: string;
  price: number;
  images: string;
  description: string;
  quantityProduct: number;
}) => {
  return (
    <Card className="w-1/2 h-full mx-auto mt-10 shadow-xl py-3 rounded border border-gray-200  dark:border dark:border-blue-950">
      <CardContent>
        <img
          src={images}
          alt={title}
          className="w-full object-cover rounded-md hover:cursor-pointer h-96"
        />
      </CardContent>

      <div className="flex flex-col justify-start h-fit px-3">
        <CardTitle className="text-2xl text-wrap font-semibold mb-4">
          {title}
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground text-balance">
          {description}
        </CardDescription>
      </div>
      <CardFooter className="w-full flex justify-between px-3 mt-5">
        <span className="text-lg text-muted-foreground">
          Quantity: {quantityProduct}
        </span>
        <CardDescription className="text-lg text-muted-foreground">
          ${price.toFixed(2)}
        </CardDescription>
      </CardFooter>

      <div className="w-full flex justify-center px-3 mt-5">
        <Link href="/" className=" w-full">
          <Button className="py-2 px-4 rounded w-full text-lg" variant="default">
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProductDetail;
