
import s from '../sectionSkills.module.sass'
import gulp from '../../../../../assets/img/gulp.png'
import webpack from '../../../../../assets/img/webpack.png'
import grunt from '../../../../../assets/img/grunt.png'
import vim from '../../../../../assets/img/vim.png'
import bash from '../../../../../assets/img/bash.png'

import { Transition } from 'react-transition-group';

import { defaultStyleField, trasitonX, defaultStyleSkillBar } from '../../../../../animate/animate';

import SkillBar from '../components/skillBar/skillBar';
import SkillBarTitle from '../components/skillBarTitle/skillBarTitle';


const SkillBuild = (props:any) => {

    return(
        <Transition in={props.visible} timeout={1000}>
            {state => (
            <div style={{...defaultStyleField,...{'transitionDelay': '1.6s'},...trasitonX[state]}} className={s.set_skil}>
                    <SkillBarTitle title="BUILD"/>
                    <SkillBar visible={props.visible} number={67}/>
                    <div  className={s.cont_technologis}>
                        <div style={{...defaultStyleSkillBar,...{'transitionDelay': '2.6s'},...trasitonX[state]}} className={s.cont_techno}>
                            <img className={s.technologi} src={gulp} alt="" />
                        </div>

                        <div style={{...defaultStyleSkillBar,...{'transitionDelay': '2.8s'},...trasitonX[state]}}  className={s.cont_techno}>
                            <img className={s.technologi} src={webpack} alt=""/>
                        </div>

                        <div style={{...defaultStyleSkillBar,...{'transitionDelay': '3.0s'},...trasitonX[state]}}  className={s.cont_techno}>
                            <img className={s.technologi} src={grunt} alt=""/>
                        </div>

                        <div style={{...defaultStyleSkillBar,...{'transitionDelay': '3.0s'},...trasitonX[state]}}  className={s.cont_techno}>
                            <img className={s.technologi} src={vim} alt=""/>
                        </div>


                        <div style={{...defaultStyleSkillBar,...{'transitionDelay': '3.0s'},...trasitonX[state]}}  className={s.cont_techno}>
                            <img className={s.technologi} src={bash} alt=""/>
                        </div>
                    </div>
            </div>
        )}
        </Transition>
    )
}

export default  SkillBuild