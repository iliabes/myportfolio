
import s from './sectionProjects.module.sass'

import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';

import { useEffect, useState } from 'react';
import Typed from 'react-typed';

import Propject from './projetc/project';
import Title from '../../../../global/Title/Title';

import { useAppSelector } from '../../../../hooks/store';

import img1 from '../../../../assets/img/1.jpg'
import img2 from '../../../../assets/img/2.jpg'
import img3 from '../../../../assets/img/3.png'


const duration = 2000;
const defaultStyle = {
    transition: `${duration}ms ease-in-out`,
    transform: 'translateX(0)',
    
}

const transitionStyles = {
    entering: {transform: 'translateY(-1225px)'},
    entered:  {transform: 'translateY(-1225px)'},
    // exiting:  {transform: 'translateX(-500px)'},
    // exited:  {transform: 'translateX(-1000px)'},
};




const SectionProjects = () => {
    // let [visible , isVisible] = useState(true)
    let visible = useAppSelector(state => (state.counterSlice.projectsVisivle))
    console.log(visible);
    

    return(
        <Transition in={visible} timeout={duration}>
            {state => (
                <section style={{...defaultStyle,...transitionStyles[state]}} className={s.section_projects}>
                    <Title title='Мои проекты'/>
                    <Propject left={true}  text=' - прилолжения для планирования bla bla bla bla bla bla bla bla' image={img1} title='changeBook'/>
                    <Propject left={false}  text=' - прилолжения для планирования bla bla bla bla bla bla bla bla' image={img2} title='changeBook'/>
                    <Propject left={true}  text=' - прилолжения для планирования bla bla bla bla bla bla bla bla' image={img3} title='changeBook'/>
                </section>
            )}
        </Transition>
    )
}













export default  SectionProjects
