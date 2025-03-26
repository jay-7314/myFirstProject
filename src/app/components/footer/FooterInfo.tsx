"use client";

import { useTheme } from "../background/BackgroundPage";
import { usePathname } from "next/navigation";

export const linkData = [
    { href: "/", text: "홈" },
    { href: "/personList", text: "유저 데이터베이스" },
    { href: "/todolist", text: "계획표" },
    { href: "/calendar", text: "달력" },
    { href: "/edit", text: "설정" },
]

export const getLinkStyle = (currentPath: string) => {

    const pathname = usePathname();
    const { mode } = useTheme();
    if (pathname === currentPath) {
        return `border-b-2 ${mode === "light" ? "border-black" : "border-white"}`;
    }
    return "";
}

export default { linkData, getLinkStyle };