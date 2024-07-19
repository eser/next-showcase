import { Suspense } from "react";
import { ItemCount } from "./items";

function Skeleton() {
  return (
    <div className="animate-pulse bg-black/[.05] dark:bg-white/[.2] h-4 rounded w-full" />
  );
}

export default function Page() {
  return (
    <>
      <div>Loading stats...</div>
      <ol className="font-mono text-sm text-center sm:text-left flex flex-col gap-3 w-full">
        <li>
          <Suspense fallback={<Skeleton />}>
            <ItemCount kind="posts" delay={3500} />
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<Skeleton />}>
            <ItemCount kind="users" delay={2000} />
          </Suspense>
        </li>
      </ol>
    </>
  );
}
