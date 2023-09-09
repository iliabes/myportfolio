    
import s from './sectionSkills.module.sass'
import { Transition } from 'react-transition-group';
import { useEffect, useState } from 'react';


import Title from '../../../../global/Title/Title';


import SkillCss from './skillCss/skillCss';
import SkillHtml from './skillHtml/skillHtml';
import SkillBuild from './skillBuild/skillBuild';
import SkillJs from './skillJs/skillJs'

import { defaultStyleSection, transitionY } from '../../../../animate/animate';
import { useAppSelector } from '../../../../hooks/store';








const SectionSckills = () => {
    let sectionState = useAppSelector(state => (state.counterSlice.visSkills))
    let [visible , setVisible] = useState(useAppSelector(state => (state.counterSlice.visSkills)))

    useEffect(()=>{
        if (sectionState != visible){
            setVisible(sectionState)
        }
    })



    return(
        <Transition in={visible} timeout={1000}>
            {state => (
            <>
                {/* <button onClick={()=>{test()}}>211231</button> */}

                <section  style={{...defaultStyleSection,...transitionY[state]}} className={s.scils}>
                    <SkillJs visible={visible}/>
                    <SkillHtml visible={visible}/>
                    <SkillCss visible={visible}/>
                    <SkillBuild visible={visible}/>
                </section>
            </>
            )}
        </Transition>
    )
}

export default  SectionSckills

 // <Title visible={visible} title='Skills'/>