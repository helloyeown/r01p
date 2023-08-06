import { useEffect, useState } from "react";
import { getList } from "../api/TodoAPI";

const initState = {dtoList: []}

const TodoList = () => {

    const [data, setData] = useState(initState)

    useEffect(() => {
        getList().then(res => {
            console.log(res)
            setData(res)
        })
    }, [])
    

    return (     
        <div className="w-full h-[100vh] bg-sky-200">
            <div className="text-3xl">Todo2 List</div>

            <ul>
                {data.dtoList.map( todo => <li key={todo.tno}>{todo.tno} - {todo.title}</li>)}
            </ul>
        </div>
    );
}
 
export default TodoList;