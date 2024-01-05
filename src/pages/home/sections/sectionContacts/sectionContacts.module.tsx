
import s from './sectionContacts.module.sass'
import { Transition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Footer from '../../../../global/Footer/Footer'
import { defaultStyleSection, trasitonX, transitionY, defaultStyleField } from '../../../../animate/animate';
import { useAppSelector } from '../../../../hooks/store';







const SectionContacts = () => {
    let sectionState = useAppSelector(state => (state.counterSlice.visContact))
    let [visible, setVisible] = useState(useAppSelector(state => (state.counterSlice.visContact)))

    useEffect(() => {
        if (sectionState != visible) {
            setVisible(sectionState)
        }
    })




    return (
        <Transition mountOnEnter={true} in={visible} timeout={10000}>
            {state => (
                <>
                    <section style={{ ...defaultStyleSection, ...transitionY[state] }} className={s.contacts}>
                            <div style={{ ...defaultStyleField, ...{ 'transitionDelay': '.7s' }, ...trasitonX[state] }} className={s.cont}>
                                <div className={s.cont_bg}></div>
                                <p  className={s.quet}>Можете отправить мне сообщение</p>
                                <div className={s.cont_input}>
                                    <input placeholder="Ваше имя" className={s.text_inp} type="text" />
                                </div>
                                <div className={s.cont_input}>
                                    <input placeholder="Ваша emeil" className={s.text_inp} type="text" />
                                </div>
                                <div className={s.cont_input}>
                                    <input placeholder="Ваша сообщение" className={classNames(s.text_inp, s.area)} type="text" />
                                </div>
                                <div  className={s.cont_input}>
                                    <button className={s.submit}>Отправить</button>
                                </div>
                            </div>

                        <p className={s.if}>Или</p>
                        <button style={{ ...defaultStyleField, ...{ 'transitionDelay': '.75s' }, ...trasitonX[state] }} className={s.downloadBtn}>Скачать резюме</button>
                        <Footer visible={visible} />

                    </section>
                    
                </>
            )}
        </Transition>


    )
}






export default SectionContacts
