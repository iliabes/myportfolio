
import s from '../sectionSkills.module.sass'
import gulp from '../../../../../assets/img/gulp.png'
import webpack from '../../../../../assets/img/webpack.png'
import grunt from '../../../../../assets/img/grunt.png'



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




const SkillBuild = () => {
    return(
        <div className={s.set_skil}>
                
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
    )
}

export default  SkillBuild