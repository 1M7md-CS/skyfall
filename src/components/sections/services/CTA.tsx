import Button from "../../ui/Button";

export default function CTA() {
	return (
		<div className='bg-[url("/assets/images/services-hero.jpg")] bg-cover bg-center min-h-80 w-full grid place-content-center space-y-3 text-center px-4 py-10 md:p-0'>
			<h2 className="mx-auto text-2xl md:text-3xl font-semibold max-w-xs md:max-w-full">
				Let us Bring your Ideas to Life in the Digital World.
			</h2>
			<p className="text-muted-foreground max-w-3xl">
				No matter which services you choose, we are committed to delivering
				exceptional results that exceed your expectations. Our multidisciplinary
				team works closely together to ensure seamless collaboration and a
				unified vision for your digital product.
			</p>
			<div className="w-full mx-auto pt-5 md:pt-10">
				<Button className="w-fit text-sm md:text-base">Start Project</Button>
			</div>
		</div>
	);
}
