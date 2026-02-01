"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import useLocation from "@/hooks/use-location";
import { pages } from "@/lib/data";
import { capitalize } from "@/lib/utils";
import Button from "../ui/Button";

function NavbarItems({ currentPage }: { currentPage: string }) {
	return (
		<>
			{pages.map((page) => (
				<NavbarItem
					href={page}
					key={page}
					currentPage={currentPage}
					name={page}
				/>
			))}
		</>
	);
}

function Navbar() {
	const currentPage = useLocation();
	console.log(currentPage);

	return (
		<>
			<nav className="hidden md:flex items-center justify-center">
				<ul className="list-none flex items-center justify-center gap-2">
					<NavbarItems currentPage={currentPage} />
				</ul>
			</nav>
			<Button className="hidden md:block">Contact Us</Button>
		</>
	);
}

function MobileNavbar() {
	const [isOpen, setIsOpen] = React.useState(false);
	const currentPage = useLocation();

	const handleToggleMenu = () => {
		setIsOpen((v) => !v);
	};

	return (
		<>
			{isOpen && (
				<nav className="absolute w-full left-0 top-24 bg-background backdrop-blur-sm">
					<ul className="list-none flex flex-col gap-4 p-4">
						<NavbarItems currentPage={currentPage} />
					</ul>
				</nav>
			)}
			<Button
				onClick={handleToggleMenu}
				variant="foreground"
				className="block md:hidden"
			>
				<Image
					src="/assets/svgs/burgur-menu.svg"
					width={26}
					height={18}
					alt="Burger Menu"
				/>
			</Button>
		</>
	);
}

function NavbarItem({
	currentPage,
	name,
	href,
}: {
	currentPage: string;
	name: string;
	href: string;
}) {
	return currentPage === name ? (
		<li className="py-3 px-4 bg-foreground rounded-md font-semibold">
			<Link href={href}>{capitalize(name)}</Link>
		</li>
	) : (
		<li className="py-3 px-4">
			<Link href={href}>{capitalize(name)} </Link>
		</li>
	);
}

export default function Header() {
	return (
		<header className="sticky top-0 left-0 bg-background padding-container pb-3 pt-10 md:pt-3 flex items-center justify-between border-b border-foreground z-10">
			<h1 className="text-xl" aria-label="logo">
				Skyfall Enterprises
			</h1>
			<Navbar />
			<MobileNavbar />
		</header>
	);
}
