import Image from "next/image";
import type React from "react";

type ServiceCheckboxProps = {
	name: string;
	label: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ServiceCheckbox({
	name,
	label,
	checked,
	onChange,
}: ServiceCheckboxProps) {
	return (
		<label
			className="flex items-center gap-2.5 text-[15px] cursor-pointer w-fit
                          xl:text-lg"
		>
			<input
				type="checkbox"
				name={name}
				checked={checked}
				onChange={onChange}
				className="hidden peer"
			/>

			<div
				className="w-8 h-8 rounded border border-foreground-border bg-foreground
                            transition-colors duration-200 flex items-center justify-center"
			>
				{checked && (
					<Image
						src="/assets/svgs/checked.svg"
						alt="checked"
						width={12}
						height={10}
					/>
				)}
			</div>

			<span>{label}</span>
		</label>
	);
}
