import { CTA, Hero, Services } from "@/components/sections/services";

export default function servicesPage() {
    return (
        <div className="min-h-screen">
            <Hero />
            <Services />
            <CTA />
        </div>
    );
}
