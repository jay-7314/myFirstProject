"use client"

import Button from "@/app/components/function/Button";
import Input from "@/app/components/function/Input";
import { useRouter } from "next/navigation";

export default function signup() {
    const router = useRouter();
    const returnPage = () => {
        router.back();
    }

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-2xl font-bold pb-4">signup</div>
            <div className="flex flex-col items-start justify-center pb-4">
                아이디 <Input placeholder="아이디" className="px-2" type="text" />
                비밀번호 <Input placeholder="비밀번호" className="px-2" type="password" />
                비밀번호 확인 <Input placeholder="비밀번호 확인" className="px-2" type="password" />
                이메일 <Input placeholder="이메일" className="px-2" type="email" />
            </div>
            <Button onClick={returnPage}>회원가입</Button>
        </div>
    )
}
