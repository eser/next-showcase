export type TabButtonProps = {
	children: React.ReactNode;
	isActive: boolean;
	onClick: () => void;
};

export function TabButton(props: TabButtonProps) {
	if (props.isActive) {
		return (
			<button role="tab" type="button" className="tab tab-active">
				{props.children}
			</button>
		);
	}

	return (
		<button
			role="tab"
			type="button"
			className="tab"
			onClick={() => {
				props.onClick();
			}}
		>
			{props.children}
		</button>
	);
}
