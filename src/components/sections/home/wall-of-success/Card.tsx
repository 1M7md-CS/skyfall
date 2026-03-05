import SubCard from "@/components/sections/home/wall-of-success/SubCard";

type CardProps = {
	title: string;
	description: string;
	subCardImage: string;
	subCardTitle: string;
	subCardDescription: string;
};

export default function Card({
	title,
	description,
	subCardImage,
	subCardTitle,
	subCardDescription,
}: CardProps) {
	return (
		<article
			className="flex flex-col py-10 px-6 gap-6 border-foreground
                            lg:py-20 lg:px-[60px] lg:justify-between
                            xl:py-[100px] xl:px-20"
		>
			<div className="flex flex-col gap-5 xl:gap-6">
				<h3 className="font-medium text-[18px] lg:text-xl xl:text-[28px] leading-snug">
					{title}
				</h3>
				<p className="text-[14px] lg:text-[16px] xl:text-[18px] text-muted-foreground leading-relaxed">
					{description}
				</p>
			</div>

			<SubCard
				image={subCardImage}
				title={subCardTitle}
				description={subCardDescription}
			/>
		</article>
	);
}
