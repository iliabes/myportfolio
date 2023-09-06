import s from './Header.module.sass'
import classNames from 'classnames'
import useTheme from '../../hooks/themeHook'
import { Theme } from '../../context/themeContext'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import { FaAdjust } from 'react-icons/fa';
import {ImCancelCircle} from 'react-icons/im'
import { Transition } from 'react-transition-group';
import { useState, useEffect } from 'react'
import {CgDarkMode} from 'react-icons/cg';
import Button from './Button/Button'

import {useAppDispatch} from '../../hooks/store'
import {visibleSkills,visibleContacts,visibleProject} from '../../store/slices/slice'

function Header () {
    console.log('visible');
    let [btnred,setBtnRev] = useState(true)
    let [visible,setVisible] = useState(false)
    let count = 0
    let startY:number = 0 ;
    let startX:number = 0 ;
    // let [theme, setTheme] = useState('light')

    function comparisonValue(startY:number,endY:number,startX:number,endX:number):void{
        if((startY < endY) || (startX > endX)){
            console.log('+++++++',startY,endY)
            if(count < 3){changeSlide(++count)}
        }else if((startY > endY) || (startX < endX)){
            console.log('-------',startY,endY)
            if(count > 0){changeSlide(--count)}
        }
    }

    useEffect(()=>{
        

        window.addEventListener('touchstart', (event:any) => {
            console.log('Вы приложили палец к элементу')
            console.log(event.touches[0].clientY)
            startY = event.touches[0].clientY
            startX = event.touches[0].clientX
          })
          window.addEventListener('touchend', (event:any) => {
            console.log('Вы убрали палец к элементу')
            console.log(event.changedTouches[0].clientY)
            comparisonValue(startY,event.changedTouches[0].clientY,startX,event.changedTouches[0].clientX)
            startY = 0
            startX = 0
          })
        //   window.addEventListener('touchmove', (event:any) => {
        //     console.log('Вы двигаете палец к элементу',event)
        //     console.log(event.changedTouches)
        //   })
    })

    useEffect(()=>{
        console.log('useEffect');
        window.addEventListener('wheel', function() {
                // console.log(window.pageYOffset)
                if( window.pageYOffset <= 100){ 
                    changeSlide(count)
                    count = 0
                } 
                if(window.pageYOffset >= 100 && window.pageYOffset <= 300){ 
                    
                    changeSlide(count)
                    count = 1
                } if(window.pageYOffset >= 300 && window.pageYOffset <= 500){
                    
                    changeSlide(count)
                    count = 2
                }
                if(window.pageYOffset >= 500 && window.pageYOffset <= 800){
                    
                    changeSlide(count)
                    count = 3
                
                }
        });
    },[])

    useEffect(()=>{

        window.addEventListener('click',()=>{
            console.log(count)
        })

        window.addEventListener('keydown', function(e) {
            console.log(count)
            if(e.key === 'ArrowRight' && count < 3){
                count++
                changeSlide(count)
            }else if(e.key === 'ArrowLeft' && count > 0){
                count = count - 1
                changeSlide(count)
            }
        })
    },[])
    

    function changeSlide(num:number){
        switch(num){
            case(0): 
                count = 0
                dispatch(visibleProject(false))
                dispatch(visibleSkills(false))
                dispatch(visibleContacts(false))
                break;
            case(1): 
                count = 1
                dispatch(visibleProject(true))
                dispatch(visibleSkills(false))
                dispatch(visibleContacts(false))
                break;
            case(2): 
                count = 2
                dispatch(visibleProject(true))
                dispatch(visibleSkills(true))
                dispatch(visibleContacts(false))
                break;
            case(3): 
                count = 3
                dispatch(visibleProject(true))
                dispatch(visibleSkills(true))
                dispatch(visibleContacts(true))
                break;
        }
    }


    const dispatch = useAppDispatch()
    const theme = useTheme()
    

    function humbMenu(){
        setVisible(!visible)
    }

    function humbMenuCancel(){
        console.log('cancel');
        setVisible(false)
    }

    function switchMode(){
        theme.switchTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const duration = 300;

    const defaultStyle = {
        transform: 'translateX(-1500px)',
        opacity:0
    }

// -----------------------------------------!!!!!!!!!!!!!!!!!!!!!!!eror

    const transitionStyles:any = {
        entered: {transform: 'translateX(0)',opacity:1 },
        exited:  { transform: 'translateX(-1800px)',opacity:0},
}


    return (
        <div id='topLine' className={s.top_menu}>
        <button  id='logo' className={classNames(s.btn,s.logo)}>Bes <GenerateSvg id='devil'/></button>
        <button onClick={()=>{humbMenu()}} className={classNames(s.btn ,s.humb_menu_icon,s.cont_icon_bmenu)} id='buttonMenu' ><GenerateSvg id='dark'/></button>
        <div className={s.top_item}>
            <Button name="bla"/>
            <button onClick={()=>{humbMenuCancel();changeSlide(0)}} id='topAbout' className={s.btn}>About </button>
            <button onClick={()=>{changeSlide(1);humbMenuCancel()}} id='topProjects' className={btnred? classNames(s.btn,s.active) : s.btn}>Projects</button>
            <button onClick={()=>{changeSlide(2);humbMenuCancel()}} id='topSkils' className={s.btn}>Skils</button>
            <button onClick={()=>{changeSlide(3);humbMenuCancel()}} id='topContacts' className={s.btn}>Contacts</button>
            {/* <button id='topLang' className={s.btn}>Ru</button>} */}
            <button onClick={()=>{switchMode()}} id='darkMode' className={s.btn}><CgDarkMode/></button>
        </div>
        
        <Transition in={visible} timeout={duration}>
            {state => (
            <div style={{...defaultStyle,...transitionStyles[state]}}  id='humbMenu' className={s.humb_menu}>
            
            <div   className="top_line"><div className={s.logo}>Bes</div><div id='buttonCros' className="cont_icon_cross"><i  className="fa fa_times icon"></i></div></div>
            
            <div id="contHumb" className={s.cont_humb}>
                
                <div onClick={()=>{humbMenu(); changeSlide(0)}} className={s.cont_point}>
                    <p  id='hambAbout' className={s.points}><span className={s.white_points}></span>About<span className={s.white_points}></span></p>
                </div>
                <div onClick={()=>{humbMenu(); changeSlide(1)}}  className={s.cont_point}>
                    <p id='hambProjects' className={s.points}><span className={s.white_points}></span>Projects<span className={s.white_points}></span></p>
                </div>
                <div onClick={()=>{humbMenu(); changeSlide(2)}}  className={s.cont_point}>
                    <p id='hambScills' className={s.points}><span className={s.white_points}></span>Scills<span className={s.white_points}></span></p>
                </div>
                <div onClick={()=>{humbMenu(); changeSlide(3)}}  className={s.cont_point}>
                    <p id='hambContacts' className={s.points}><span className={s.white_points}></span>Contacts<span className={s.white_points}></span></p>
                </div>
                /*<div className={s.cont_point}>
                    <p id='hambSwitchLang' className={s.points}><span className={s.white_points}></span>Ru<span className={s.white_points}></span></p>
                </div>*/
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


