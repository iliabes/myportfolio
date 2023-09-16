
import s from './sectionContacts.module.sass'
import { Transition } from 'react-transition-group';
import { useState ,useEffect} from 'react';
import classNames from 'classnames';
import Footer from '../../../../global/Footer/Footer'
import { defaultStyleSection , trasitonX, transitionY ,defaultStyleField} from '../../../../animate/animate';
import { useAppSelector } from '../../../../hooks/store';







const SectionContacts = () => {
let sectionState = useAppSelector(state => (state.counterSlice.visContact))
let [visible , setVisible] = useState(useAppSelector(state => (state.counterSlice.visContact)))

useEffect(()=>{
    if (sectionState != visible){
        setVisible(sectionState)
    }
})




    return(
        <Transition in={visible} timeout={10000}>
            
            {state => (
                <>
                
                <section style={{...defaultStyleSection,...transitionY[state]}}  className={s.contacts}>
                    <div  className={s.cont}>
                    <div className={s.cont_bg}></div> 
                    <Transition in={visible} timeout={1000}>
                        <p style={{...defaultStyleField,...{'transitiondelay': '1s'},...trasitonX[state]}} className={s.quet}>Можете отправить мне сообщение</p>
                    </Transition>
                    <Transition in={visible} timeout={1000}>
                        {state => (
                        <div style={{...defaultStyleField,...{'transitiondelay': '1.2s'},...trasitonX[state]}}   className={s.cont_input}>
                            <input placeholder="Ваше имя"  className={s.text_inp} type="text"/>
                        </div>
                        )}
                    </Transition>

                    <Transition in={visible} timeout={1000}>
                        <div style={{...defaultStyleField,...{'transitiondelay': '1.4s'},...trasitonX[state]}}   className={s.cont_input}>
                            <input placeholder="Ваша emeil"  className={s.text_inp} type="text"/>
                        </div>
                    </Transition>
                    
                    <Transition in={visible} timeout={1000}>
                        <div style={{...defaultStyleField,...{'transitiondelay': '1.6s'},...trasitonX[state]}}  className={s.cont_input}>
                            <input placeholder="Ваша сообщение"  className={classNames(s.text_inp ,  s.area)} type="text"/>
                        </div>
                    </Transition>
                    <Transition in={visible} timeout={1000}>
                        <div style={{...defaultStyleField,...{'transitiondelay': '1.8s'},...trasitonX[state]}}   className={s.cont_input}>
                            <button className={s.submit}>Submit</button>
                        </div>
                    </Transition>
                </div>
                <p className={s.if}>Или</p>
                <button className={s.downloadBtn}>Скачать резюме</button>
                <Footer visible={visible}/>

            </section>
        </>
    )}
        </Transition>

        
    )
}






export default  SectionContacts
