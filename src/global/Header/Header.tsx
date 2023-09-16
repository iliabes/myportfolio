import s from './Header.module.sass'
import classNames from 'classnames'
import useTheme from '../../hooks/themeHook'
import { Theme } from '../../context/themeContext'
import GenerateSvg from '../GenerateSvg/GenerateSvg'


import { useState, useEffect } from 'react'
import {useAppDispatch} from '../../hooks/store'
import {visibleSkills,visibleContacts,visibleProject} from '../../store/slices/slice'

function Header () {
    console.log('visible');
    let [btnAbout,setBtnAbout] = useState(true)
    let [btnProject,setBtnProject] = useState(false)
    let [btnContact,setBtnContact] = useState(false)
    let [btnSkils,setBtnSkils] = useState(false)
    let count = 0
    let startY:number = 0 ;
    let startX:number = 0 ;
    // let [theme, setTheme] = useState('light')


    function choiceDeretion(startY:number,endY:number,startX:number,endX:number):[string,number]{
        let num1:number;
        let num2:number;
        let direction:string ;
        let res:number;

        if(startX > endX){
            num1 = startX - endX
        }else{
            num1 = endX - startX
        }
        
        if(startY > endY){
            num2 = startY - endY
        }else{
            num2 = endY - startY
        }

        if(num1 > num2){
            res = num1
            direction = 'x'
        }else{
            res = num2
            direction = 'y'
        }
        
        return [direction,res ]
    }

    function comparisonValue(startY:number,endY:number,startX:number,endX:number):void{
        let direction = choiceDeretion(startY,endY,startX,endX)
        if(direction[0] === 'x'){
            if(startX < endX){
                console.log('+++++++','x',startY,endY,count)
                if(count < 3){changeSlide(++count)}
            }else if(startX > endX){
                console.log('+++++++','x',startY,endY)
                if(count > 0){changeSlide(--count)}
            }
        }else{
            if((startY > endY)){
                console.log('+++++++','y',startY,endY)
                if(count < 3){changeSlide(++count)}
            }else if((startY < endY)){
                console.log('-------','y',startY,endY)
                if(count > 0){changeSlide(--count)}
            }
        }

    }

    function touchEnd(event:any){
        console.log('Вы убрали палец к элементу')
        console.log(event.changedTouches[0].clientY)
        comparisonValue(startY,event.changedTouches[0].clientY,startX,event.changedTouches[0].clientX)
        startY = 0
        startX = 0
    }

    useEffect(()=>{
        switchMode()
        window.addEventListener('touchstart', (event:any) => {
            console.log('Вы приложили палец к элементу')
            console.log(event.touches[0].clientY)
            startY = event.touches[0].clientY
            startX = event.touches[0].clientX
        });
        window.addEventListener('touchend', touchEnd);
        return ()=>{
            window.removeEventListener('touchend',touchEnd)
        };
    },[])



    useEffect(()=>{
        // -------------------------------------
        changeSlide(0)
        // -------------------------------------
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
    

    function visibleOff():void{
        dispatch(visibleProject(false));dispatch(visibleSkills(false));dispatch(visibleContacts(false))
        setBtnAbout(false);setBtnProject(false);setBtnContact(false);setBtnSkils(false);
    }

    function changeSlide(num:number){
        switch(num){
            case(0): 
                count = 0
                visibleOff()
                setBtnAbout(true);
                break;
            case(1): 
                count = 1
                visibleOff()
                dispatch(visibleProject(true))
                setBtnProject(true)
                break;
            case(2): 
                count = 2
                visibleOff()
                dispatch(visibleProject(true))
                dispatch(visibleSkills(true))
                dispatch(visibleContacts(false))
                setBtnContact(true)
                break;
            case(3): 
                count = 3
                visibleOff()
                dispatch(visibleProject(true))
                dispatch(visibleSkills(true))
                dispatch(visibleContacts(true))
                setBtnSkils(true);
                break;
        }
    }


    const dispatch = useAppDispatch()
    const theme = useTheme()
    





    function switchMode(){
        // theme.switchTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
        theme.switchTheme(theme.theme = Theme.DARK)
    }

    // const duration = 300;



    return (
        <div id='topLine' className={s.top_menu}>
        <button onClick={()=>{changeSlide(0)}}   id='logo' className={classNames(s.btn,s.logo)}>Bes <GenerateSvg id='devil'/></button>
    
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


