import TodoList from "./TodoList";
import { useTheme } from "../components/background/BackgroundPage";

interface TodoBoardProps {
    todolist : string[]
}

export default function TodoBoard({todolist}: TodoBoardProps){
    const {mode} = useTheme();

    return(
        <div className="flex flex-col items-center pt-2">
            <div className={`text-2xl font-bold ${mode === "light" ? "text-gray-900" : "text-white"}`}>
            TODOLIST
            </div>
            {todolist.map((item, index)=><TodoList key = {index} item={item}/>)}
        </div>
    )
}
