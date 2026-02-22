import { About } from "@/components/sections/about";
import Hero from "@/components/ui/Hero";

export default function AboutPage() {
	return (
		<div className="min-h-screen font-barlow">
			<Hero
				header="About Us"
				description="Welcome to Skyfall, where data is the driver of your business."
			/>
			<About />
		</div>
	);
}
