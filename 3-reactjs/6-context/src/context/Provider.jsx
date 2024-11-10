import { ThemeProvider } from "./ThemeContext";
import { TodoProvider } from "./TodoContext";

const Provider = ({Children})=> {

    return (
        <TodoProvider>
            <ThemeProvider>
                {Children}
            </ThemeProvider>
        </TodoProvider>
    )
}

export default Provider

