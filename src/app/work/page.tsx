import { CTA, Hero, Work } from "@/components/sections/work";

export default function workPage() {
    return (
        <div className="min-h-screen font-barlow">
            <Hero />
            <Work />
            <CTA />
        </div>
    );
}
