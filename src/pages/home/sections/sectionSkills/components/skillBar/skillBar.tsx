
import s from './skillBar.module.sass'

import { Transition } from 'react-transition-group';





const defaultStyleSkillBar = {
    width: '0'
  }








const SkillBar = (props:any) => {

    
    const transitionStyles:any = {
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