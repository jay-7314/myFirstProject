"use client"
import Link from "next/link";
import { useTheme } from "../background/BackgroundPage";
import { usePathname } from "next/navigation";

interface HeaderProps {
    changeMode: () => void;
}

export default function Header({ changeMode }: HeaderProps) {
    const { mode } = useTheme();
    const pathname = usePathname();
    const pathNames: { [key: string]: string } = {
        "/todolist": "계획표",
        "/personList": "유저 데이터베이스",
        "/": "홈",
        "/calendar": "달력",
        "/edit": "설정",
        "/login": "로그인",
        "/login/signup": "회원가입",
    }
    return (
        <div className={`absolute top-0 left-0 w-full z-10 h-16 flex justify-between items-center p-2 border-4 ${mode === "light" ? "border-black" : "border-white"}`}>
            <div className="flex flex-col items-center">
                <div className={`text-xl  ${mode === "light" ? "text-gray-900" : "font-base text-white"}`}>JPlaner</div>
                <div className={`text-sm text-gray-500 ${mode === "light" ? "text-gray-400" : "text-white"}`}>지금까지 없던 계획표</div>
            </div>
            <div className="text-base md:text-xl">
                {pathNames[pathname] && <div className={`text-base md:text-xl ${mode === "light" ? "text-black" : "text-white"}`}>{pathNames[pathname]}</div>}
            </div>
            <div>
                <Link href="/login">로그인</Link>
            </div>

        </div>
    )

}