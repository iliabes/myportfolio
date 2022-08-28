
import s from '../sectionSkills.module.sass'
import css from '../../../../../assets/img/css3.png'
import bootstrap from '../../../../../assets/img/bootstrap.png'
import sass from '../../../../../assets/img/sass.png'
import materialize from '../../../../../assets/img/materialize.png'
import SkillBar from '../skillBar/skillBar'

import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';

import { defaultStyleField, trasitonX } from '../../../../../aniamate/animate';

const SkillCss = (props:any) => {
    let [visible, setVisible] = useState(true)
    return(
        <Transition in={props.visible} timeout={1000}>
        {state => (
        <div style={{...defaultStyleField,...{'transition-delay': '1.2s'},...trasitonX[state]}} className={s.set_skil}>
            <p className={s.cont_title }><span className={s.title_ckil }>CSS</span></p>
                <SkillBar visible={props.visible} number={70}/>
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
        )}
        </Transition>
    )
}

export default  SkillCss