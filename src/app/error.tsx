"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SomethingWrong from "@/public/something-wrong.svg";


const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex items-center min-h-screen p-4 flex-col space-y-4 text-center mt-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
          Uh oh! Something went wrong.
        </h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto">
          We are experiencing technical difficulties. Please try again later.
        </p>
      </div>
      <div className="grid gap-4">
        <form className="inline">
          <Button size="lg" variant="outline" onClick={() => reset()}>
            Try again
          </Button>
        </form>
      </div>
      <Image
        src={SomethingWrong}
        alt="something-wrong"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Error;
