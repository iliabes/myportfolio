
import s from './project.module.sass'
import classNames from 'classnames';
import img1 from '../../../../assets/img/1.png'
import { Transition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import {defaultStyleFieldRight,defaultStyleField, trasitonX} from '../../../../../animate/animate'








const Propject = (props:any) => {
    let defStyleImg = defaultStyleFieldRight
    let defStyleSign = defaultStyleField
    if(props.left){
        defStyleImg = defaultStyleField
        defStyleSign = defaultStyleFieldRight
    }


    return(
        <Transition  in={props.visible} timeout={100}>
        {state => (
            
        <div   className={props.left ? classNames(s.projects_cont) : classNames(s.projects_cont, s.left)}>
        <div style={{...defStyleImg,...{'transitionDelay': '1.6s'},...trasitonX[state]}} className={s.cont_img}>
            <div className={s.hoverCurtain}>
            <a href={props.link}>
                <img className={s.img_portfolio} src={props.image} alt=""/>
            </a>
            <div className={classNames(s.curtain, s.curtain_left)}>

            </div>
            <div className={classNames(s.curtain, s.curtain_right)}></div>
                    <figcaption className={s.fig}>
                    <h2>{props.title}</h2>
                    </figcaption>
            </div>


        </div>

        <div style={{...defStyleSign,...{'transitionDelay': '1.6s'},...trasitonX[state]}} className={s.cont_sign}>
            <p className={s.sign_project}><span className={s.gold}>{props.title}</span>{props.text}</p>
            <div className={s.cont_techologi}>
                <div className={s.techologi}><p className={s.text_techo}>React</p></div>
                <div className={s.techologi}><p className={s.text_techo}>Redux</p></div>
                <div className={s.techologi}><p className={s.text_techo}>Typescript</p></div>
                <div className={s.techologi}><p className={s.text_techo}>ReduxTooolkit</p></div>
                <div className={s.techologi}><p className={s.text_techo}>Sass</p></div>
            </div>  
        </div>
        </div>
        )}
        </Transition>
    )
}

export default  Propject
