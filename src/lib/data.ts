export const pages = [
    "home",
    "services",
    "work",
    "process",
    "about",
    "careers",
];

// Services
export type ServiceCategory = {
    name: string;
    summary: string;
    tagline: string;
    subcategories: ServiceSubcategory[];
};

export type ServiceSubcategory = {
    name: string;
    features: FeatureItem[];
};

export type FeatureItem = {
    icon: string;
    name: string;
};

export const services: ServiceCategory[] = [
    {
        name: "Design",
        summary:
            "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        tagline: "Our design services include:",
        subcategories: [
            {
                name: "User Experience (UX) Design",
                features: [
                    {
                        icon: "/assets/svgs/window-click.svg",
                        name: "User Research and Persona Development",
                    },
                    {
                        icon: "/assets/svgs/document-click.svg",
                        name: "Information Architecture and Wireframing",
                    },
                    {
                        icon: "/assets/svgs/radio-click.svg",
                        name: "Interactive Prototyping and User Testing",
                    },
                    {
                        icon: "/assets/svgs/up-down-stars.svg",
                        name: "UI Design and Visual Branding",
                    },
                ],
            },
            {
                name: "User Interface (UI) Design",
                features: [
                    {
                        icon: "/assets/svgs/speedy-click.svg",
                        name: "Intuitive and Visually Appealing Interface Design",
                    },
                    {
                        icon: "/assets/svgs/ladybug.svg",
                        name: "Custom Iconography and Illustration",
                    },
                    {
                        icon: "/assets/svgs/pen-tip.svg",
                        name: "Typography and Color Palette Selection",
                    },
                    {
                        icon: "/assets/svgs/blocks-scroll.svg",
                        name: "Responsive Design for Various Devices",
                    },
                ],
            },
            {
                name: "Branding and Identity",
                features: [
                    {
                        icon: "/assets/svgs/circle.svg",
                        name: "Logo Design and Visual Identity Development",
                    },
                    {
                        icon: "/assets/svgs/all-directions.svg",
                        name: "Brand Strategy and Positioning",
                    },
                    {
                        icon: "/assets/svgs/graph.svg",
                        name: "Brand Guidelines and Style Guides",
                    },
                    {
                        icon: "/assets/svgs/book.svg",
                        name: "Marketing Collateral Design (Brochures, Business Cards, etc.)",
                    },
                ],
            },
        ],
    },
    {
        name: "Engineering",
        summary:
            "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        tagline: "Our engineering services include:",
        subcategories: [
            {
                name: "Web Development",
                features: [
                    {
                        icon: "/assets/svgs/code.svg",
                        name: "Front-End Development (HTML, CSS, JavaScript)",
                    },
                    {
                        icon: "/assets/svgs/terminal.svg",
                        name: "Back-End Development (PHP, Python, Ruby)",
                    },
                    {
                        icon: "/assets/svgs/settings.svg",
                        name: "Content Management System (CMS) Development (WordPress, Drupal)",
                    },
                    {
                        icon: "/assets/svgs/beacon.svg",
                        name: "E-Commerce Platform Development (Magento, Shopify)",
                    },
                ],
            },
            {
                name: "Mobile App Development",
                features: [
                    {
                        icon: "/assets/svgs/platter-filled-ipad.svg",
                        name: "Native iOS and Android App Development",
                    },
                    {
                        icon: "/assets/svgs/arrow-turn-up-forward-iphone.svg",
                        name: "Cross-Platform App Development (React Native, Flutter)",
                    },
                    {
                        icon: "/assets/svgs/cursor-arrow.svg",
                        name: "App Prototyping and UI/UX Design Integration",
                    },
                    {
                        icon: "/assets/svgs/hand-point.svg",
                        name: "App Testing, Deployment, and Maintenance",
                    },
                ],
            },
            {
                name: "Custom Software Development",
                features: [
                    {
                        icon: "/assets/svgs/dashed-badge-record.svg",
                        name: "Enterprise Software Development",
                    },
                    {
                        icon: "/assets/svgs/sparkels-filled-tv.svg",
                        name: "Custom Web Application Development",
                    },
                    {
                        icon: "/assets/svgs/plus-blocks.svg",
                        name: "Integration with Third-Party APIs and Systems",
                    },
                    {
                        icon: "/assets/svgs/stack.svg",
                        name: "Legacy System Modernization and Migration",
                    },
                ],
            },
        ],
    },
    {
        name: "Project Management",
        summary:
            "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        tagline: "Our project management services include:",
        subcategories: [
            {
                name: "Project Planning and Scoping",
                features: [
                    {
                        icon: "/assets/svgs/inbox.svg",
                        name: "Requirements Gathering and Analysis",
                    },
                    {
                        icon: "/assets/svgs/latency.svg",
                        name: "Project Roadmap and Timeline Development",
                    },
                    {
                        icon: "/assets/svgs/minimize.svg",
                        name: "Resource Allocation and Task Assignment",
                    },
                    {
                        icon: "/assets/svgs/latency.svg",
                        name: "Risk Assessment and Mitigation Strategies",
                    },
                ],
            },
            {
                name: "Agile Development",
                features: [
                    {
                        icon: "/assets/svgs/inbox-filled.svg",
                        name: "Iterative Development and Sprints",
                    },
                    {
                        icon: "/assets/svgs/database.svg",
                        name: "Scrum or Kanban Methodology Implementation",
                    },
                    {
                        icon: "/assets/svgs/bag.svg",
                        name: "Regular Progress Updates and Demos",
                    },
                    {
                        icon: "/assets/svgs/magic-wand.svg",
                        name: "Continuous Improvement and Feedback Incorporation",
                    },
                ],
            },
            {
                name: "Quality Assurance and Testing",
                features: [
                    {
                        icon: "/assets/svgs/puzzle-piece.svg",
                        name: "Test Planning and Execution",
                    },
                    {
                        icon: "/assets/svgs/shield.svg",
                        name: "Functional and Usability Testing",
                    },
                    {
                        icon: "/assets/svgs/chart.svg",
                        name: "Performance and Security Testing",
                    },
                    {
                        icon: "/assets/svgs/wrench.svg",
                        name: "Bug Tracking and Issue Resolution",
                    },
                ],
            },
        ],
    },
];

