import { useTheme } from "./BackgroundPage";

interface TodolistProps{
    item : string
}

export default function TodoList({item}: TodolistProps){
    const {mode} = useTheme();
    return(
        <div className = {`border-2  flex p-3 m-2 max-w-sm 
        ${mode === "light" ? "text-black border-black" : "text-white border-white"}`}>
            {item}
        </div>
    )
}
