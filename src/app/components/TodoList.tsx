interface TodolistProps{
    item : string
}

export default function TodoList({item}: TodolistProps){

    
    return(
        <div className = "border-2 border-primary flex p-3">
            {item}
        </div>
    )
}
