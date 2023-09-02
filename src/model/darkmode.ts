import { Theme } from "../context/themeContext"

export default function darkMode(theme:Theme){
    const root = document.querySelector(':root') as HTMLElement
    // const rootStyle = getComputedStyle(root) 
    root.style.setProperty('--compponent-default',`var(--compponent-${theme})`)
    root.style.setProperty('--compponent-body-default',`var(--compponent-body-${theme})`)
    root.style.setProperty('--compponent-bg1-default',`var(--compponent-bg1-${theme})`)
    root.style.setProperty('--compponent-bg2-default',`var(--compponent-bg2-${theme})`)
    root.style.setProperty('--compponent-text-default',`var(--compponent-text-${theme})`)
    root.style.setProperty('--compponent-header-default',`var(--compponent-header-${theme})`)
}