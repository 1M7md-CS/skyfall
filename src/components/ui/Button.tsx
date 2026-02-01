import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
	base: "py-3 px-4 font-medium rounded-md hover:cursor-pointer active:translate-y-1 active:transition-all",
	variants: {
		variant: {
			primary: "bg-primary text-muted-foreground",
			foreground: "bg-foreground text-muted py-4 px-2.5",
		},
		size: {
			base: "text-base",
			lg: "text-lg",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "base",
	},
});

type ButtonVariants = VariantProps<typeof buttonVariants>;
type ButtonProps = ButtonVariants &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
	variant = "primary",
	size = "base",
	children,
	className,
	...props
}: ButtonProps) {
	const classNameFromVariant = buttonVariants({ variant, size });

	return (
		<button className={twMerge(classNameFromVariant, className)} {...props}>
			{children}
		</button>
	);
}
