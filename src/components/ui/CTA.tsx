import Link from "next/link";
import Button from "@/components/ui/Button";

type CTAProps = {
	header: string;
	description: string;
	buttonText: string;
};

export default function CTA({ header, description, buttonText }: CTAProps) {
	return (
		<div className='bg-[url("/assets/images/hero.jpg")] bg-cover bg-center min-h-80 w-full grid place-content-center space-y-3 text-center px-4 py-10 md:p-0'>
			<h2 className="mx-auto text-2xl md:text-3xl font-semibold max-w-xs md:max-w-full">
				{header}
			</h2>
			<p className="text-muted-foreground max-w-3xl">{description}</p>
			<div className="w-full mx-auto pt-5 md:pt-10">
				<Link href="/contact">
					<Button className="w-fit text-sm md:text-base">{buttonText}</Button>
				</Link>
			</div>
		</div>
	);
}
