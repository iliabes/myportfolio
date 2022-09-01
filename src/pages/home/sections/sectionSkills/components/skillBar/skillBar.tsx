
import s from './skillBar.module.sass'

import { Transition } from 'react-transition-group';

import { useState } from 'react';
import Typed from 'react-typed';
import Title from '../../../../../../global/Title/Title'

interface IskillBar {
    number: number
    visible: boolean
}

let number = 89;

const defaultStyleSkillBar = {

    width: '0'
  }








const SkillBar = (props:any) => {

    
    let [visible , setVisible] = useState(false)
    const transitionStyles = {
        // entering: { width:'97%' },
        entered:  { width:`${props.number}%` },
    
      };


    return(
        <Transition  in={props.visible} timeout={100}>
        {state => (
            <>
            <div  className={s.skill_bar}>
                <div style={{...defaultStyleSkillBar,...transitionStyles[state]}} className={s.skill_active}></div>
            </div>
            </>
        )}
        </Transition>
    )
}

export default  SkillBar