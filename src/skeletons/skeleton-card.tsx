import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 mb-5">
      <Skeleton className="h-[200px] w-full sm:h-[125px] sm:w-[250px] rounded-xl" />
      <div className="flex justify-between gap-x-3 sm:flex-col sm:justify-normal sm:gap-2">
        <Skeleton className="h-5 w-[250px] sm:h-4 sm:w-[240px]" />
        <Skeleton className="h-5 w-[250px] sm:h-4 sm:w-[130px]" />
      </div>
    </div>
  );
}

export function SkeletonsCards() {
  return (
    <div className="w-full h-full sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 items-center place-items-center px-5 mt-10">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
