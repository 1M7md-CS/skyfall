import type React from "react";

type FormInputProps = {
	label: string;
	name: string;
	type?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	required?: boolean;
};

export default function FormInput({
	label,
	name,
	type = "text",
	value,
	onChange,
	placeholder = "Type here",
	required = true,
}: FormInputProps) {
	return (
		<div
			className="flex flex-col rounded-[6px] border-foreground border py-[18px] px-6 gap-3.5 bg-foreground
                        lg:py-5 lg:px-[30px]
                        xl:py-6 xl:px-10"
		>
			<label htmlFor="message" className="font-medium text-[16px]">
				{label}
			</label>

			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				placeholder={placeholder}
				className="bg-transparent placeholder-muted py-1 border-b border-foreground-border
                           focus:border-primary focus:outline-none transition-colors"
			/>
		</div>
	);
}
