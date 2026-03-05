import Card from "@/components/sections/home/trusted-companies/Card";

const companies = [
	{ image: "/assets/images/home/trusted-companies/zapier.png", alt: "Zapier" },
	{
		image: "/assets/images/home/trusted-companies/spotify.png",
		alt: "Spotify",
	},
	{ image: "/assets/images/home/trusted-companies/zoom.png", alt: "Zoom" },
	{ image: "/assets/images/home/trusted-companies/slack.png", alt: "Slack" },
	{ image: "/assets/images/home/trusted-companies/amazon.png", alt: "Amazon" },
	{ image: "/assets/images/home/trusted-companies/adobe.png", alt: "Adobe" },
];

export default function TrustedCompanies() {
	return (
		<section className="relative flex flex-col items-center w-full border-t border-foreground pt-[30px]">
			<div
				className="absolute top-0 -translate-y-1/2 border border-foreground rounded-full
                      py-[14px] px-[24px] bg-background
                      xl:py-[20px] xl:px-[34px]"
			>
				<span className="font-medium text-[14px] text-[#FDFFFA] xl:text-[16px]">
					Trusted By 250+ Companies
				</span>
			</div>

			<div className="grid w-full grid-cols-2 lg:grid-cols-6 pb-[30px]">
				{companies.map((company, index) => (
					<Card key={index} image={company.image} alt={company.alt} />
				))}
			</div>
		</section>
	);
}
