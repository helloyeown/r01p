import { useEffect, useState } from "react";

const TodoRead = ({requestView, current}) => {

    const [todo, setTodo] = useState()

    useEffect(() => {
        setTodo(current)
    }, [current])

    if(!todo){
        return <></>
    }


    return (  
        <div className="bg-red-200 w-full">
            <div>Todo Read</div>
            <div>{todo.tno}</div>
            <div>
                <input type="text" name="title" value={todo.title} onChange={(e) => {
                    todo.title = e.target.value
                    setTodo({...todo})
                }}></input>
                <div>
                    <button className="m-3 p-2 bg-blue-300">MOD</button>
                    <button className="m-3 p-2 bg-red-300">DEL</button>
                </div>
            </div>
        </div>
    );
}
 
export default TodoRead;