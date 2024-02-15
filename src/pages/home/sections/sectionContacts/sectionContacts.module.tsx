
import s from './sectionContacts.module.sass'
import { Transition } from 'react-transition-group';
import { useState, useEffect } from 'react';
import { defaultStyleSection, trasitonX, transitionY, defaultStyleField } from '../../../../animate/animate';
import { useAppSelector } from '../../../../hooks/store';
import {BsGithub} from 'react-icons/bs'
import { FaTelegramPlane } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";




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
                                <p  className={s.quet}>Можете связатся со мной</p>
                                <div className={s.cont_input}>
                                    <div className={s.contact_icon}>
                                        <p className={s.sign_icon}>Telegram</p>
                                        <a className={s.contact_icon} href="https://t.me/warpBes"><FaTelegramPlane/> </a>
                                    </div>
                                    <div className={s.contact_icon}>
                                        <p className={s.sign_icon}>Githab</p>
                                        <a className={s.contact_icon} href="https://github.com/IliaBes"><BsGithub/> </a>
                                    </div>
                                    <div className={s.contact_icon}>
                                        <p className={s.sign_icon}>Insta</p>
                                        <a className={s.contact_icon} href="https://www.instagram.com/"><CiInstagram/> </a>
                                    </div>
                                    <div className={s.contact_icon}>
                                        <p className={s.sign_icon}>Mail</p>
                                        <a className={s.contact_icon} href="mailto:f0rgetful@yandex.ru"><IoMdMail/> </a>
                                    </div>
                                    <div className={s.contact_icon}>
                                        <p className={s.sign_icon}>Linkedin</p>
                                        <a className={s.contact_icon} href="https://www.linkedin.com/"><CiLinkedin/> </a>
                                    </div>
                                </div>
                            </div>

                        <p className={s.if}>Или</p>
                        <button style={{ ...defaultStyleField, ...{ 'transitionDelay': '.75s' }, ...trasitonX[state] }} className={s.downloadBtn}>Скачать резюме</button>


                    </section>
                    
                </>
            )}
        </Transition>


    )
}







export default SectionContacts
