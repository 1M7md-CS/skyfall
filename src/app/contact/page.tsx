import Hero from "@/components/ui/Hero";
import { Contact, Questions } from "../../components/sections/contact";

export default function contactPage() {
	return (
		<div className="min-h-screen">
			<Hero
				header="Contact Us"
				description="Get in touch with us today and let us help you with any questions or inquiries you may have."
			/>
			<Contact />
			<Questions />
		</div>
	);
}
