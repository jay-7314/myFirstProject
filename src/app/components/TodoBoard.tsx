import TodoList from "./TodoList";

interface TodoBoardProps {
    todolist : string[]
}

export default function TodoBoard({todolist}: TodoBoardProps){

    return(
        <div>
            TODOLIST
            {todolist.map((item, index)=><TodoList key = {index} item={item}/>)}
        </div>
    )
}
