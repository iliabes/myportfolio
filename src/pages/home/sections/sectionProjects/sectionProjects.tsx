
import s from './sectionProjects.module.sass'

import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';

import { useEffect, useState } from 'react';
import Typed from 'react-typed';

import Propject from './projetc/project';
import Title from '../../../../global/Title/Title';

import { useAppSelector } from '../../../../hooks/store';

import img1 from '../../../../assets/img/weather.webp'
import img2 from '../../../../assets/img/book3.webp'
import img3 from '../../../../assets/img/cards.webp'


import { defaultStyleSection, transitionY } from '../../../../animate/animate';


const SectionProjects = () => {
    let sectionState = useAppSelector(state => (state.counterSlice.visProj))
    let [visible , setVisible] = useState(useAppSelector(state => (state.counterSlice.visProj)))
    useEffect(()=>{
        if (sectionState != visible){
            setVisible(sectionState)
        }
    })
    
    // let [visible , setVisible] = useState(true)
    function test(){
        setVisible(!visible)
    }
    

    

    return(
        <Transition in={visible} timeout={1000}>
            
            {state => (
                <>
                {/* <button onClick={()=>{test()}}>211231</button> */}
                <section style={{...defaultStyleSection,...transitionY[state]}} className={s.section_projects}>
                    <Title visible={visible} title='Мои проекты'/>
                    <Propject visible={visible} link='https://bejewelled-biscochitos-22bf1c.netlify.app/ ' title='Weather-forecast' left={true}  text=' - прилолжения для прогноза погоды , даныые берутся из открытыз api' image={img1} />
                    <Propject visible={visible}  link='https://choosebooks.herokuapp.com/' title='Choose book' left={false}  text=' - прилолжения для выбора книг основанное на гайде Sfsignal' image={img2} />
                    <Propject visible={visible} link='https://zippy-naiad-c0d8ef.netlify.app/' title='Memory card' left={true}  text=' - карточная мини игра для развития памяти' image={img3} />
                </section>
                </>
            )}
        </Transition>
    )
}













export default  SectionProjects
