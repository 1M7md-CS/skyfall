"use client";

import { usePathname } from "next/navigation";

export default function useLocation() {
	const location = usePathname();

	return location.replace("/", "").trim();
}
