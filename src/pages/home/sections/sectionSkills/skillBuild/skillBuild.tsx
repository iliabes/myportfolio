
import s from '../sectionSkills.module.sass'
import gulp from '../../../../../assets/img/gulp.png'
import webpack from '../../../../../assets/img/webpack.png'
import grunt from '../../../../../assets/img/grunt.png'



import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';
import { defaultStyleField, trasitonX, defaultStyleSkillBar } from '../../../../../aniamate/animate';

import SkillBar from '../skillBar/skillBar';


const SkillBuild = (props:any) => {
    let [visible, setVisible] = useState(true)
    return(
        <Transition in={props.visible} timeout={1000}>
            {state => (
            <div style={{...defaultStyleField,...{'transition-delay': '1.6s'},...trasitonX[state]}} className={s.set_skil}>
                    <p className={s.cont_title }><span className={s.title_ckil }>Build</span></p>
                    <SkillBar visible={props.visible} number={67}/>
                    <div  className={s.cont_technologis}>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '2.6s'},...trasitonX[state]}} className={s.cont_techno}>
                        <img className={s.technologi} src={gulp} alt="" />
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '2.8s'},...trasitonX[state]}}  className={s.cont_techno}>
                        <img className={s.technologi} src={webpack} alt=""/>
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '3.0s'},...trasitonX[state]}}  className={s.cont_techno}>
                        <img className={s.technologi} src={grunt} alt=""/>
                    </div>

                    </div>
            </div>
        )}
        </Transition>
    )
}

export default  SkillBuild