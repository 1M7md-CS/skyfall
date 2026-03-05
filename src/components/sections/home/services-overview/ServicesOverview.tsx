import Card from "./Card";

const services = [
	{
		icon: "assets/svgs/pencil.svg",
		title: "Design",
		description:
			"At Skyfall, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
	},
	{
		icon: "assets/svgs/puzzle-piece-2.svg",
		title: "Engineering",
		description:
			"Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
	},
	{
		icon: "assets/svgs/battery.svg",
		title: "Project Management",
		description:
			"Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
	},
];

export default function ServicesOverview() {
	return (
		<div className="flex flex-col lg:flex-row">
			{services.map((service) => (
				<Card
					key={service.title}
					icon={service.icon}
					title={service.title}
					description={service.description}
				/>
			))}
		</div>
	);
}
