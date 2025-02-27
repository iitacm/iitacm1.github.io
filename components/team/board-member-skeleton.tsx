import { Skeleton } from "@/components/ui/skeleton"

export const BoardMemberSkeleton = () => {
  return (
    <div className="mx-auto md:mx-0 h-80 w-3/4">
      {/* Image skeleton */}
      <div className="h-3/4 w-full">
        <Skeleton className="w-full h-full" />
      </div>
      {/* Content skeleton */}
      <div className="flex flex-col mt-2">
        {/* Position skeleton */}
        <Skeleton className="h-6 w-32 mb-2" />
        {/* Name skeleton */}
        <Skeleton className="h-4 w-40 mb-2" />
        <div className="mt-px flex justify-between w-full items-center">
          {/* Social icons skeleton */}
          <div className="flex gap-2">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
          {/* Button skeleton */}
          <Skeleton className="w-24 h-9" />
        </div>
      </div>
    </div>
  )
}