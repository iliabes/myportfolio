
import s from '../sectionSkills.module.sass'
import html from '../../../../../assets/img/html5.png'
import bootstrap from '../../../../../assets/img/bootstrap.png'
import jade from '../../../../../assets/img/jade.png'
import materialize from '../../../../../assets/img/materialize.png'
import SkillBar from '../components/skillBar/skillBar'
import SkillBarTitle from '../components/skillBarTitle/skillBarTitle'
import { Transition } from 'react-transition-group';


import { defaultStyleField, trasitonX ,defaultStyleSkillBar} from '../../../../../animate/animate';





const SkillHtml = (props:any) => {
    return(
        <Transition in={props.visible} timeout={1000}>
        {state => (
        <div style={{...defaultStyleField,...{'transitionDelay': '1s'},...trasitonX[state]}} className={s.set_skil}>
                <SkillBarTitle title='HTML'/>
                <p className={s.note}>Кросбаузерная валидная, семантическая, адаптивная верстка</p>
                <SkillBar number={30} visible={props.visible}/>
                <div className={s.cont_technologis}>

                    <div style={{...defaultStyleSkillBar,...{'transitionDelay': '2.6s'},...trasitonX[state]}} className={s.cont_techno}>
                        <img className={s.technologi} src={html} alt="" />
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transitionDelay': '2.8s'},...trasitonX[state]}}   className={s.cont_techno}>
                        <img className={s.technologi} src={bootstrap} alt=""/>
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transitionDelay': '3.0s'},...trasitonX[state]}}  className={s.cont_techno}>
                        <img className={s.technologi} src={jade} alt=""/>
                    </div>

                    <div  style={{...defaultStyleSkillBar,...{'transitionDelay': '3.2s'},...trasitonX[state]}}  className={s.cont_techno}>
                        <img className={s.technologi} src={materialize} alt=""/>
                    </div>
                </div>
        </div>
        )}
        </Transition>
    )
}

export default  SkillHtml