import { createContext, useState } from 'react';


   export const ThemeContext = createContext();

    export const ThemeProvider = ({Children})=> {

        const [theme, setTheme] = useState('light');

        const toggleTheme = ()=> {
            setTheme((prevTheme)=> (prevTheme === 'light' ? 'dark' : 'light'));
        }

        return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {Children}
            </ThemeContext.Provider>
        )
    }
    
