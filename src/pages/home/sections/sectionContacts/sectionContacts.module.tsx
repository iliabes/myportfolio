
import s from './sectionContacts.module.sass'
import { Transition } from 'react-transition-group';
import { useState } from 'react';
import classNames from 'classnames';
import Title from '../../../../global/Title/Title'
import Footer from '../../../../global/Footer/Footer'



const defaultStyleSection = {
    transition: `${1000}ms ease-in-out`,
    transform: 'translateY(1000px)'
}

const defaultStyleField = {
    'transition-timing-function': `ease-in-out`,
    'transition-duration':'1200ms',
    transform: 'translateX(2500px)',
    
}

const transitionLeft = {
    entering: { transform: 'translateX(0)' },
    entered:  { transform: 'translateX(0)' },
  };

const transitionUp = {
  entering: { transform: 'translateY(0)' },
  entered:  { transform: 'translateY(0)' },
};




const SectionContacts = () => {
let [visible , setVisible] = useState(false)

function test(){
    setVisible(!visible)
}

    return(
        <Transition in={visible} timeout={10000}>
            
            {state => (
                <>
                <button onClick={()=>{test()}}>+++</button>
                <section style={{...defaultStyleSection,...transitionUp[state]}}  className={s.contacts}>
                    <div  className={s.cont}>
           
                     <Title visible={visible}  title='Contacts'/>
                    
                    <Transition in={visible} timeout={1000}>
                        <p style={{...defaultStyleField,...{'transition-delay': '1s'},...transitionLeft[state]}} className={s.quet}>Have a question or want to work together?</p>
                    </Transition>
                    <Transition in={visible} timeout={1000}>
                        {state => (
                        <div style={{...defaultStyleField,...{'transition-delay': '1.2s'},...transitionLeft[state]}}   className={s.cont_input}>
                            <input placeholder="Your name"  className={s.text_inp} type="text"/>
                        </div>
                        )}
                    </Transition>

                    <Transition in={visible} timeout={1000}>
                        <div style={{...defaultStyleField,...{'transition-delay': '1.4s'},...transitionLeft[state]}}   className={s.cont_input}>
                            <input placeholder="Your emeil"  className={s.text_inp} type="text"/>
                        </div>
                    </Transition>
                    
                    <Transition in={visible} timeout={1000}>
                        <div style={{...defaultStyleField,...{'transition-delay': '1.6s'},...transitionLeft[state]}}  className={s.cont_input}>
                            <input placeholder="Your message"  className={classNames(s.text_inp ,  s.area)} type="text"/>
                        </div>
                    </Transition>
                    <Transition in={visible} timeout={1000}>
                        <div style={{...defaultStyleField,...{'transition-delay': '1.8s'},...transitionLeft[state]}}   className={s.cont_input}>
                            <button className={s.submit}>Submit</button>
                        </div>
                    </Transition>
                </div>
                <Footer visible={visible}/>

            </section>
        </>
    )}
        </Transition>

        
    )
}






export default  SectionContacts
