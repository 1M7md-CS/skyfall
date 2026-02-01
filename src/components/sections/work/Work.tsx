"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { work } from "@/lib/data";
import Card from "./Card";
import Image from "next/image";
import Button from "@/components/ui/Button";

// Layout and load-more config
const DESKTOP_BREAKPOINT = 768;
const DESKTOP_INITIAL_CARDS = 10;
const MOBILE_INITIAL_CARDS = 4;
const DESKTOP_LOAD_MORE_COUNT = 2;
const MOBILE_LOAD_MORE_COUNT = 1;

export default function Work() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [visibleCount, setVisibleCount] = useState<number[]>([]);

    // Update layout and initial visible cards when screen resizes
    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);

        const handleScreenSizeChange = (event: MediaQueryListEvent | MediaQueryList) => {
            const isDesktopScreen = event.matches;
            setIsDesktop(isDesktopScreen);

            // Set initial visible cards based on screen size
            setVisibleCount(work.map(() => (isDesktopScreen ? DESKTOP_INITIAL_CARDS : MOBILE_INITIAL_CARDS)));
        };

        handleScreenSizeChange(mediaQuery);

        // Listen for screen changes and update layout when screen width crosses the breakpoint
        mediaQuery.addEventListener("change", handleScreenSizeChange);

        return () => mediaQuery.removeEventListener("change", handleScreenSizeChange);
    }, []);

    // Load more cards for a specific category
    const handleShowMore = (categoryIndex: number) => {
        setVisibleCount(prev => {
            const updated = [...prev];
            const increment = isDesktop ? DESKTOP_LOAD_MORE_COUNT : MOBILE_LOAD_MORE_COUNT;
            updated[categoryIndex] = Math.min(updated[categoryIndex] + increment, work[categoryIndex].cards.length);
            return updated;
        });
    };

    // Simple fade-up animation for cards
    const cardAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col overflow-hidden
                        pt-10 lg:pt-20 xl:pt-[120px]
                        gap-10 xl:gap-[50px]">
            {work.map((category, categoryIndex) => {
                const visibleCardsCount = visibleCount[categoryIndex] || 0;
                const hasMoreCards = visibleCardsCount < category.cards.length;

                return (
                    <section key={category.name} className="flex flex-col gap-12">

                        {/* Category Header: Text container and tagline */}
                        <div className="flex flex-col
                                        px-4 lg:px-10 xl:px-[50px]
                                        gap-[30px] lg:gap-10 xl:gap-[50px]">

                            {/* Text container: Title and subtitle */}
                            <div className="flex flex-col gap-[6px] lg:gap-[10px] xl:gap-3.5">
                                <h2 className="font-semibold text-[28px] lg:text-[38px] xl:text-5xl">
                                    {category.name}
                                </h2>

                                <p className="tracking-minus06 text-muted-foreground
                                              text-[14px] lg:text-base xl:text-[18px]">
                                    {category.summary}
                                </p>
                            </div>

                            {/* Tagline */}
                            <div className="bg-foreground max-w-fit p-2.5 rounded-md xl:rounded-lg
                                            xl:py-3 xl:px-3.5">
                                <span className="text-[14px] lg:text-[18px] xl:text-[22px]">
                                    {category.tagline}
                                </span>
                            </div>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-foreground">
                            {category.cards.slice(0, visibleCardsCount).map((card, cardIndex) => (

                                <motion.div key={`${category.name}-${card.title}`}
                                            className={`border-b border-foreground ${cardIndex % 2 === 0 ? "md:border-r" : ""}`}
                                            variants={cardAnimation}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{ duration: 0.5 }}
                                            viewport={{ once: true }}>

                                            <Card card={card} />
                                </motion.div>
                            ))}
                        </div>

                        {/* Show More Button if more cards exist */}
                        {hasMoreCards && (
                            <div className="flex justify-center pb-[50px]">
                                <Button
                                    onClick={() => handleShowMore(categoryIndex)}
                                    className="group relative flex items-center transition-all hover:pr-12 overflow-hidden">

                                    <span className="text-lg font-medium">Show More</span>

                                    {/* Icon slides in when hover */}
                                    <div className="absolute right-4 translate-x-10 opacity-0 transition-all
                                                    group-hover:translate-x-0 group-hover:opacity-100 flex">
                                        <Image src="/assets/svgs/up-down-stars.svg"
                                                alt="icon"
                                                width={25}
                                                height={25}
                                                className="size-6 invert"/>
                                    </div>
                                </Button>
                            </div>
                        )}
                    </section>
                );
            })}
        </div>
    );
}
