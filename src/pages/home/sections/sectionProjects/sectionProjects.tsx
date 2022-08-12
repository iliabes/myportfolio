
import s from './sectionProjects.module.sass'

import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';

import { useEffect, useState } from 'react';
import Typed from 'react-typed';

import Propject1 from './projetc/project';


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



    return(

        <section className={s.section_projects}>
           <h1 data-lang="Мои проекты"  className={s.heading}><span className={s.brackets}></span>My projects<span className={s.brackets}></span></h1>
           <Propject1/>
        </section>
    )
}

export default  SectionProjects