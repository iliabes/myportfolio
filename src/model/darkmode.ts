import { Theme } from "../context/themeContext"

export default function darkMode(theme:Theme){
    const root = document.querySelector(':root') as HTMLElement
    const rootStyle = getComputedStyle(root) 
    root.style.setProperty('--compponent-default',`var(--compponent-${theme})`)
    root.style.setProperty('--compponent-body-default',`var(--compponent-body-${theme})`)

}