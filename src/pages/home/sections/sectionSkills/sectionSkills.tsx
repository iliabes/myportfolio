
import s from './sectionSkills.module.sass'
import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';

import Title from '../../../../global/Title/Title';


import SkillCss from './skillCss/skillCss';
import SkillHtml from './skillHtml/skillHtml';
import SkillBuild from './skillBuild/skillBuild';
import SkillJs from './skillJs/skillJs'

import { defaultStyleSection, transitionY } from '../../../../aniamate/animate';


const SectionSckills = () => {
    let [visible , setVisible] = useState(false)


    function test(){
        setVisible(!visible)
    }


    return(
        <Transition in={visible} timeout={1000}>
            {state => (
            <>
                <button onClick={()=>{test()}}>211231</button>
                <section  style={{...defaultStyleSection,...transitionY[state]}} className={s.scils}>
                    <Title visible={visible} title='Skills'/>
                    <SkillHtml visible={visible}/>
                    <SkillCss visible={visible}/>
                    <SkillJs visible={visible}/>
                    <SkillBuild visible={visible}/>
                </section>
            </>
            )}
        </Transition>
    )
}

export default  SectionSckills