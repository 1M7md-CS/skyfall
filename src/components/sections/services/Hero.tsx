export default function Hero() {
	return (
		<div className='bg-[url("/assets/images/services-hero.jpg")] bg-cover bg-center min-h-60 md:min-h-80 w-full grid place-content-center space-y-2 text-center px-6 md:p-0'>
			<h2 className="text-4xl font-semibold">Our Services</h2>
			<p className="text-muted-foreground text-base md:text-lg max-w-xl md:max-w-3xl">
				Transform your brand with our innovative digital solutions that
				captivate and engage your audience.
			</p>
		</div>
	);
}
