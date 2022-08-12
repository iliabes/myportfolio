
import s from './sectionContacts.module.sass'
import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import { useEffect, useState } from 'react';
import Typed from 'react-typed';


const duration = 2000;
const defaultStyle = {
    transition: `${duration}ms ease-in-out`,
    transform: 'translateX(-1000px)'
}

const transitionStyles = {
    entering: {transform: 'translateX(0)'},
    entered:  {transform: 'translateX(0)'},
    // exiting:  {transform: 'translateX(-500px)'},
    // exited:  {transform: 'translateX(-1000px)'},
};




const SectionContacts = () => {




    return(

        <section className={s.contacts}>
            <div  className={s.cont}>
                <div  className={s.heading}><span className={s.brackets}></span>Contacts<span className={s.brackets}></span></div>
                 <p  className={s.quet}>Have a question or want to work together?</p>
                <div   className={s.cont_input}>
                    <input placeholder="Your name"  className={s.text_inp} type="text"/>
                </div>

                <div   className={s.cont_input}>
                    <input placeholder="Your emeil"  className={s.text_inp} type="text"/>
                </div>

                <div   className={s.cont_input}>
                    <input placeholder="Your message"  className='text-inp area' type="text"/>
                </div>

                <div   className={s.cont_input}>
                    <button className={s.submit}>Submit</button>
                </div>
            </div>

        </section>


        
    )
}






export default  SectionContacts
