import Link from "next/link";
import Image from "next/image";
import NotFoundImage from "@/public/not-found.svg";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[24rem] py-12 text-center">
      <div className="space-y-3">
        <h1 className="font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl text-center text-wrap">
          404 Not Found
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-wrap">
          Oops! The page you’re looking for could not be found.
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
        src={NotFoundImage}
        alt="something-wrong"
        width={400}
        height={400}
      />
    </div>
  );
};

export default NotFound;
