
import s from '../sectionSkills.module.sass'
import html from '../../../../../assets/img/html5.png'
import bootstrap from '../../../../../assets/img/bootstrap.png'
import jade from '../../../../../assets/img/jade.png'
import materialize from '../../../../../assets/img/materialize.png'


import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';

import { defaultStyleField, trasitonX } from '../../../../../aniamate/animate';





const SkillHtml = (props:any) => {
    return(
        <Transition in={props.visible} timeout={1000}>
        {state => (
        <div style={{...defaultStyleField,...{'transition-delay': '1s'},...trasitonX[state]}} className={s.set_skil}>
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
        )}
        </Transition>
    )
}

export default  SkillHtml