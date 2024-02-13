import s from './Header.module.sass'
import classNames from 'classnames'
import useTheme from '../../hooks/themeHook'
import { Theme } from '../../context/themeContext'


import { useState, useEffect } from 'react'
import {useAppDispatch} from '../../hooks/store'
import {visibleSkills,visibleContacts,visibleProject} from '../../store/slices/slice'

function Header () {
    console.log('header');
    let [btnAbout,setBtnAbout] = useState(true)
    let [btnProject,setBtnProject] = useState(false)
    let [btnContact,setBtnContact] = useState(false)
    let [btnSkils,setBtnSkils] = useState(false)
    let [count,setCount] = useState(0)







    function changeSlideBtn(direction:string):void{
        if(direction === '+' && count < 3){changeSlide(++count)}else if(direction === '-' && count > 0){changeSlide(--count)}
        
    }

    function visibleOff():void{
        dispatch(visibleProject(false));dispatch(visibleSkills(false));dispatch(visibleContacts(false))
        setBtnAbout(false);setBtnProject(false);setBtnContact(false);setBtnSkils(false);
    }

    function changeSlide(num:number){
        console.log('input',count)
        switch(num){
            case(0): 
                setCount(0)
                visibleOff()
                setBtnAbout(true);
                break;
            case(1): 
                setCount(1)
                visibleOff()
                dispatch(visibleProject(true))
                setBtnProject(true)
                break;
            case(2): 
                setCount(2)
                visibleOff()
                dispatch(visibleProject(true))
                dispatch(visibleSkills(true))
                dispatch(visibleContacts(false))
                setBtnSkils(true);
                break;
            case(3): 
                setCount(3)
                visibleOff()
                dispatch(visibleProject(true))
                dispatch(visibleSkills(true))
                dispatch(visibleContacts(true))
                setBtnContact(true)
                break;
        }
    }


    const dispatch = useAppDispatch()
    const theme = useTheme()
    
    useEffect(()=>{
        theme.switchTheme(theme.theme = Theme.DARK)
    },[])










    return (
        <div id='topLine' className={s.top_menu}>
        <div onClick={()=>{changeSlideBtn('+')}} className={classNames(s.arrow ,s.arrow_right) }></div>
        <div onClick={()=>{changeSlideBtn('-')}} className={classNames(s.arrow ,s.arrow_left) }></div>
        <div className={s.top_item}>
            <button onClick={()=>{changeSlide(0)}} id='topAbout' className={btnAbout? classNames(s.btn,s.active) : s.btn}>About </button>
            <button onClick={()=>{changeSlide(1)}} id='topProjects' className={btnProject? classNames(s.btn,s.active) : s.btn}>Projects</button>
            <button onClick={()=>{changeSlide(2)}} id='topSkils' className={btnSkils? classNames(s.btn,s.active) : s.btn}>Skils</button>
            <button onClick={()=>{changeSlide(3)}} id='topContacts' className={btnContact? classNames(s.btn,s.active) : s.btn}>Contacts</button>
        </div>
        

    </div>
    )
}



export default Header