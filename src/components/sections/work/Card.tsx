import Image from "next/image";
import type {Card as CardType} from "@/lib/data";

export default function Card({card}: { card: CardType }) {
    return (
        // Main container: Card title, Body, and description
        <div className="flex flex-col h-full pb-10 gap-6">

            {/* Header: Card title */}
            <div className="md:min-h-[110px] 2xl:min-h-0 flex items-center
                            px-6 lg:px-10 xl:px-[50px]
                            py-5 lg:py-6 xl:py-[30px]
                            border-b border-foreground">
                <h3 className="font-medium text-muted
                               text-xl md:text-[26px]">
                    {card.title}
                </h3>
            </div>

            {/* Body: image, links, and description */}
            <div className="flex flex-col gap-6
                            px-6 lg:px-10 xl:px-[50px]">

                {/* Image container */}
                <div className="relative w-full rounded-xl overflow-hidden
                                aspect-[16/10] md:aspect-video">
                    <Image
                        src={card.image}
                        alt={card.title}
                        className="object-cover"
                        fill
                    />
                </div>

                {/* Links Container: name, url, icon */}
                <div className="flex flex-col gap-5">
                    {card.links.map((link) => (
                        <div key={`${link.name}-${link.url}`}
                             className="flex justify-between gap-4 items-end xl:items-center">

                            <div className="flex gap-2 flex-col
                                            text-[14px] lg:text-base xl:text-xl">

                                <p className="font-medium tracking-minus06 text-muted-foreground">
                                    {link.name}
                                </p>

                                <div className="rounded-lg px-4 py-2 bg-foreground w-fit max-w-full">
                                    <a href={link.url}
                                       title={link.name}
                                       target="_blank"
                                       className="tracking-minus06 text-muted block truncate
                                                  hover:underline text-sm md:text-base lg:text-xl">

                                        {link.url}
                                    </a>
                                </div>
                            </div>

                            <a href={link.url}
                               title={link.url}
                               target="_blank"
                               className="flex items-center justify-center shrink-0
                                          p-3 rounded-lg bg-foreground hover:bg-foreground/90 transition-colors">

                                <Image src={link.icon}
                                       alt={link.name}
                                       width={23}
                                       height={23}

                                />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Card description */}
                <p className="font-inter text-muted
                              text-[14px] lg:text-base xl:text-lg">
                    {card.description}
                </p>
            </div>
        </div>
    );
}
