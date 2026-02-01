export default function Hero() {
    return (
        // Background image using ::before pseudo-element to apply the opacity just on the image
        // Hero Container: Title and subtitle
        <div className="
             relative flex flex-col text-center overflow-hidden
             border-b border-foreground
             py-[50px] lg:py-[100px] xl:py-[120px]
             px-4 lg:px-[250px] xl:px-[300px]
             gap-1.5 lg:gap-[10px] xl:gap-[14px]
             before:absolute before:inset-0 before:-z-10
             before:bg-[url('/assets/images/our-work/work-hero-cta.png')]
             before:bg-cover before:bg-center before:bg-no-repeat
             before:opacity-60">

            <h2 className="font-semibold text-[28px] lg:text-[38px] xl:text-5xl">
                Our Works
            </h2>

            <p className="text-xl tracking-minus06 text-muted-foreground">
                Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our
                creativity and expertise.
            </p>
        </div>
    );
}
