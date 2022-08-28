
import s from '../sectionSkills.module.sass'
import javascript from '../../../../../assets/img/javascript.png'
import react2 from '../../../../../assets/img/react2.png'
import angular from '../../../../../assets/img/angular.png'
import jquery from '../../../../../assets/img/jquery.png'


import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';
import { defaultStyleField, trasitonX ,defaultStyleSkillBar } from '../../../../../aniamate/animate';
import SkillBar from '../skillBar/skillBar'



const SkillJs = (props:any) => {
    let [visible , setVisible] = useState(true)
    return(
        <Transition in={props.visible} timeout={1000}>
        {state => (
        <div style={{...defaultStyleField,...{'transition-delay': '1.4s'},...trasitonX[state]}} className={s.set_skil}>
            <p className={s.cont_title }><span className={s.title_ckil }>JS</span></p>
            <SkillBar visible={props.visible} number={89} />

                <div className={s.cont_technologis}>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '2.6s'},...trasitonX[state]}} className={s.cont_techno}>
                        <img className={s.technologi} src={javascript} alt="" />
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '2.8s'},...trasitonX[state]}}  className={s.cont_techno}>
                        <img className={s.technologi} src={react2} alt=""/>
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '3.0s'},...trasitonX[state]}}  className={s.cont_techno}>
                        <img className={s.technologi} src={angular} alt=""/>
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '3.2s'},...trasitonX[state]}}  className={s.cont_techno}>
                        <img className={s.technologi} src={jquery} alt=""/>
                    </div>


                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '3.4s'},...trasitonX[state]}} className={s.cont_techno}>
                        <img className={s.technologi} src={angular} alt=""/>
                    </div>
                </div>
        </div>
        )}
        </Transition>
    )
}

export default  SkillJs