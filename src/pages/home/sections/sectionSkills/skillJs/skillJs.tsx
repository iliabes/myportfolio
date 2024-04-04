
import s from '../sectionSkills.module.sass'
import javascript from '../../../../../assets/img/javascript.png'
import react2 from '../../../../../assets/img/react2.png'
import redux from '../../../../../assets/img/redux.png'
import vue from '../../../../../assets/img/vue.png'
import typescript from '../../../../../assets/img/typescript.png'
import { Transition } from 'react-transition-group';

import { defaultStyleField,trasitonX, defaultStyleSkillBar } from '../../../../../animate/animate';
import SkillBar from '../components/skillBar/skillBar'
import SkillBarTitle from '../components/skillBarTitle/skillBarTitle'



const SkillJs = (props: any) => {

    return (
        <Transition in={props.visible} timeout={700}>
            {function (state: string){


                return(
                <div style={{ ...defaultStyleField, ...{ 'transitionDelay': '1.4s' }, ...trasitonX[state] }} className={s.set_skil}>
                    <SkillBarTitle title="JS" />
                    <p className={s.note}>Уверенное знание js(ES 6),React,Typescript </p>
                    <SkillBar visible={props.visible} number={89} />
                    <div className={s.cont_technologis}>

                        <div style={{ ...defaultStyleSkillBar, ...{ 'transitionDelay': '2.6s' }, ...trasitonX[state] }} className={s.cont_techno}>
                            <img className={s.technologi} src={javascript} alt="" />
                        </div>

                        <div style={{ ...defaultStyleSkillBar, ...{ 'transitionDelay': '2.8s' }, ...trasitonX[state] }} className={s.cont_techno}>
                            <img className={s.technologi} src={typescript} alt="" />
                        </div>

                        <div style={{ ...defaultStyleSkillBar, ...{ 'transitionDelay': '3.0s' }, ...trasitonX[state] }} className={s.cont_techno}>
                            <img className={s.technologi} src={react2} alt="" />
                        </div>

                        <div style={{ ...defaultStyleSkillBar, ...{ 'transitionDelay': '3.2s' }, ...trasitonX[state] }} className={s.cont_techno}>
                            <img className={s.technologi} src={vue} alt="" />
                        </div>

                        <div style={{ ...defaultStyleSkillBar, ...{ 'transitionDelay': '3.4s' }, ...trasitonX[state] }} className={s.cont_techno}>
                            <img className={s.technologi} src={redux} alt="" />
                        </div>




                    </div>
                </div>
                )
            }}
        </Transition>
    )
}

export default SkillJs