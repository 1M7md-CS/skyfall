import Card from "@/components/sections/home/wall-of-success/Card";

const testimonials = [
	{
		title:
			"SquareUp has been Instrumental in Transforming our Online Presence.",
		description:
			"Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
		subCardImage: "/assets/images/home/clients/John-Smith.png",
		subCardTitle: "John Smith",
		subCardDescription: "CEO of Chic Boutique",
	},
	{
		title: "Working with SquareUp was a breeze.",
		description:
			"They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
		subCardImage: "/assets/images/home/clients/Sarah-Johnson.png",
		subCardTitle: "Sarah Johnson",
		subCardDescription: "Founder of HungryBites.",
	},
	{
		title:
			"SquareUp developed a comprehensive booking and reservation system for our event management company",
		description:
			"Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
		subCardImage: "/assets/images/home/clients/Mark-Thompson.png",
		subCardTitle: "Mark Thompson",
		subCardDescription: "CEO of EventMasters",
	},
	{
		title: "ProTech Solutions turned to SquareUp to automate our workflow",
		description:
			"They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
		subCardImage: "/assets/images/home/clients/Laura-Adams.png",
		subCardTitle: "Laura Adams",
		subCardDescription: "COO of ProTech Solutions.",
	},
	{
		title:
			"SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
		description:
			"The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
		subCardImage: "/assets/images/home/clients/Michael-Anderson.png",
		subCardTitle: "Michael Anderson",
		subCardDescription: "Founder of Dream Homes Realty.",
	},
	{
		title:
			"FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
		description:
			"SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
		subCardImage: "/assets/images/home/clients/Emily-Turner.png",
		subCardTitle: "Emily Turner",
		subCardDescription: "CEO of FitLife Tracker",
	},
];

const rows = [
	{ cards: testimonials.slice(0, 2), className: "border-b" },
	{ cards: testimonials.slice(2, 4), className: "border-b" },
	{ cards: testimonials.slice(4, 6), className: "" },
];

export default function WallOfSuccess() {
	return (
		<div className="grid">
			{rows.map((row, rowIndex) => (
				<div
					key={rowIndex}
					className={`grid lg:grid-cols-2 lg:divide-x divide-y 
                                                lg:divide-y-0 border-foreground ${row.className}`}
				>
					{row.cards.map((card) => (
						<Card key={card.subCardTitle} {...card} />
					))}
				</div>
			))}
		</div>
	);
}
