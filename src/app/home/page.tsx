import Questions from "@/components/sections/contact/Questions";
import {
	ServicesOverview,
	TrustedCompanies,
	WallOfSuccess,
	WhyChooseUs,
} from "@/components/sections/home";
import Landing from "@/components/sections/home/landing/Landing";
import Hero from "@/components/ui/Hero";

export default function homePage() {
	return (
		<div className="min-h-screen">
			<Landing />
			<TrustedCompanies />

			<Hero
				header="Our Services"
				description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
			/>
			<ServicesOverview />

			<Hero
				header="Wall of Success"
				description="What our Clients say About us"
			/>
			<WhyChooseUs />

			<Hero
				header="Why Choose Skyfall?"
				description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
			/>
			<WallOfSuccess />

			<Questions />
		</div>
	);
}
