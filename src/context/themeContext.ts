import {createContext} from 'react'
interface Props{
    theme:Theme,
    switchTheme: (theme:Theme) => void
}


export enum Theme {
    'LIGHT' = 'light',
    'DARK' = 'dark'
}

 export const ThemeContext = createContext<Props>({
     theme:Theme.LIGHT,
     switchTheme : ()=>{}
 });

 export default ThemeContext