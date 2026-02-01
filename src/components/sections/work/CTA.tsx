import Button from "@/components/ui/Button";

export default function CTA() {
    return (
        // Background image uses ::before pseudo-element for opacity effect
        // CTA Container: Text container, Action button
        <div className="
             relative flex flex-col text-center font-playfair overflow-hidden
             border-t border-foreground
             py-[50px] lg:py-[100px] xl:py-[120px]
             px-4 lg:px-[250px] xl:px-[350px]
             gap-7 lg:gap-[40px] xl:gap-[50px]
             before:absolute before:inset-0 before:-z-10
             before:bg-[url('/assets/images/our-work/work-hero-cta.png')]
             before:bg-cover before:bg-center before:bg-no-repeat
             before:opacity-60">

            {/* Text container: title and subtitle */}
            <div className="flex flex-col gap-1.5 lg:gap-2.5 xl:gap-3.5">

                <h2 className="font-semibold text-2xl lg:text-[30px] xl:text-[38px]">
                    Let us Bring your Ideas to Life in the Digital World.
                </h2>

                <p className="tracking-minus06 text-muted-foreground leading-6
                              text-[14px] lg:text-base xl:text-lg">
                    No matter which services you choose, we are committed to delivering exceptional results that exceed
                    your expectations. Our multidisciplinary team works closely together to ensure seamless
                    collaboration and a unified vision for your digital product.
                </p>
            </div>

            {/* Action Button */}
            <Button className="font-playfair w-fit self-center
                               px-6 xl:px-[34px]
                               py-[14px] xl:py-[18px]">
                <span className="font-medium text-muted-foreground tracking-minus06
                                 text-[14px] xl:text-[18px]">
                    Start Project
                </span>
            </Button>
        </div>
    );
}
