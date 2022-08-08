
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

    const [inProp, setInProp] = useState(false);
    useEffect(()=>{
        setInProp(true)
    })
    function test(){
        console.log(inProp);
        
        setInProp(!inProp)
    }


    return(

        <section className={s.section_contacts}>
            <h1>Contacts</h1>
        </section>
    )
}

export default  SectionContacts