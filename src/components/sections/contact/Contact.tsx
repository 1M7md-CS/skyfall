import { ContactForm } from "@/components/sections/contact/ContactForm";
import ContactItem from "@/components/sections/contact/ContactItem";
import SocialIcon from "@/components/sections/contact/SocialIcon";

export default function Contact() {
	return (
		<>
			<section
				className="py-[30px] px-6 flex flex-col items-center gap-5 justify-center
								lg:flex-row lg:py-10 lg:px-10
								xl:py-[50px] xl:px-[50px]"
			>
				<ContactItem icon="email" text="a.alnjada@skyfall-enterprises.com" />
				<ContactItem icon="phone" text="+962 79 7016535" />
				<ContactItem icon="location" text="Amman, Jordan" />
			</section>

			<section className="border-foreground border-t">
				<ContactForm />
			</section>

			<section
				className="flex flex-col justify-center px-0 border-foreground border-t divide-y divide-foreground
                lg:flex-row lg:divide-x lg:divide-y-0"
			>
				<div
					className="flex flex-col py-5 items-center justify-center
                lg:py-[50px] lg:items-end lg:pr-20"
				>
					<div className="flex items-center gap-3.5">
						<p
							className="font-medium text-[16px] text-muted-foreground
                     				  xl:text-[22px]"
						>
							Operating Days
						</p>
						<div
							className="py-2.5 px-5 bg-foreground rounded
                      					lg:rounded-[6px]
                     					xl:py-3 xl:px-6"
						>
							<p
								className="font-medium text-sm
                    					  lg:text-[16px]
                     					  xl:text-xl"
							>
								Monday to Friday
							</p>
						</div>
					</div>
				</div>

				<div
					className="flex flex-col py-5 items-center justify-center
                				lg:py-[50px] lg:items-start lg:pl-20"
				>
					<div
						className="flex flex-col text-center justify-center items-center gap-5 py-2.5 rounded-lg
                   					lg:flex-row lg:border lg:border-foreground lg:px-5"
					>
						<p
							className="font-medium text-[16px] text-muted-foreground
                     				  xl:text-[22px]"
						>
							Stay Connected
						</p>
						<div className="flex gap-3">
							<SocialIcon
								icon="facebook"
								alt="facebook"
								href="https://facebook.com"
							/>

							<SocialIcon
								icon="twitter"
								alt="twitter"
								href="https://x.com"
								width={23}
							/>

							<SocialIcon
								icon="linkedin"
								alt="linkedin"
								href="https://www.linkedin.com/in/1m7md/"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
