// "use client";

import { use } from "react";
import { setTimeout } from "timers/promises";

export async function getItems(kind: string, delay: number) {
    await setTimeout(delay);
    const response = await fetch(`https://jsonplaceholder.typicode.com/${kind}`);

    return response.json();
}

export type ItemCountProps = {
    kind: string;
    delay: number;
};

export function ItemCount(props: ItemCountProps) {
    const items = use(getItems(props.kind, props.delay));

    return (
        <>
            We have {items.length} {props.kind}
        </>
    );
}
