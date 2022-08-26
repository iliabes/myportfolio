import s from './Footer.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import { Transition } from 'react-transition-group';
import {BsGithub} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'



const duration = 1000;

const defaultStyle2 = {
    'transition-timing-function': `ease-in-out`,
    'transition-duration':'1200ms',
    transform: 'translateY(300px)',
    
}

const transitionUp = {
  entering: { transform: 'translateY(0)' },
  entered:  { transform: 'translateY(0)' },
};



function Footer(props:any) {
    return (
      <Transition  in={props.visible} timeout={1000}>
        {state => (
      <footer style={{...defaultStyle2,...{'transition-delay': '2.2s'},...transitionUp[state]}} className={s.footer}>
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