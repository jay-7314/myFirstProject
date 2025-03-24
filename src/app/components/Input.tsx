"use client"

import {useState} from "react"
import TodoBoard from "./TodoBoard";

export default function Input(){
    const [inputValue, setInputValue] = useState("");
    const [todolist, setTodolist] = useState<string[]>([]);
    
    const addlist = ()=>{
        setTodolist([...todolist, inputValue]); // typeScript파일을 지정함으로서 useState에서 타입을 지정해줌.
    }
    
    return(
        <div>
        <input
        value={inputValue}
        className="border-2 border-primary" 
        type = "text" 
        placeholder = "당신의 계획을 입력해주세요" 
        onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={addlist}>추가</button>

        <TodoBoard todolist={todolist}/>
</div>
    );
}