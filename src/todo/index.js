import { useState } from "react";
import TodoList from "./TodoList";
import TodoRead from "./TodoRead";
import TodoInput from "./TodoInput";
import uuid from "react-uuid";

const Todo = () => {

    // const [cmd, setCmd] = useState("list")  // 초기값

    // const getView = () => {
    //     if(cmd === 'list') {
    //         return <TodoList></TodoList>
    //     }
    // }

    const [todo, setTodo] = useState([])
    const [current, setCurrent] = useState(null)    // tno로 선택된 todo

    const addTodo = (todoObj) => {
        console.log(uuid(), todoObj)
        setTodo([...todo, {tno: uuid(), ...todoObj}])
    }

    const requestView = (tno) => {
        const target = todo.filter(todo => todo.tno === tno)[0]
        console.log("request View", target)
        setCurrent(target)
    }


    return (  
        <div>
        <div className="text-5xl">Todo 1</div>
			<div>
			    <TodoInput addTodo={addTodo}></TodoInput>
                <TodoRead requestView={requestView} current={current}></TodoRead>
                <TodoList></TodoList>
            </div>
        </div>
    );
}
 
export default Todo;