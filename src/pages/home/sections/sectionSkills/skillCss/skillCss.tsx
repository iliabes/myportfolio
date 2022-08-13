
import s from '../sectionSkills.module.sass'
import css from '../../../../../assets/img/css3.png'
import bootstrap from '../../../../../assets/img/bootstrap.png'
import sass from '../../../../../assets/img/sass.png'
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




const SkillCss = () => {
    return(
        <div className={s.set_skil}>
            <span className={s.cont_title}>
                <p className={s.title_ckil}>Css</p>
            </span>
            <div className={s.skill_bar}>
                <div  className={s.skill_active}></div>
            </div>
                <div className={s.cont_technologis}>
                    <div className={s.cont_techno}>
                <img className={s.technologi} src={css} alt="" />
                </div>

                <div   className={s.cont_techno}>
                    <img className={s.technologi} src={bootstrap} alt=""/>
                </div>

                <div  className={s.cont_techno}>
                    <img className={s.technologi} src={sass} alt=""/>
                </div>

                <div   className={s.cont_techno}>
                    <img className={s.technologi} src={materialize} alt=""/>
                </div>


                <div className={s.cont_techno}>
                    <img className={s.technologi} src={sass} alt=""/>
                </div>
                </div>
        </div>
    )
}

export default  SkillCss