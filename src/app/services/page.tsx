import { Services } from "@/components/sections/services";
import CTA from "@/components/ui/CTA";
import Hero from "@/components/ui/Hero";

export default function servicesPage() {
	return (
		<div className="min-h-screen">
			<Hero
				header="Our Services"
				description="Transform your brand with our innovative digital solutions that
                captivate and engage your audience."
			/>
			<Services />
			<CTA
				header="Let us Bring your Ideas to Life in the Digital World."
				description="No matter which services you choose, we are committed to delivering
				exceptional results that exceed your expectations. Our multidisciplinary
				team works closely together to ensure seamless collaboration and a
				unified vision for your digital product."
				buttonText="Start Project"
			/>
		</div>
	);
}
