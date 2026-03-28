export function GameCardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-square bg-gray-200" />
      <div className="p-3">
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
}

export function GameGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <GameCardSkeleton key={i} />
      ))}
    </div>
  );
}
