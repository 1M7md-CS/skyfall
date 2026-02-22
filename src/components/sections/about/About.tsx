import Image from "next/image";
export default function About() {
	return (
		<div>
			<section
				className="border-[#262626] border-b grid grid-cols-1 gap-[30px] px-4 py-10 items-center
                           xl:grid-cols-2 lg:gap-[100px] lg:px-[100px] lg:py-[80px]
                           xl:px-[150px] xl:py-[100px]"
			>
				<p
					className="text-[16px] tracking-minus06 text-[#E6E6E6] w-full
                               lg:text-xl"
				>
					<strong>Skyfall Enterprises </strong>
					is the premier data-driven software development company. We go beyond
					traditional software solutions by integrating cutting-edge data
					tracking and analytics, transforming raw information into powerful,
					actionable insights. Unlike one-size-fits-all software providers, we
					empower businesses with tailored, in-depth reporting that drives
					smarter decisions, maximizes performance, and unlocks new
					opportunities for success. With Skyfall Enterprises, data isn’t just
					numbers—it’s the key to your competitive advantage.
				</p>

				<div
					className="relative flex flex-col text-center overflow-hidden
                               justify-center items-center rounded-2xl min-h-[337px]
                               lg:min-h-[571px]
                               xl:min-h-[483px]
                               before:absolute before:inset-0 before:-z-10
                               before:bg-[url('/assets/images/about/about.png')]
                               before:bg-cover before:bg-center before:bg-no-repeat
                               before:opacity-60"
				>
					<h2
						className="font-semibold text-[28px]
					 			   lg:text-[38px]
					 			   xl:text-5xl"
					>
						Skyfall <br /> Enterprises
					</h2>
				</div>
			</section>

			<section
				className="pt-10 flex flex-col gap-10 border-[#262626]
                           lg:pt-20 lg:gap-20
                           xl:pt-[100px] xl:gap-[100px]"
			>
				<h2
					className="font-semibold text-[38px] px-6 text-[#42159D]
                               lg:px-[50px] lg:text-[48px]
                               xl:text-[58px]"
				>
					Our Story
				</h2>

				<div
					className="border-[#262626] border-t py-10 px-6
                               lg:py-20 lg:px-10
                               xl:py-[100px] xl:px-[50px]"
				>
					<p
						className="font-inter text-[14px] text-[#98989A]
                                   lg:text-[18px]"
					>
						Skyfall Enterprises is a data-driven software development company
						dedicated to empowering businesses with intelligent solutions. By
						seamlessly integrating software services with advanced data
						tracking, we provide in-depth, data-driven reporting that enables
						businesses to make informed and strategic decisions. Our expertise
						lies in transforming raw data into actionable insights, helping
						companies optimize their operations, enhance performance, and drive
						sustainable growth. At Skyfall Enterprises, we bridge the gap
						between technology and business intelligence, ensuring that every
						decision is backed by accurate and meaningful data.
					</p>
				</div>
			</section>

			<section
				className="pt-10 relative border-[#262626] border-t
                           lg:pt-[100px]"
			>
				<div className="border-[#262626] border-b">
					<h2
						className="font-semibold text-[38px] px-6 pb-10 text-[#42159D]
                               	   lg:px-[50px] lg:text-[48px] lg:pb-20
                                   xl:text-[58px] xl:pb-[100px]"
					>
						Founder & CEO
					</h2>
				</div>

				<div
					className="items-center grid grid-cols-1 gap-[40px] px-6
                               md:px-0 md:pl-6
                               lg:grid-cols-2 lg:pl-[50px]"
				>
					<div
						className="py-10
									lg:py-[100px]"
					>
						<h3
							className="pb-3.5 pl-2.5 font-semibold text-[26px]
                                       lg:pb-[26px] lg:text-[38px]
                                       border-[#262626] border-b"
						>
							Ahmad Al Njada
						</h3>

						<p
							className="mt-6 font-inter text-[14px] text-[#98989A]
                                       lg:text-[18px]"
						>
							With a bachelors’ in Computer Science, and experience in Business
							Intelligence. Ahmad Founded Skyfall Enterprises to empower
							businesses and implement software needs through data-driven
							approach.
							<br />
							<br />
							And a part of being a tech-founder he also Co-Founded Weqayah (a
							product under the umbrella of Skyfall).
							<br />
							<br />
							Also, training people and companies is a big part of Ahmad’s
							journey to ensure that people has the knowledge needed.
						</p>
					</div>

					<div
						className="w-full flex justify-center
									xl:justify-end"
					>
						<div
							className="relative w-[360px] h-[480px]
                            		   lg:w-[514px] lg:h-[685px]
                            		   xl:w-[631px] xl:h-[841px]"
						>
							<Image
								src="/assets/images/about/ceo.jpg"
								alt="Ahmad Al Njada, Founder & CEO"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
