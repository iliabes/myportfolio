import s from './Header.module.sass'
import classNames from 'classnames'
import useTheme from '../../hooks/themeHook'
import { Theme } from '../../context/themeContext'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import { FaAdjust } from 'react-icons/fa';
import {ImCancelCircle} from 'react-icons/im'
import { Transition } from 'react-transition-group';
import { useState } from 'react'

function Header () {


    
    // let [theme, setTheme] = useState('light')
    const theme = useTheme()
    let [visible,setVisible] = useState(false)

    function humbMenu(){
        setVisible(!visible)
    }

    function switchMode(){
        theme.switchTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const duration = 300;

    const defaultStyle = {
        transform: 'translateX(-1500)',
        opacity:0
    }


    const transitionStyles = {
        entered: {transform: 'translateX(0)',opacity:1 },
        exited:  { transform: 'translateX(-1500px)',opacity:0},
};


    return (
        <div id='topLine' className={s.top_menu}>
        <button  id='logo' className={classNames(s.btn,s.logo)}>Bes <GenerateSvg id='devil'/></button>
        <button onClick={()=>{humbMenu()}} className={classNames(s.btn ,s.humb_menu_icon,s.cont_icon_bmenu)} id='buttonMenu' ><GenerateSvg id='dark'/></button>
        <div className={s.top_item}>
            <button id='topAbout' className={s.btn}>About </button>
            <button id='topProjects' className={s.btn}>Projects</button>
            <button id='topSkils' className={s.btn}>Skils</button>
            <button id='topContacts' className={s.btn}>Contacts</button>
            <button id='topLang' className={s.btn}>Ru</button>
            <button onClick={()=>{switchMode()}} id='darkMode' className={s.btn}><GenerateSvg id='dark'/></button>
        </div>
        
        <Transition in={visible} timeout={duration}>
            {state => (


        <div style={{...defaultStyle,...transitionStyles[state]}} id='humbMenu' className={s.humb_menu}>
            
            <div   className="top_line"><div className={s.logo}>Bes</div><div id='buttonCros' className="cont_icon_cross"><i  className="fa fa_times icon"></i></div></div>
            
            <div id="contHumb" className={s.cont_humb}>
                
                    <div className={s.cont_point}>
                    <p  id='hambAbout' className={s.points}><span className={s.white_points}></span>About<span className={s.white_points}></span></p>
                </div>
                <div className={s.cont_point}>
                    <p id='hambProjects' className={s.points}><span className={s.white_points}></span>Projects<span className={s.white_points}></span></p>
                </div>
                <div className={s.cont_point}>
                    <p id='hambScills' className={s.points}><span className={s.white_points}></span>Scills<span className={s.white_points}></span></p>
                </div>
                <div className={s.cont_point}>
                    <p id='hambContacts' className={s.points}><span className={s.white_points}></span>Contacts<span className={s.white_points}></span></p>
                </div>
                <div className={s.cont_point}>
                    <p id='hambSwitchLang' className={s.points}><span className={s.white_points}></span>Ru<span className={s.white_points}></span></p>
                </div>
                <div className={s.cont_point}>
                    <p id='hambSwithDark' className={s.points}><span className={s.white_points}></span><FaAdjust /><span className={s.white_points}></span></p>
                </div>
                <div onClick={()=>{humbMenu()}} className={s.cont_point}>
                    <p className={s.points}><span className={s.white_points}></span><ImCancelCircle /><span className={s.white_points}></span></p>
                </div>


            </div>
        </div>  
        )}
        </Transition>
    </div>
    )
}



export default Header


