
import s from './home.module.sass'

import SectionAbout from './sections/sectionAbout/sectionAbout'
import SectionProjects from './sections/sectionProjects/sectionProjects'
import SectionSckills from './sections/sectionSkills/sectionSkills'
import SectionContacts from './sections/sectionContacts/sectionContacts.module'

// import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import {visibleProject} from '../../store/slices/slice'
import { useAppDispatch } from '../../hooks/store'
import { increment } from '../../store/slices/slice'

import React, { useState } from 'react';

const Home = () => {
    const dispatch = useAppDispatch()
  // const {visible} = useCustomSelector((state)=>(state.CurrentWeatherSliceReduser))

  // const dispath = useCustomDispatch()




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




// useState(()=>{
//     window.addEventListener('scroll', function(e) {
//             if(window.pageYOffset >= 100){
//                 console.log('1')
//                 dispatch(visibleProject(true))
//             }else if(window.pageYOffset < 100){
//                 dispatch(visibleProject(false))
//             }
//     });
// })
