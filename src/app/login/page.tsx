"use client"

import Button from "../components/function/Button";
import Input from "../components/function/Input";
import { useTheme } from "../components/background/BackgroundPage";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

export default function Login() {
    const { mode } = useTheme();
    const session = useSession();
    console.log(session);
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className={`text-2xl font-bold pb-6 ${mode === "light" ? "text-black" : "text-white"}`}>
                Login
            </div>
            <div className="flex flex-col items-center justify-center pb-4 gap-2">
                <Input placeholder="아이디" className="px-2" type="text" />
                <Input placeholder="비밀번호" className="px-2" type="password" />
            </div>
            <div className="flex w-auto justify-center items-center">
                <Button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        alert("로그인 되었습니다.");
                    }}>로그인
                </Button>
                <Link href="/login/signup" className="ml-4 hover:border-b-2 hover:border-black">회원가입</Link>

            </div>
            <div className="flex flex-col items-center justify-center my-4 ">
                다른 방법으로 로그인
            </div>
            <div className = "flex flex-col items-center justify-center gap-2">
                <button onClick={() => signIn("google")}>{<Image src="/google_oauth.png" alt="google-oauth" width={200} height={200} />}</button>
                <button onClick={() => signIn("naver")}>{<Image src="/naver_oauth.png" alt="naver-oauth" width={200} height={200} />}</button>
                <button onClick={() => signIn("kakao")}>{<Image src="/kakao_oauth.png" alt="kakao-oauth" width={200} height={200} />}</button>
            </div>
        </div>
    )
}
