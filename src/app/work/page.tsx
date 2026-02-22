import { Work } from "@/components/sections/work";
import CTA from "@/components/ui/CTA";
import Hero from "@/components/ui/Hero";

export default function workPage() {
	return (
		<div className="min-h-screen font-barlow">
			<Hero
				header="Our Works"
				description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our
                creativity and expertise."
			/>
			<Work />
			<CTA
				header="Let us Bring your Ideas to Life in the Digital World."
				description="No matter which services you choose, we are committed to delivering
					exceptional results that exceed your expectations. Our
					multidisciplinary team works closely together to ensure seamless
					collaboration and a unified vision for your digital product."
				buttonText="Start Project"
			/>
		</div>
	);
}
