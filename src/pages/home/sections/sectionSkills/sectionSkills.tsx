
import s from './sectionSkills.module.sass'
import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';

import Title from '../../../../global/Title/Title';


import SkillCss from './skillCss/skillCss';
import SkillHtml from './skillHtml/skillHtml';
import SkillBuild from './skillBuild/skillBuild';
import SkillJs from './skillJs/skillJs'

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




const SectionSckills = () => {



    return(

        <section className={s.scils}>
            <Title title='Skills'/>
            <SkillHtml/>
            <SkillCss/>
            <SkillJs/>
            <SkillBuild/>
        </section>
    )
}

export default  SectionSckills