
import s from './sectionContacts.module.sass'
import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';
import classNames from 'classnames';
import Title from '../../../../global/Title/Title'
import Footer from '../../../../global/Footer/Footer'


const duration = 1000;
const defaultStyle = {
    transition: `${duration}ms ease-in-out`,
    transform: 'translateY(1000px)'
}

const defaultStyle2 = {
    transition: `${3000}ms ease-in-out`,
    transform: 'translateX(1000px)'
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
let [visible , setVisible] = useState(true)

function test(){
    setVisible(!visible)
}

    return(
        <Transition in={visible} timeout={duration}>
            
            {state => (
                <>
                <button onClick={()=>{test()}}>211231</button>
        <section style={{...defaultStyle,...transitionLeft[state]}}  className={s.contacts}>
            <div  className={s.cont}>
                <Title  title='Contacts'/>
                <p  className={s.quet}>Have a question or want to work together?</p>
                <Transition in={visible} timeout={3000}>
                {state => (
                <div style={{...defaultStyle2,...transitionUp[state]}}   className={s.cont_input}>
                    <input placeholder="Your name"  className={s.text_inp} type="text"/>
                </div>
                )}
                </Transition>
                <div   className={s.cont_input}>
                    <input placeholder="Your emeil"  className={s.text_inp} type="text"/>
                </div>

                <div   className={s.cont_input}>
                    <input placeholder="Your message"  className={classNames(s.text_inp ,  s.area)} type="text"/>
                </div>

                <div   className={s.cont_input}>
                    <button className={s.submit}>Submit</button>
                </div>
            </div>
            <Footer/>

        </section>
        </>
    )}
        </Transition>

        
    )
}






export default  SectionContacts
