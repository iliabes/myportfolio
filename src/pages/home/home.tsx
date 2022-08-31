
import s from './home.module.sass'

import SectionAbout from './sections/sectionAbout/sectionAbout'
import SectionProjects from './sections/sectionProjects/sectionProjects'
import SectionSckills from './sections/sectionSkills/sectionSkills'
import SectionContacts from './sections/sectionContacts/sectionContacts.module'

// import { useCustomDispatch, useCustomSelector } from '../../hooks/store';

import { useAppDispatch } from '../../hooks/store'
import { visibleContacts,visibleProject,visibleSkills} from '../../store/slices/slice'

import React, { useEffect, useState , useRef} from 'react';

const Home = () => {
    console.log('home')
    // let [count,setCount] = useState(0);
    let count = 0
    const dispatch = useAppDispatch()

    useEffect(()=>{

    },[])
  // const {visible} = useCustomSelector((state)=>(state.CurrentWeatherSliceReduser))
//   const dispath = useCustomDispatch()



useEffect(()=>{
    window.addEventListener('keydown', function(e) {
        e.stopPropagation();
        if(e.key === 'ArrowRight'){
            count++
            console.log(count)
        }else if(e.key === 'ArrowLeft'){
            count--
            console.log(count)
        }
    })
},[])

useEffect(()=>{

    window.addEventListener('wheel', function(e) {
                console.log(e)
            if( window.pageYOffset <= 150){ 
                    
                dispatch(visibleProject(false))
                dispatch(visibleSkills(false))
                dispatch(visibleContacts(false))
                
            } 
            if(window.pageYOffset >= 100 && window.pageYOffset <= 150){ 
                
                dispatch(visibleProject(true))
                dispatch(visibleSkills(false))
                dispatch(visibleContacts(false))
                
            } if(window.pageYOffset >= 150 && window.pageYOffset <= 200){
                dispatch(visibleProject(true))
                dispatch(visibleSkills(true))
                dispatch(visibleContacts(false))
            }
            if(window.pageYOffset >= 200 && window.pageYOffset <= 250){
                dispatch(visibleProject(true))
                dispatch(visibleSkills(true))
                dispatch(visibleContacts(true))
            }
 
    });
},[])

    function bla(){
        dispatch(visibleProject(true))
        
        console.log('bla')
    }


    return(
        <div className={s.home}>
            
            <SectionAbout/>

            <SectionProjects/>   
            <SectionSckills/>  
            <SectionContacts/>   
        </div>
    )
}

export default  Home





