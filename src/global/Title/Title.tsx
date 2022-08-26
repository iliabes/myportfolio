import s from './Title.module.sass'
import GenerateSvg from '../GenerateSvg/GenerateSvg'
import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle2 = {
    'transition-timing-function': `ease-in-out`,
    'transition-duration':'1200ms',
    transform: 'translateX(2500px)',
    
}

const transitionLeft = {
  entering: { transform: 'translateX(0)' },
  entered:  { transform: 'translateX(0)' },
};

function Title(props:any) {
    return (
      <Transition  in={props.visible} timeout={10000}>
        {state => (
          <h1  style={{...defaultStyle2,...{'transition-delay': '.8s'},...transitionLeft[state]}} className={s.heading}><span className={s.brackets}>{'<'}</span>{props.title}<span className={s.brackets}>{'>'}</span></h1>
        )}
          </Transition>
      )
  }
  
  export default Title;