"use client";

import { type ChangeEvent, useState } from "react";
import FormInput from "@/components/sections/contact/FormInput";
import ServiceCheckbox from "@/components/sections/contact/ServiceCheckbox";
import Button from "@/components/ui/Button";

export function ContactForm() {
	const [form, setForm] = useState({
		fullName: "",
		email: "",
		message: "",
		services: {
			webDesign: false,
			mobileApp: false,
			collaboration: false,
			others: false,
		},
	});

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = e.target;
		const isCheckbox = type === "checkbox";
		const val = isCheckbox ? (e.target as HTMLInputElement).checked : value;

		setForm((prev) => ({
			...prev,
			...(isCheckbox
				? { services: { ...prev.services, [name]: val } }
				: { [name]: val }),
		}));
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<div className="flex justify-center items-center px-6">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-5xl flex flex-col gap-[30px] border-foreground border-x p-6
                           lg:p-[60px]
                           xl:p-20 xl:gap-10"
			>
				<div
					className="grid grid-cols-1 gap-[30px]
                                lg:grid-cols-2"
				>
					<FormInput
						label="Full Name"
						name="fullName"
						value={form.fullName}
						onChange={handleChange}
					/>

					<FormInput
						label="Email"
						name="email"
						type="email"
						value={form.email}
						onChange={handleChange}
					/>
				</div>

				<div
					className="rounded-lg border-foreground border p-[30px] flex flex-col gap-[30px] bg-foreground
                                xl:p-10 xl:gap-10 xl:rounded-xl"
				>
					<p
						className="font-medium text-[13px]
                                  lg:text-[18px]
                                  xl:text-[22px]"
					>
						Why are you contacting us?
					</p>

					<div
						className="grid gap-[30px]
                                    lg:grid lg:grid-cols-2"
					>
						<ServiceCheckbox
							name="webDesign"
							label="Web Design"
							checked={form.services.webDesign}
							onChange={handleChange}
						/>

						<ServiceCheckbox
							name="mobileApp"
							label="Mobile App Design"
							checked={form.services.mobileApp}
							onChange={handleChange}
						/>

						<ServiceCheckbox
							name="collaboration"
							label="Collaboration"
							checked={form.services.collaboration}
							onChange={handleChange}
						/>

						<ServiceCheckbox
							name="others"
							label="Others"
							checked={form.services.others}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div
					className="bg-foreground border-foreground border rounded-[6px] py-[18px] px-6 flex flex-col gap-3.5
                                lg:py-[20px] lg:px-[30px]
                                xl:py-6 xl:px-10"
				>
					<label
						htmlFor="message"
						className="font-medium text-[16px]
                                      lg:text-lg
                                      xl:text-[22px]"
					>
						Your Message
					</label>

					<div className="relative">
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Type here"
							rows={2}
							required
							className="bg-transparent placeholder-muted focus:outline-none
                                           resize-none w-full pb-1 border-b border-foreground-border
                                           focus:border-primary transition-colors"
						/>
					</div>
				</div>

				<div className="flex justify-center">
					<Button
						className="w-full bg-muted-foreground text-background
                                       lg:bg-primary lg:text-muted-foreground
                                       lg:w-fit lg:py-3.5 lg:px-[36px] lg:text-[14px]
                                       xl:py-[18px] xl:px-11 xl:text-lg"
					>
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
}
