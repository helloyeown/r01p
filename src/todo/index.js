import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {

    const [cmd, setCmd] = useState("list")  // 초기값

    const getView = () => {
        if(cmd === 'list') {
            return <TodoList></TodoList>
        }
    }


    return (  
        <>
            {getView()}
        </>
    );
}
 
export default Todo;