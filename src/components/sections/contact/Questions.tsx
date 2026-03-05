import FAQAccordion from "@/components/sections/contact/FAQAccordion";
import Hero from "@/components/ui/Hero";

const faqItems = [
	{
		id: 1,
		question: "What services-overview does SquareUp provide?",
		answer:
			"SquareUp offers design, engineering, and project management services-overview. We specialize in UX design, web & mobile development, branding, and custom software.",
	},
	{
		id: 2,
		question: "How can SquareUp help my business?",
		answer:
			"We help businesses grow by building scalable, high-quality digital products tailored to their goals.",
	},
	{
		id: 3,
		question: "What industries does SquareUp work with?",
		answer:
			"We work with startups, SaaS companies, enterprises, and e-commerce businesses.",
	},
	{
		id: 4,
		question: "How long does it take to complete a project?",
		answer:
			"Timelines depend on scope, but most projects take between 4 to 12 weeks.",
	},
	{
		id: 5,
		question: "Do you offer ongoing support after launch?",
		answer:
			"Yes, we provide maintenance, updates, and long-term support after project completion.",
	},
	{
		id: 6,
		question: "Can you work with existing designs?",
		answer:
			"Absolutely. We can work with your current design or development framework.",
	},
	{
		id: 7,
		question: "How involved will I be during development?",
		answer:
			"You will be involved throughout the process with regular updates and feedback sessions.",
	},
	{
		id: 8,
		question: "Can you help with website maintenance?",
		answer:
			"Yes, we provide ongoing website and app maintenance services-overview.",
	},
];
export default function Questions() {
	return (
		<>
			<Hero header="Frequently Asked Questions" />
			<FAQAccordion items={faqItems} />
		</>
	);
}
