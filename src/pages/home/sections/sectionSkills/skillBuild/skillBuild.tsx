
import s from '../sectionSkills.module.sass'
import gulp from '../../../../../assets/img/gulp.png'
import webpack from '../../../../../assets/img/webpack.png'
import grunt from '../../../../../assets/img/grunt.png'



import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';
import { defaultStyleField, trasitonX } from '../../../../../aniamate/animate';




const SkillBuild = (props:any) => {
    return(
        <Transition in={props.visible} timeout={1000}>
            {state => (
            <div style={{...defaultStyleField,...{'transition-delay': '1.6s'},...trasitonX[state]}} className={s.set_skil}>
                    <p className={s.cont_title }><span className={s.title_ckil }>Build</span></p>
                    <div className={s.skill_bar}>
                        <div  className={s.skill_active}></div>
                    </div>

                    <div className={s.cont_technologis}>

                    <div className={s.cont_techno}>
                        <img className={s.technologi} src={gulp} alt="" />
                    </div>

                    <div   className={s.cont_techno}>
                        <img className={s.technologi} src={webpack} alt=""/>
                    </div>

                    <div  className={s.cont_techno}>
                        <img className={s.technologi} src={grunt} alt=""/>
                    </div>

                    </div>
            </div>
        )}
        </Transition>
    )
}

export default  SkillBuild