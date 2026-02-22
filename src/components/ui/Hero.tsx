type HeroProps = {
	header: string;
	description: string;
};

export default function Hero({ header, description }: HeroProps) {
	return (
		<div className='bg-[url("/assets/images/hero.jpg")] bg-cover bg-center min-h-60 md:min-h-80 w-full grid place-content-center space-y-2 text-center px-6 md:p-0'>
			<h2 className="text-4xl font-semibold">{header}</h2>
			<p className="text-muted-foreground text-base md:text-lg max-w-xl md:max-w-3xl">
				{description}
			</p>
		</div>
	);
}
