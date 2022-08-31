
import s from '../sectionSkills.module.sass'
import gulp from '../../../../../assets/img/gulp.png'
import webpack from '../../../../../assets/img/webpack.png'
import grunt from '../../../../../assets/img/grunt.png'



import { Transition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import { defaultStyleField, trasitonX, defaultStyleSkillBar } from '../../../../../animate/animate';

import SkillBar from '../components/skillBar/skillBar';
import SkillBarTitle from '../components/skillBarTitle/skillBarTitle';


const SkillBuild = (props:any) => {
    let [visible, setVisible] = useState(true)
    return(
        <Transition in={props.visible} timeout={1000}>
            {state => (
            <div style={{...defaultStyleField,...{'transition-delay': '1.6s'},...trasitonX[state]}} className={s.set_skil}>
                    <SkillBarTitle title="BUILD"/>
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