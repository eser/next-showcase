"use client";

import { useState } from "react";

function CalculateComplex() {
  const data = Date.now();

  return (
    <span suppressHydrationWarning={true}>{data}</span>
  );
}

function CalculateComplexNoMemo() {
  "use no memo";
  const data = Date.now();

  return (
    <span suppressHydrationWarning={true}>{data}</span>
  );
}

export default function Page() {
  const [leftSide, setLeftSide] = useState(1);
  const [rightSide, setRightSide] = useState(1);

  return (
    <div className="flex flex-rows">
      <ol className="font-mono ~text-base/xl text-center sm:text-left flex flex-col gap-3 w-full">
        <li id="left-counter"></li>
        {new Array(leftSide).fill(null).map((_, index) => (
          <li key={index}>
            <CalculateComplex />
          </li>
        ))}
        <li>
          <button
            className="btn btn-primary"
            onClick={() => setLeftSide((n) => n + 1)}
          >
            Add memoed
          </button>
        </li>
      </ol>
      <ol className="font-mono ~text-base/xl text-center sm:text-left flex flex-col gap-3 w-full">
        <li id="right-counter"></li>
        {new Array(rightSide).fill(null).map((_, index) => (
          <li key={index}>
            <CalculateComplexNoMemo />
          </li>
        ))}
        <li>
          <button
            className="btn btn-primary"
            onClick={() => setRightSide((n) => n + 1)}
          >
            Add non-memoed
          </button>
        </li>
      </ol>
    </div>
  );
}
