import s from './Footer.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'


function Footer() {
    return (
      <footer className={s.footer}>
        <div className="div"> <GenerateSvg id='burger'/></div>
        <div className="div"> <GenerateSvg id='devil'/></div>
        <div className="div"> <GenerateSvg id='vk'/></div>
        <div className="div"> <GenerateSvg id='git'/></div>
        <div className="div"> <GenerateSvg id='telega'/></div>
      </footer>
      )
  }
  
  export default Footer;