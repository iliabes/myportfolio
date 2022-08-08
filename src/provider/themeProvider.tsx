import { ReactNode, useState } from "react";
import {ThemeContext,Theme} from "../context/themeContext";

import darkMode from '../model/darkmode'
import storage from "../model/storage";

interface Iprovider{
    children:ReactNode,
}






const ThemeProvider = ({children, ...props}:Iprovider) => {
    
    let [theme,setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT)
    darkMode(theme)
    function switchTheme(theme:Theme){
        storage.setItem('theme',theme)
        setTheme(theme)
        darkMode(theme)
    }
  

    return(
        <ThemeContext.Provider value={{theme,switchTheme}}{...props}>{children}</ThemeContext.Provider>
    )
}
export default ThemeProvider