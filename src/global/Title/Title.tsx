import s from './Title.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import { Transition } from 'react-transition-group';
import { defaultStyleTitle ,trasitonX} from '../../animate/animate';




function Title(props:any) {
    return (
      <Transition  in={props.visible} timeout={1000}>
        {state => (
          <h1  style={{...defaultStyleTitle,...{'transition-delay': '.8s'},...trasitonX[state]}} className={s.heading}><span className={s.brackets}>{'<'}</span>{props.title}<span className={s.brackets}>{'>'}</span></h1>
        )}
          </Transition>
      )
  }
  
  export default Title;