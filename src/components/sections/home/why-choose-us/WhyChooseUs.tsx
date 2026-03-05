import Card from "@/components/sections/home/why-choose-us/Card";

export default function WhyChooseUs() {
	return (
		<div className="grid">
			<div className="grid lg:grid-cols-2 lg:divide-x border-b divide-y lg:divide-y-0 border-foreground">
				<Card
					icon="assets/svgs/medal.svg"
					title="Expertise"
					description="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
				/>

				<Card
					icon="assets/svgs/group.svg"
					title="Client-Centric Approach"
					description="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
				/>
			</div>

			<div className="grid lg:grid-cols-2 lg:divide-x divide-y lg:divide-y-0">
				<Card
					icon="assets/svgs/power.svg"
					title="Results-Driven Solutions"
					description="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
				/>

				<Card
					icon="assets/svgs/crown.svg"
					title="Collaborative Partnership"
					description="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
				/>
			</div>
		</div>
	);
}
