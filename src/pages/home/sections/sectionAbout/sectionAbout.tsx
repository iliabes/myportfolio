
import s from './sectionAbout.module.sass'
// import Header from '../../../../global/Header/Header'
import Canvas from './canvas/canvas'
import { Transition } from 'react-transition-group';
import { bounce } from 'react-animations';
import portr from '../../../../assets/img/portret.webp'
import { useEffect, useState } from 'react';
import Typed from 'react-typed';
import Title from '../../../../global/Title/Title'


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

const defaultStyleTitle = {
    transition: `${duration}ms ease-in-out`,
    transform: 'translateY(-1000px)'
}

const transitionStylesTitle = {
    entering: {transform: 'translateX(0)'},
};



const SectionAbout = () => {

    const [inProp, setInProp] = useState(false);
    useEffect(()=>{
        setInProp(true)
    })
    function test(){
        
        setInProp(!inProp)
    }


    return(
        <Transition in={inProp} timeout={duration}>
        {state => (
            <section className={s.section_about}>
                {/* <Header/> */}
                <Canvas/>
                <Title visible={true} title='About me'/>
                <div  className={s.cont_header}>

                            <div style={{...defaultStyle,...transitionStyles[state]}} className={s.cont_curcle_img}>
                                <img  onClick={test} className={s.img_aftar} src={portr}/>
                            </div>


                    <div  className={s.cont_text}>
                            <div  className={s.block_text}>
                            <p id="element" className={s.text_header} >
                            <Typed
                                strings={[`Helloy`,`I'm Ilya, I'm a  frontEnd developer`,`I'm Ilya, I'm a  front-end developer`]}
                                typeSpeed={20}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )}
        </Transition>
    )
}

export default  SectionAbout