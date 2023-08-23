import { useState } from "react";

const TodoInput = ({addTodo}) => {

    const [todo, setTodo] = useState({title: ''})


    return (  
        <div className="bg-green-200 w-full">
            <div>Todo Input</div>
            <div>
                <input className="m-3 p-3 bg-blue-100" type="text" name="title" value={todo.title} onChange={(e) => {
                    todo.title = e.target.value
                    setTodo({...todo})
                }}></input>
                <button className="bg-blue-200 m-3 p-3 border-2"
				onClick={() => {
					addTodo(todo)
					setTodo({title:''});
				}}
                >ADD TODO</button>
            </div>
        </div>
    );
}
 
export default TodoInput;