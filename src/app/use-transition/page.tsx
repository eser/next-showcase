"use client";

import { useTransition, useState } from "react";
import { AboutTab } from "./about-tab";
import { PostsTab } from "./posts-tab";
import { TabButton } from "./tab-button";

export default function Page() {
	const [isPending, startTransition] = useTransition();
	const [tab, setTab] = useState("about");

	function selectTabBlocking(nextTab: string) {
		setTab(nextTab);
	}

	function selectTabNonblocking(nextTab: string) {
		startTransition(() => {
			setTab(nextTab);
		});
	}

	return (
		<>
			<div role="tablist" className="tabs tabs-bordered">
				<TabButton
					isActive={tab === "about"}
					onClick={() => selectTabBlocking("about")}
				>
					About
				</TabButton>
				<TabButton
					isActive={tab === "posts1"}
					onClick={() => selectTabBlocking("posts1")}
				>
					Posts (blocking)
				</TabButton>
				<TabButton
					isActive={tab === "posts2"}
					onClick={() => selectTabNonblocking("posts2")}
				>
					Posts (non-blocking)
					{isPending && (
						<>
							{" "}
							<span className="loading loading-spinner loading-sm" />
						</>
					)}
				</TabButton>
			</div>
			<hr />
			{tab === "about" && <AboutTab />}
			{tab === "posts1" && <PostsTab prefix="Blocking posts" />}
			{tab === "posts2" && <PostsTab prefix="Non-blocking posts" />}
		</>
	);
}