// Work
export type WorkCategory = {
    name: string;
    summary: string;
    tagline: string;
    cards: Card[];
};

export type Card = {
    title: string;
    image: string;
    links: CardLink[];
    description: string;
};

export type CardLink = {
    name: string;
    url: string;
    icon: string;
};

export const work: WorkCategory[] = [
    {
        name: "At Skyfall",
        summary:
            "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.",
        tagline: "Here are examples of our notable works:",
        cards: [
            {
                title: "E-Commerce Platform for Fashion Hub",
                image: "/assets/images/our-work/w1.png",
                description:
                    "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique," +
                    " a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration," +
                    " and personalized recommendations, resulting in increased online sales and customer satisfaction.",
                links: [
                    {
                        name: "Chic Boutique",
                        url: "https://www.chicboutique.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Mobile App for Food Delivery",
                image: "/assets/images/our-work/w2.png",
                description:
                    "HungryBites approached us to create a mobile app that streamlined their food delivery service." +
                    " The app included features like real-time order tracking, easy menu customization," +
                    " and secure payment options, resulting in improved customer convenience" +
                    " and operational efficiency.",
                links: [
                    {
                        name: "HungryBites",
                        url: "https://www.hungrybites.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Event Booking System",
                image: "/assets/images/our-work/w3.png",
                description:
                    "EventMasters required a comprehensive booking and reservation system for their event management services." +
                    " We designed a user-friendly platform that allowed seamless event registration," +
                    " ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
                links: [
                    {
                        name: "EventMasters",
                        url: "https://www.eventmasters.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Workflow Automation Software",
                image: "/assets/images/our-work/w4.png",
                description:
                    "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique," +
                    " a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration," +
                    " and personalized recommendations, resulting in increased online sales and customer satisfaction.",
                links: [
                    {
                        name: "ProTech Solutions",
                        url: "https://www.protechsolutions.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Fashion Hub Redesign",
                image: "/assets/images/our-work/w1.png",
                description:
                    "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique," +
                    " a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration," +
                    " and personalized recommendations, resulting in increased online sales and customer satisfaction.",
                links: [
                    {
                        name: "Chic Boutique",
                        url: "https://www.chicboutique.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Food Delivery Analytics",
                image: "/assets/images/our-work/w2.png",
                description:
                    "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique," +
                    " a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration," +
                    " and personalized recommendations, resulting in increased online sales and customer satisfaction.",
                links: [
                    {
                        name: "HungryBites",
                        url: "https://www.hungrybites.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Event App Upgrade",
                image: "/assets/images/our-work/w3.png",
                description:
                    "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique," +
                    " a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration," +
                    " and personalized recommendations, resulting in increased online sales and customer satisfaction.",
                links: [
                    {
                        name: "EventMasters",
                        url: "https://www.eventmasters.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Automation Suite Expansion",
                image: "/assets/images/our-work/w4.png",
                description:
                    "Expanded workflow automation tools for ProTech Solutions with reporting features.",
                links: [
                    {
                        name: "ProTech Solutions",
                        url: "https://www.protechsolutions.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Fashion Marketing Dashboard",
                image: "/assets/images/our-work/w1.png",
                description:
                    "Dashboard for Chic Boutique to analyze sales trends and marketing campaigns.",
                links: [
                    {
                        name: "Chic Boutique",
                        url: "https://www.chicboutique.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Food Delivery Loyalty Program",
                image: "/assets/images/our-work/w2.png",
                description:
                    "Implemented a rewards program for HungryBites app to boost customer retention.",
                links: [
                    {
                        name: "HungryBites",
                        url: "https://www.hungrybites.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Virtual Event Platform",
                image: "/assets/images/our-work/w3.png",
                description:
                    "Developed a virtual events platform for EventMasters with live streaming and networking features.",
                links: [
                    {
                        name: "EventMasters",
                        url: "https://www.eventmasters.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "AI Workflow Assistant",
                image: "/assets/images/our-work/w4.png",
                description:
                    "Integrated AI tools into ProTech Solutions software to optimize repetitive tasks.",
                links: [
                    {
                        name: "ProTech Solutions",
                        url: "https://www.protechsolutions.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Fashion Hub Mobile Upgrade",
                image: "/assets/images/our-work/w1.png",
                description:
                    "Enhanced mobile experience for Chic Boutique app with faster loading and personalization.",
                links: [
                    {
                        name: "Chic Boutique",
                        url: "https://www.chicboutique.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Food Delivery Driver App",
                image: "/assets/images/our-work/w2.png",
                description:
                    "Created a separate app for HungryBites drivers for route optimization and delivery tracking.",
                links: [
                    {
                        name: "HungryBites",
                        url: "https://www.hungrybites.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
            {
                title: "Event Analytics Dashboard",
                image: "/assets/images/our-work/w3.png",
                description:
                    "Analytics dashboard for EventMasters to track attendance, ticket sales, and engagement.",
                links: [
                    {
                        name: "EventMasters",
                        url: "https://www.eventmasters.com",
                        icon: "/assets/svgs/arrow-top-right.svg",
                    },
                ],
            },
        ],
    },
];
