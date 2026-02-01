import Image from "next/image";
import { type ServiceSubcategory, services } from "@/lib/data";
import Highlighted from "../../ui/Highlighted";

function Subcategory({ subcategory }: { subcategory: ServiceSubcategory }) {
	return (
		<>
			<div className="text-xl text-muted font-medium font-barlow p-8 border-y border-foreground tracking-wide">
				{subcategory.name}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-1">
				{subcategory.features.map((feature) => (
					<div
						className="border-b md:border-b-0 border-r border-foreground p-8 space-y-4"
						key={feature.name}
					>
						<div className="gradient-box px-4 py-4 w-fit">
							<Image
								src={feature.icon}
								width={19}
								height={20}
								alt="icon"
								aria-hidden
								loading="lazy"
							/>
						</div>
						<p className="font-barlow max-w-60">{feature.name}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default function Services() {
	return (
		<section>
			{services.map((c) => (
				<div key={c.name}>
					<section className="space-y-6 px-8 pt-16 pb-8 border-t border-foreground">
						<div className="space-y-4">
							<h2 className="text-4xl font-semibold">{c.name}</h2>
							<p className="text-muted-foreground text-base max-w-5xl font-barlow">
								{c.summary}
							</p>
						</div>
						<Highlighted>{c.tagline}</Highlighted>
					</section>
					{c.subcategories.map((subcategory) => (
						<Subcategory key={subcategory.name} subcategory={subcategory} />
					))}
				</div>
			))}
		</section>
	);
}
