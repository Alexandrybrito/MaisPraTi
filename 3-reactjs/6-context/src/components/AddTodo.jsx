import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = ()=> {
    const { addTodo } = useContext(TodoContext);
    const [newTask, setNewtask] = useState('');

    const handleAdd = ()=> {
        addTodo(newTask);
        setNewtask('');
    }

    return (
        <div>
            <input 
                type="text"
                value={newTask}
                onChange={(event)=> setNewtask(event.target.value)}
                placeholder="Nova Tarefa" 
            />

            <button onClick={handleAdd}>Adicionar</button>
        </div>
    );
}

export default AddTodo;





