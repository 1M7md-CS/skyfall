import Image from "next/image";
import Link from "next/link";
import Item from "@/components/sections/home/landing/Item";

export default function Landing() {
	return (
		<div
			className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1b1b1b]
                        w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
                        lg:relative lg:w-auto lg:left-0 lg:right-0 lg:ml-0 lg:mr-0"
		>
			<div className="absolute inset-0 z-0">
				<Image
					src="/assets/images/home/hero.png"
					alt=""
					fill
					className="object-cover object-bottom opacity-40"
					priority
				/>
			</div>

			<div className="relative flex flex-col items-center text-center px-6 gap-8">
				<h1 className="font-semibold text-[31px] lg:text-[48px] xl:text-[68px]">
					A Data-Driven Software
					<br />& Business Company
				</h1>

				{/* For Mobile */}
				<div className="block lg:hidden rounded-[8px] border border-foreground-border py-[18px] px-[20px] bg-background">
					<p className="text-[16px] text-muted">
						For Ed-Tech, Fin-Tech, Med-Tech, and Startups.
					</p>
				</div>

				{/* For Other Devices */}
				<div className="hidden lg:flex gap-[6px] border border-foreground-border py-[18px] px-[30px]  text-center justify-center items-center rounded-[8px] xl:rounded-[12px] bg-[#1b1b1b]">
					<Item text="Ed-Tech" />
					<span className="text-[18px] xl:text-[22px] text-muted">,</span>
					<Item text="Fin-Tech" />
					<span className="text-[18px] xl:text-[22px] text-muted">,</span>
					<Item text="Med-Tech" />
					<span className="text-[18px] xl:text-[22px] text-muted">and</span>
					<Item text="Startups" />
				</div>

				<div className="flex gap-[13px]">
					<Link
						href="/work"
						className="rounded-[8px] border border-[#333333] py-[14px] px-[20px] bg-background"
					>
						<span className="font-medium text-[14px]">Our Works</span>
					</Link>

					<Link
						href="/contact"
						className="bg-primary rounded-[8px] py-[14px] px-[20px]"
					>
						<span className="font-medium text-[14px]">Contact Us</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
