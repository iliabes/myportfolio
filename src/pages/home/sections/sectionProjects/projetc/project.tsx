
import s from './project.module.sass'
import img3 from '../../../../../assets/img/3.png'

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




const Propject1 = () => {



    return(
        <div   className={s.pojects_cont_right}>
        <div data-order="0" data-anim="proj-img-right" className={s.cont_img}>
            <div className="hoverCurtain">
            <img   className={s.img_portfolio} src={img3} alt=""/>
            <div className="curtain curtain-left"></div>
            <div className="curtain curtain-right"></div>
                <figcaption>
                    <h2>Lynn  <span> Reyes</span></h2>
            </figcaption>
            </div>
            

        </div>

        <div data-order="3" data-anim="proj-sign-right" className="cont-sign">
        <p className="sign-project"><span className="gold"> Drop todo </span> - прилолжения для планирования bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
        <div className="cont-techologi">
          <div className="techologi"><p className="text-techo">React</p></div>
          <div className="techologi"><p className="text-techo">NodeJS</p></div>
          <div className="techologi"><p className="text-techo">Bootstrap </p></div>
          <div className="techologi"><p className="text-techo">React</p></div>
          <div className="techologi"><p className="text-techo">Css</p></div>
        </div>  
      </div>
      </div>
    )
}

export default  Propject1