
import s from '../sectionSkills.module.sass'
import html from '../../../../../assets/img/html5.png'
import bootstrap from '../../../../../assets/img/bootstrap.png'
import jade from '../../../../../assets/img/jade.png'
import materialize from '../../../../../assets/img/materialize.png'


import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';


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




const SkillHtml = () => {
    return(
        <div className={s.set_skil}>
                <p className={s.cont_title }><span className={s.title_ckil }>HTML</span></p>
            <div className={s.skill_bar}>
                <div  className={s.skill_active}></div>
            </div>

                <div className={s.cont_technologis}>

                <div className={s.cont_techno}>
                    <img className={s.technologi} src={html} alt="" />
                </div>

                <div   className={s.cont_techno}>
                    <img className={s.technologi} src={bootstrap} alt=""/>
                </div>

                <div  className={s.cont_techno}>
                    <img className={s.technologi} src={jade} alt=""/>
                </div>

                <div   className={s.cont_techno}>
                    <img className={s.technologi} src={materialize} alt=""/>
                </div>


                <div className={s.cont_techno}>
                    <img className={s.technologi} src={jade} alt=""/>
                </div>
                </div>
        </div>
    )
}

export default  SkillHtml