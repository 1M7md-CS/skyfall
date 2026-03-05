import Image from "next/image";

type CardProps = {
	image: string;
	alt: string;
};

export default function Card({ image, alt }: CardProps) {
	return (
		<div className="flex items-center justify-center p-8 border-b border-l border-foreground lg:border-l-0 lg:border-b-0">
			<div className="relative w-[100px] h-[40px] lg:w-[120px] lg:h-[50px]">
				<Image
					src={image}
					alt={alt}
					fill
					sizes="(max-width:1024px) 100px, 120px"
					className="object-contain"
				/>
			</div>
		</div>
	);
}
