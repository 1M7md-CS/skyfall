import { tv, type VariantProps } from "tailwind-variants";

const highlightedVariants = tv({
	base: "p-2 w-fit rounded-md font-barlow",
	variants: {
		variant: {
			foreground: "bg-foreground text-light",
		},
	},
	defaultVariants: {
		variant: "foreground",
	},
});

type HighlightedVariants = VariantProps<typeof highlightedVariants>;
type HighlightedProps = HighlightedVariants &
	Omit<React.HTMLAttributes<HTMLParagraphElement>, "className">;

export default function Highlighted({
	variant = "foreground",
	children,
	...props
}: HighlightedProps) {
	const className = highlightedVariants({ variant });

	return (
		<p className={className} {...props}>
			{children}
		</p>
	);
}
