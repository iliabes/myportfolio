
import s from './project.module.sass'

import classNames from 'classnames';

import img1 from '../../../../assets/img/1.png'
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




const Propject = (props:any) => {



    return(
        <div   className={props.left ? classNames(s.projects_cont) : classNames(s.projects_cont, s.left)}>
        <div className={s.cont_img}>
            <div className={s.hoverCurtain}>
            <img   className={s.img_portfolio} src={props.image} alt=""/>
            <div className={classNames(s.curtain, s.curtain_left)}></div>
            <div className={classNames(s.curtain, s.curtain_right)}></div>
                <figcaption>
                    <h2><span>{props.title}</span></h2>
            </figcaption>
            </div>
            

        </div>

        <div  className={s.cont_sign}>
        <p className={s.sign_project}><span className={s.gold}>{props.title}</span>{props.text}</p>
        <div className={s.cont_techologi}>
            <div className={s.techologi}><p className={s.text_techo}>React</p></div>
            <div className={s.techologi}><p className={s.text_techo}>NodeJS</p></div>
            <div className={s.techologi}><p className={s.text_techo}>Bootstrap </p></div>
            <div className={s.techologi}><p className={s.text_techo}>React</p></div>
            <div className={s.techologi}><p className={s.text_techo}>Css</p></div>
        </div>  
        </div>
        </div>
    )
}

export default  Propject
