
import s from './home.module.sass'

import SectionAbout from './sections/sectionAbout/sectionAbout'
import SectionProjects from './sections/sectionProjects/sectionProjects'
import SectionSckills from './sections/sectionSkills/sectionSkills'
import SectionContacts from './sections/sectionContacts/sectionContacts.module'

// import { useCustomDispatch, useCustomSelector } from '../../hooks/store';

import { useAppDispatch } from '../../hooks/store'
import { visibleContacts,visibleProject,visibleSkills} from '../../store/slices/slice'

import React, { useEffect, useState , useRef} from 'react';
import Header from '../../global/Header/Header'


const Home = () => {
    console.log('home')
    // let [count,setCount] = useState(0);
    
    const dispatch = useAppDispatch()

    useEffect(()=>{

    },[])
  // const {visible} = useCustomSelector((state)=>(state.CurrentWeatherSliceReduser))
//   const dispath = useCustomDispatch()







    return(
        <div className={s.home}>
            <Header/>
            <SectionAbout/>
            <SectionProjects/>   
            <SectionSckills/>  
            <SectionContacts/>   
        </div>
    )
}

export default  Home





