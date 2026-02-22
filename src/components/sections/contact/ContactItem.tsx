import Image from "next/image";

type ContactItemProps = {
	icon: string;
	text: string;
};

export default function ContactItem({ icon, text }: ContactItemProps) {
	return (
		<div
			className="flex py-[18px] px-5 gap-3.5 bg-foreground w-full rounded-[6px] justify-center items-center
                        lg:py-3.5 lg:px-5 lg:w-fit
                        xl:py-[18px] xl:px-6 xl:rounded-lg"
		>
			<Image
				src={`/assets/svgs/${icon}.svg`}
				alt={icon}
				width={20}
				height={20}
			/>
			<span className="font-medium text-[13px]">{text}</span>
		</div>
	);
}
