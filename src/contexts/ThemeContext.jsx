import { createContext,useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const themeToggle = () => {
        if(isDarkMode===false){
            setIsDarkMode(true);
        }
        else{
            setIsDarkMode(false);
        }
    }
    return (
    <ThemeContext.Provider value={{isDarkMode,themeToggle}}>{children}</ThemeContext.Provider>
    )
}