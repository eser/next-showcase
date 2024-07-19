"use server";

import { setTimeout } from "timers/promises";
import { type FormState } from "./types";

export const sendMessageAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {
    const message = formData.get("message") as string;

    await setTimeout(3000);

    const newMessage: [Date, string] = [new Date(), message];

    return [...prevState, newMessage];
};
