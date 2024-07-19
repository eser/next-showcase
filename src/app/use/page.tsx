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
      <ol className="font-mono ~text-base/xl text-center sm:text-left flex flex-col gap-3 w-full">
        <li>
          <Suspense fallback={<Skeleton />}>
            <ItemCount kind="posts" delay={4500} />
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<Skeleton />}>
            <ItemCount kind="comments" delay={3000} />
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<Skeleton />}>
            <ItemCount kind="albums" delay={1500} />
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<Skeleton />}>
            <ItemCount kind="photos" delay={2500} />
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<Skeleton />}>
            <ItemCount kind="todos" delay={1250} />
          </Suspense>
        </li>
        <li>
          <Suspense fallback={<Skeleton />}>
            <ItemCount kind="users" delay={1750} />
          </Suspense>
        </li>
      </ol>
    </>
  );
}
