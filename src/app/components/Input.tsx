"use client"

import { useState } from "react"
import TodoBoard from "./TodoBoard";
import { useTheme } from "./BackgroundPage";


export default function Input() {
    const {mode} = useTheme();
    const [inputValue, setInputValue] = useState("");
    const [todolist, setTodolist] = useState<string[]>([]);


    const addlist = () => {
        setTodolist([...todolist, inputValue]); // typeScript파일을 지정함으로서 useState에서 타입을 지정해줌.
    }

    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex">
                <input
                    value={inputValue}
                    className={`rounded-md pl-2 pr-2 
                        ${mode === "light" 
                            ? "text-black border-2 border-black"
                             : "text-white border-2 border-black"
                            }`}
                    type="text"
                    placeholder="당신의 계획을 입력해주세요"
                    onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={addlist}
                 className={`rounded-md pr-2 pl-2 ml-2 ${mode === "light" ? "text-black border-2 border-black" : "text-white border-2 border-white"}`}>추가</button>
            </div>

            <TodoBoard todolist={todolist} />
        </div>
    );
}