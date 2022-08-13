
import s from './sectionProjects.module.sass'

import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';

import { useEffect, useState } from 'react';
import Typed from 'react-typed';

import Propject from './projetc/project';



import img1 from '../../../../assets/img/1.jpg'
import img2 from '../../../../assets/img/2.jpg'
import img3 from '../../../../assets/img/3.png'


const duration = 2000;
const defaultStyle = {
    transition: `${duration}ms ease-in-out`,
    transform: 'translateX(-1000px)'
}

const transitionStyles = {
    entering: {transform: 'translateX(0)'},
    entered:  {transform: 'translateX(0)'},
    // exiting:  {transform: 'translateX(-500px)'},
    // exited:  {transform: 'translateX(-1000px)'},
};




const SectionProjects = () => {
    let {visible , isVisible} = useState(false)


    return(
        <section className={s.section_projects}>
            <h1 data-lang="Мои проекты"  className={s.heading}><span className={s.brackets}></span>My projects<span className={s.brackets}></span></h1>
            <Propject left={true}  text=' - прилолжения для планирования bla bla bla bla bla bla bla bla' image={img1} title='changeBook'/>
            <Propject left={false}  text=' - прилолжения для планирования bla bla bla bla bla bla bla bla' image={img2} title='changeBook'/>
            <Propject left={true}  text=' - прилолжения для планирования bla bla bla bla bla bla bla bla' image={img3} title='changeBook'/>
        </section>
    )
}













export default  SectionProjects
