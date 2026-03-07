import Image from "next/image";
import Link from "next/link";

type SubCardProps = {
	image: string;
	title: string;
	description: string;
};

export default function SubCard({ image, title, description }: SubCardProps) {
	return (
		<div
			className="flex p-3.5 gap-[10px] border border-foreground-border bg-transparent rounded-[6px]
                        justify-between items-center
                        lg:gap-1.5 xl:rounded-lg xl:p-5 xl:gap-[10px]"
		>
			<div className="flex gap-[12px] xl:gap-[18px] items-center min-w-0">
				<div className="relative shrink-0 h-10 w-10 xl:h-12 xl:w-12">
					<Image
						src={image}
						alt={title}
						fill
						sizes="(min-width: 1280px) 48px, 40px"
						className="object-cover rounded-md"
					/>
				</div>

				<div className="min-w-0">
					<h4 className="font-medium text-[16px] xl:text-[18px] truncate">
						{title}
					</h4>
					<p className="text-[12px] xl:text-[13px] 2xl:text-[16px] text-muted-foreground truncate">
						{description}
					</p>
				</div>
			</div>

			<Link
				href="/contact"
				aria-label={`Open website for ${title}`}
				className="hidden
                           xl:block lg:bg-foreground lg:p-[14px] lg:rounded-[6px] lg:self-center 2xl:py-[18px] 2xl:px-[20px]"
			>
				<span className="font-medium text-[14px] 2xl:text-[16px] truncate hover:underline">
					Open Website
				</span>
			</Link>
		</div>
	);
}
