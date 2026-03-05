import Image from "next/image";
import Link from "next/link";

type SocialIconProps = {
	icon: string;
	alt: string;
	href: string;
	width?: number;
	height?: number;
};

export default function SocialIcon({
	icon,
	alt,
	href,
	width = 20,
	height = 20,
}: SocialIconProps) {
	return (
		<Link href={href} target="_blank" className="inline-block">
			<div className="bg-gradient-to-t from-[#242424] to-foreground-border h-fit w-fit p-4 rounded-[6px] xl:p-5">
				<Image
					src={`/assets/svgs/${icon}.svg`}
					alt={alt}
					width={width}
					height={height}
				/>
			</div>
		</Link>
	);
}
