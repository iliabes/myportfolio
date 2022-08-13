import s from './Header.module.sass'
import classNames from 'classnames'
import useTheme from '../../hooks/themeHook'
import { Theme } from '../../context/themeContext'
import GenerateSvg from '../GenerateSvg/GenerateSvg'


function Header () {
    // let [theme, setTheme] = useState('light')
    const theme = useTheme()
    
    function switchMode(){
        theme.switchTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }




    return (
        <div id='topLine' className={s.top_menu}>
        <button  id='logo' className={classNames(s.btn,s.logo)}>Bes <GenerateSvg id='devil'/></button>
        <button className={classNames(s.btn ,s.humb_menu_icon,s.cont_icon_bmenu)} id='buttonMenu' ><i  className="fas fa-hamburger "></i></button>
        <div className={s.top_item}>
            <button id='topAbout' className={s.btn}>About </button>
            <button id='topProjects' className={s.btn}>Projects</button>
            <button id='topSkils' className={s.btn}>Skils</button>
            <button id='topContacts' className={s.btn}>Contacts</button>
            <button id='topLang' className={s.btn}>Ru</button>
            <button id='darkMode' className={s.btn}><GenerateSvg id='dark'/></button>
            <button id='darkMode' className={classNames(s.btn,s.burger)}><GenerateSvg id='devil'/></button>
        </div>
    </div>
    )
}



export default Header


