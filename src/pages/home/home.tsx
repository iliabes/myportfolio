
import s from './home.module.sass'

import SectionAbout from './sections/sectionAbout/sectionAbout'
import SectionProjects from './sections/sectionProjects/sectionProjects'
import SectionSckills from './sections/sectionSkills/sectionSkills'
import SectionContacts from './sections/sectionContacts/sectionContacts.module'

// import { useCustomDispatch, useCustomSelector } from '../../hooks/store';

import React, { useState } from 'react';

const Home = () => {

  // const {visible} = useCustomSelector((state)=>(state.CurrentWeatherSliceReduser))

  // const dispath = useCustomDispatch()



    useState(()=>{

        window.addEventListener('scroll', function(e) {
            // console.log(window.pageYOffset)
                if(window.pageYOffset >= 250){
                    console.log('1')
                    // dispath(counterSlice(true))
                }if(window.pageYOffset >= 350){
                    // dispath(counterSlice(false))
                }
        });
 
    })


    return(
        <div className={s.home}>
            {/*<SectionAbout/>*/}
            <SectionProjects/>
            <SectionSckills/>
            <SectionContacts/>
        </div>
    )
}

export default  Home