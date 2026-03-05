"use client";

import { useState } from "react";

type FAQItem = {
	id: number;
	question: string;
	answer: string;
};

type FAQAccordionProps = {
	items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
	const [activeId, setActiveId] = useState<number | null>(1);

	const toggle = (id: number) => {
		setActiveId(activeId === id ? null : id);
	};

	const half = Math.ceil(items.length / 2);
	const leftColumn = items.slice(0, half);
	const rightColumn = items.slice(half);

	const RenderItem = (item: FAQItem, isMobileHidden: boolean) => {
		const isOpen = activeId === item.id;
		return (
			<div
				key={item.id}
				className={`border-b last:border-b-0 border-foreground ${isMobileHidden ? "hidden lg:block" : "block"}`}
			>
				<div
					className="py-[30px] px-6
                                lg:py-6 lg:px-10
                                xl:py-[30px] xl:px-[50px]"
				>
					<button
						type="button"
						onClick={() => toggle(item.id)}
						className="w-full flex items-center justify-between"
					>
						<div className="flex items-center gap-5 md:gap-6">
							<div
								className="flex-shrink-0 flex items-center w-12 h-12 p-7
                                            justify-center rounded-[6px] bg-gradient-to-t
                                            from-[#242424] to-[#2E2E2E]
                                             lg:w-14 lg:h-14 lg:p-8
                                             xl:w-16 xl:h-16 xl:p-9"
							>
								<span className="text-[20px] font-semibold lg:text-2xl xl:text-[28px]">
									{String(item.id).padStart(2, "0")}
								</span>
							</div>

							<p className="font-medium text-[16px] lg:text-lg xl:text-[22px]">
								{item.question}
							</p>
						</div>

						<div className="text-4xl ml-4">{isOpen ? "×" : "+"}</div>
					</button>

					<div
						className={`transition-all duration-500 ease-in-out overflow-hidden 
						 	        ${isOpen ? "max-h-100 mt-6 opacity-100" : "max-h-0 opacity-0"}`}
					>
						<p className="text-muted-foreground text-sm lg:text-[16px] xl:text-lg">
							{item.answer}
						</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<section className="py-10">
			<div>
				<div
					className="grid grid-cols-1 border-t border-foreground
                                lg:grid-cols-2"
				>
					<div className="flex flex-col border-foreground lg:border-r">
						{leftColumn.map((item, index) => RenderItem(item, index >= 4))}
					</div>

					<div className="hidden lg:flex flex-col">
						{rightColumn.map((item) => RenderItem(item, false))}
					</div>
				</div>

				<div className="w-full h-px bg-foreground border-x border-foreground" />
			</div>
		</section>
	);
}
