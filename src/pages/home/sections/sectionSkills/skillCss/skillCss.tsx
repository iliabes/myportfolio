
import s from '../sectionSkills.module.sass'
import css from '../../../../../assets/img/css3.png'
import bootstrap from '../../../../../assets/img/bootstrap.png'
import sass from '../../../../../assets/img/sass.png'
import materialize from '../../../../../assets/img/materialize.png'


import { Transition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import { defaultStyleField, trasitonX ,defaultStyleSkillBar} from '../../../../../animate/animate';
import SkillBarTitle from '../components/skillBarTitle/skillBarTitle'
import SkillBar from '../components/skillBar/skillBar'


const SkillCss = (props:any) => {
    let [visible, setVisible] = useState(true)
    return(
        <Transition in={props.visible} timeout={1000}>
        {state => (
        <div style={{...defaultStyleField,...{'transition-delay': '1.2s'},...trasitonX[state]}} className={s.set_skil}>
            <SkillBarTitle title="CSS"/>
                <SkillBar visible={props.visible} number={70}/>
                <div style={{...defaultStyleSkillBar,...{'transition-delay': '2.6s'},...trasitonX[state]}} className={s.cont_technologis}>
                    <div className={s.cont_techno}>
                        <img className={s.technologi} src={css} alt="" />
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '2.8s'},...trasitonX[state]}}  className={s.cont_techno}>
                        <img className={s.technologi} src={bootstrap} alt=""/>
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '3s'},...trasitonX[state]}} className={s.cont_techno}>
                        <img className={s.technologi} src={sass} alt=""/>
                    </div>

                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '3.2s'},...trasitonX[state]}}  className={s.cont_techno}>
                        <img className={s.technologi} src={materialize} alt=""/>
                    </div>


                    <div style={{...defaultStyleSkillBar,...{'transition-delay': '3.4s'},...trasitonX[state]}} className={s.cont_techno}>
                        <img className={s.technologi} src={sass} alt=""/>
                    </div>
                </div>
        </div>
        )}
        </Transition>
    )
}

export default  SkillCss