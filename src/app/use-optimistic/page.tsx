"use client";

import { useState, useOptimistic, useTransition } from "react";
import { sendMessageAction } from "./action";
import { type FormState } from "./types";

function formatDate(date: Date): string {
    const formatted = date.toISOString();

    return formatted.substring(11, formatted.length - 1);
}

export default function Page() {
    const [state, setState] = useState<FormState>([]);
    const [isPending, startTransition] = useTransition();
    const [optimisticState, addMessageOptimistic] = useOptimistic<FormState, string>(
        state,
        (prevState, newMessage) => [...prevState, [new Date(), newMessage, true]],
    );

    const formAction = (formData: FormData) => {
        const message = formData.get("message") as string;

        startTransition(async () => {
            addMessageOptimistic(message);
            const newState = await sendMessageAction(state, formData);

            startTransition(() => setState(newState));
        });
    };

    return (
        <form action={formAction} className="flex flex-col gap-5">
            <div>
                {optimisticState.map((entry: [Date, string, boolean?], index: number) => (
                    <div key={index} className="text-gray-900 dark:text-gray-300 flex flex-row gap-3">
                        {/* time */}
                        <kbd className="kbd kbd-sm">{formatDate(entry[0])}</kbd>
                        {/* message */}
                        {entry[1]}
                        {/* badge */}
                        <span className={entry[2] ? "badge badge-ghost" : "hidden"}>sending...</span>
                    </div>
                ))}
            </div>

            <label className="input input-bordered flex items-center gap-2">
                Message
                <input name="message" type="text" className="grow" placeholder=" " required={true} />
            </label>

            <button type="submit" disabled={isPending} className="btn btn-primary">Send</button>
        </form>
    )
}
