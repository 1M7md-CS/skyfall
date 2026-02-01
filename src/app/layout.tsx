import type { Metadata } from "next";
import "./globals.css";
import { Barlow, Inter, Playfair_Display } from "next/font/google";
import { Footer, Header } from "@/components/layout";

const playFair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});

const barlow = Barlow({
	weight: ["400", "500", "600", "700"],
	variable: "--font-barlow",
	subsets: ["latin"],
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Skyfall Enterprise",
};

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body
			className={`relative ${playFair.variable} ${barlow.variable} ${inter.variable} antialiased`}
		>
		<Header />
		<div className="padding-container">
			<main className="border-t-0 border border-foreground">
				{children}
			</main>
		</div>
		<Footer />
		</body>
		</html>
	);
}