import s from './Footer.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import { Transition } from 'react-transition-group';
import { defaultStyleFooter, transitionY } from '../../animate/animate';

import {BsGithub} from 'react-icons/bs'
import { FaTelegramPlane } from "react-icons/fa";




function Footer(props:any) {
    return (
      <Transition  in={props.visible} timeout={1000}>
        {state => (
      <footer style={{...defaultStyleFooter,...{'transitionDelay': '2.2s'},...transitionY[state]}} className={s.footer}>
        <div className={s.cont_icon}>
          <a className={s.footer_icon} href=""><GenerateSvg id='#'/> </a>
          <a className={s.footer_icon} href="https://github.com/IliaBes"><BsGithub/> </a>
          <a className={s.footer_icon} href="https://t.me/@warpBes"> <FaTelegramPlane/> </a>
        </div>
      </footer>
        )}
        </Transition>
      )
  }
  
  export default Footer;