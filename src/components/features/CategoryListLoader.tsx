import { Skeleton } from '../ui/skeleton'

export default () => {
  return Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      className="flex flex-col items-start gap-4 rounded-lg border p-4 shadow-sm ring-primary duration-100 hover:ring-2 active:scale-95 md:flex-row md:items-center"
    >
      <Skeleton className="size-14 rounded-md" />
      <div className="grid w-full flex-1 gap-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  ))
}
