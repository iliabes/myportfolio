import s from './Title.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'


function Title(props) {
    return (
      <h1  className={s.heading}><span className={s.brackets}>{'<'}</span>{props.title}<span className={s.brackets}>{'>'}</span></h1>
      )
  }
  
  export default Title;