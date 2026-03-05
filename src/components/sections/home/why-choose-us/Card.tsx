import Image from "next/image";

type CardProps = {
	icon: string;
	title: string;
	description: string;
};

export default function Card({ icon, title, description }: CardProps) {
	return (
		<div className="flex flex-col gap-6 py-10 px-[30px] lg:p-[60px] xl:p-[80px] border-foreground">
			<div className="flex gap-3.5 xl:gap-5">
				<div
					className="border border-transparent w-fit bg-gradient-to-bl from-[#242424]
                                        rounded-[6px] p-4
                                        lg:rounded-lg lg:p-5
                                        xl:rounded-[10px] xl:p-6"
				>
					<Image src={icon} alt={title} width="25" height="25" />
				</div>
				<h3 className="flex items-center tracking-minus06 text-[20px] xl:text-[26px]">
					{title}
				</h3>
			</div>

			<p className="text-[14px] text-muted-foreground tracking-minus06 lg:text-[16px] xl:text-[20px]">
				{description}
			</p>
		</div>
	);
}
