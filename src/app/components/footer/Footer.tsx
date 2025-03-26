import { useTheme } from "../background/BackgroundPage";
import { linkData, getLinkStyle } from "./FooterInfo";
import Link from "next/link";

export default function Footer() {
    const { mode } = useTheme();
    return (
        <div className={`absolute bottom-0 left-0 w-full flex justify-center items-center p-2 border-4 border-black 
        ${mode === "light" ? "border-gray-900 text-black" : "border-white text-white"}`}>
            <div className="flex justify-around w-full">
                {linkData.map((link, index)=>(
                    <Link href={link.href} className={getLinkStyle(link.href)} key={index}>
                        {link.text}
                    </Link>
                ))}
                    
            </div>
        </div>
    )
}
