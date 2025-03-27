"use client"

import { useState } from "react"
import { useTheme } from "../components/background/BackgroundPage";
import TodoBoard from "./TodoBoard";
import Input from "../components/function/Input";
import Button from "../components/function/Button";


export default function InputTodo() {
    const [inputValue, setInputValue] = useState("");
    const [todolist, setTodolist] = useState<string[]>([]);


    const addlist = () => {
        setTodolist([...todolist, inputValue]); // typeScript파일을 지정함으로서 useState에서 타입을 지정해줌.
        setInputValue(""); // inputValue를 초기화 하기 위한 코드
    }

    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex">

                <Input
                    placeholder="당신의 계획을 알려주세요"
                    type="text"
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key === "Enter") {
                            addlist();
                        }
                    }}
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setInputValue(e.target.value);
                    }} 
                    className="px-2"
                    />
                <Button onClick={addlist}
                >추가
                </Button>
            </div>

            <TodoBoard todolist={todolist} />
        </div>
    );
}