import { useState } from 'react';
import s from './Button.module.sass'
import classNames from 'classnames'




function Button(props:any) {
    let [active, setActive] = useState(false)
    return (
        <button onClick={()=>{}} id='topAbout' className={active? classNames(s.btn,s.active) : s.btn}>{props.name} </button>
      )
  }
  
  export default Button;