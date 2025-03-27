import { useTheme } from "../components/background/BackgroundPage";


interface TodolistProps{
    item : string
}

export default function TodoList({item}: TodolistProps){
    const {mode} = useTheme();
    return(
        <div className = {`md:truncate break-words border-2 flex p-3 max-w-xs min-w-40ch m-2
        ${mode === "light" ? "text-black border-black" : "text-white border-white"}`}>
            {item}
        </div>
    )
}
