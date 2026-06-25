interface LoadingSkeletonProps {
  className?: string;
}

export const LoadingSkeleton = ({ className = "h-5 w-full" }: LoadingSkeletonProps) => (
  <div className={`animate-pulse rounded-md bg-slate-800 ${className}`} />
);
