import Image from "next/image";
import Link from "next/link";

type CardProps = {
	icon: string;
	title: string;
	description: string;
};

export default function Card({ icon, title, description }: CardProps) {
	return (
		<div
			className="flex flex-1 flex-col p-[30px] gap-[24px] border-foreground border-b
                        first:border-l-0 last:border-b-0
                        lg:p-10 lg:justify-between lg:border-l lg:border-b-0
                        xl:p-[50px] xl:gap-20"
		>
			<div>
				<div className="flex flex-col gap-[24px] lg:gap-[30px] xl:gap-[40px]">
					<div
						className="flex flex-row items-center gap-[24px]
                                    lg:flex-col lg:items-start lg:gap-[30px]
                                    xl:gap-[40px]"
					>
						<div
							className="border border-transparent w-fit bg-gradient-to-bl from-[#242424]
                                        rounded-[6px] p-4
                                        lg:rounded-lg lg:p-5
                                        xl:rounded-[10px] xl:p-6"
						>
							<Image src={icon} alt={title} width="25" height="25" />
						</div>

						<h3 className="font-semibold flex items-center tracking-minus06 text-[20px] lg:text-2xl xl:text-[30px]">
							{title}
						</h3>
					</div>

					<p className="text-muted-foreground tracking-minus06 text-[14px] lg:text-[16px] xl:text-[18px]">
						{description}
					</p>
				</div>
			</div>

			<Link
				href="/services"
				className="text-center bg-foreground rounded-[6px] py-[14px] px-[16px] xl:py-[18px] xl:rounded-lg"
			>
				<span className="text-[14px] hover:underline font-medium xl:text-[18px] tracking-minus06">
					Learn More
				</span>
			</Link>
		</div>
	);
}
