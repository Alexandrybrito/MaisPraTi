import { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({Children})=> {

    const [todos, setTodos] = useState([
        { id: 1, task: 'fazer as compras do mercado', completed: false },
        { id: 2, task: 'Passear com os cães', completed: true }
    ])

    const addTodo = (task)=> {
        setTodos([... todos, { id: Date.now(), task, completed: false }])
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo }}>
            {Children}
        </TodoContext.Provider>
    )
}