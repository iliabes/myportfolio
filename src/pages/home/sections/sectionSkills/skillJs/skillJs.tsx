
import s from '../sectionSkills.module.sass'
import javascript from '../../../../../assets/img/javascript.png'
import react2 from '../../../../../assets/img/react2.png'
import angular from '../../../../../assets/img/angular.png'
import jquery from '../../../../../assets/img/jquery.png'


import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';
import { defaultStyleField, trasitonX } from '../../../../../aniamate/animate';




const SkillJs = (props:any) => {
    return(
        <Transition in={props.visible} timeout={1000}>
        {state => (
        <div style={{...defaultStyleField,...{'transition-delay': '1.4s'},...trasitonX[state]}} className={s.set_skil}>
            <p className={s.cont_title }><span className={s.title_ckil }>JS</span></p>
            <div className={s.skill_bar}>
                <div  className={s.skill_active}></div>
            </div>

                <div className={s.cont_technologis}>

                    <div className={s.cont_techno}>
                        <img className={s.technologi} src={javascript} alt="" />
                    </div>

                    <div   className={s.cont_techno}>
                        <img className={s.technologi} src={react2} alt=""/>
                    </div>

                    <div  className={s.cont_techno}>
                        <img className={s.technologi} src={angular} alt=""/>
                    </div>

                    <div   className={s.cont_techno}>
                        <img className={s.technologi} src={jquery} alt=""/>
                    </div>


                    <div className={s.cont_techno}>
                        <img className={s.technologi} src={angular} alt=""/>
                    </div>
                </div>
        </div>
        )}
        </Transition>
    )
}

export default  SkillJs