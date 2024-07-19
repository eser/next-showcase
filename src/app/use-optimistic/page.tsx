"use client";

import { useOptimistic, useActionState } from "react";
import { sendMessageAction } from "./action";
import type { FormState } from "./types";

function formatDate(date: Date): string {
	const formatted = date.toISOString();

	return formatted.substring(11, formatted.length - 1);
}

export default function Page() {
	const [state, action, isPending] = useActionState(
		async (currentState: FormState, payload: FormData) => {
			const message = (await payload.get("message")) as string;

			addMessageOptimistic(message);
			const newState = await sendMessageAction(currentState, payload);

			return newState;
		},
		[],
	);

	const [optimisticState, addMessageOptimistic] = useOptimistic<
		FormState,
		string
	>(state, (prevState, newMessage) => [
		...prevState,
		[new Date(), newMessage, true],
	]);

	return (
		<form action={action} className="flex flex-col gap-5">
			<div>
				{optimisticState.map(
					(entry: [Date, string, boolean?], index: number) => (
						<div
							key={index}
							className="text-gray-900 dark:text-gray-300 flex flex-row items-center gap-3"
						>
							{/* time */}
							<kbd className="kbd kbd-sm">{formatDate(entry[0])}</kbd>
							{/* message */}
							{entry[1]}
							{/* badge */}
							<span
								className={entry[2] ? "badge badge-ghost badge-sm" : "hidden"}
							>
								sending...
							</span>
						</div>
					),
				)}
			</div>

			<label className="input input-bordered flex items-center gap-2">
				Message
				<input
					name="message"
					type="text"
					className="grow"
					placeholder=" "
					required={true}
				/>
			</label>

			<button type="submit" disabled={isPending} className="btn btn-primary">
				Send
				{isPending && (
					<>
						{" "}
						<span className="loading loading-infinity loading-base" />
					</>
				)}
			</button>
		</form>
	);
}
