type ItemProps = {
	text: string;
};

export default function Item({ text }: ItemProps) {
	return (
		<div className="bg-foreground py-[8px] px-[10px] rounded-[6px] xl:rounded-[8px]">
			<span className="text-[18px] xl:text-[22px]">{text}</span>
		</div>
	);
}
