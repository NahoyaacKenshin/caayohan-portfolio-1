import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <Card className="h-full flex flex-col border border-transparent">
      {/* Image */}
      <Skeleton className="w-full h-[300px] rounded-none rounded-t-xl" />

      <CardHeader className="pb-3">
        {/* Badges */}
        <div className="flex flex-wrap gap-1.5 mb-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>

        {/* Title */}
        <Skeleton className="h-5 w-3/4 mb-1" />
        <Skeleton className="h-5 w-1/2" />

        {/* Excerpt */}
        <Skeleton className="h-4 w-full mt-2" />
        <Skeleton className="h-4 w-5/6" />
      </CardHeader>

      <CardFooter className="mt-auto pt-3 border-t flex items-center justify-between">
        {/* Author */}
        <Skeleton className="h-3 w-20" />
        {/* Date */}
        <Skeleton className="h-3 w-24" />
      </CardFooter>
    </Card>
  );
}