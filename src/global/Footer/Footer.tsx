import s from './Footer.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'


function Footer() {
    return (
      <footer className={s.footer}>
       <a  id='buttonUp' className={s.buttonUp} href="#"></a>
        <div className={s.cont_icon}>
            <div className={s.footer_icon}> <GenerateSvg id='vk'/></div>
            <div className={s.footer_icon}> <GenerateSvg id='git'/></div>
            <div className={s.footer_icon}> <GenerateSvg id='telega'/></div>
        </div>
      </footer>
      )
  }
  
  export default Footer;