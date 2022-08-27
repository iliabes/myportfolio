import s from './Footer.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import { Transition } from 'react-transition-group';
import {BsGithub} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'
import { defaultStyleFooter, transitionY } from '../../aniamate/animate';





function Footer(props:any) {
    return (
      <Transition  in={props.visible} timeout={1000}>
        {state => (
      <footer style={{...defaultStyleFooter,...{'transition-delay': '2.2s'},...transitionY[state]}} className={s.footer}>
       <a  id='buttonUp' className={s.buttonUp} href="#"></a>
        <div className={s.cont_icon}>
            <div className={s.footer_icon}> <GenerateSvg id='vk'/></div>
            <div className={s.footer_icon}> <BsGithub/></div>
            <div className={s.footer_icon}> <FaTelegram/></div>
        </div>
      </footer>
        )}
        </Transition>
      )
  }
  
  export default Footer;