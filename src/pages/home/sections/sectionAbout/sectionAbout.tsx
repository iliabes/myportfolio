
import s from './sectionAbout.module.sass'
// import Header from '../../../../global/Header/Header'
import Canvas from './canvas/canvas'
import { Transition } from 'react-transition-group';
import portr from '../../../../assets/img/port.png'
import { useEffect, useState } from 'react';
import Typed from 'react-typed';




const duration = 7000;







const SectionAbout = () => {
    const [inProp, setInProp] = useState(false);
    useEffect(()=>{
        setInProp(true)
    })



    return(
        <Transition in={inProp} timeout={duration}>
        {() => (
            <section className={s.section_about}>
                {/* <Header/> */}
                <Canvas/>
                {/* <Title visible={true} title='About me'/> */}
                <div  className={s.cont_header}>

                            <div className={s.cont_curcle_img}>
                                <img   className={s.img_aftar} src={portr}/>
                            </div>


                    <div  className={s.cont_text}>
                            <div  className={s.block_text}>
                            <p id="element" className={s.text_header} >
                            <Typed
                                strings={[`Привет я Илья , я начинающий frontend-разроботчик.В моем портфолио вы найдете мои работы, которые я разработал в течение последних нескольких лет. Я специализируюсь в области веб-разработки, включая фронтенд и бэкенд разработку. Я также знаком с базами данных и разработкой мобильных приложений.` ]}
                                typeSpeed={10} 
                                startDelay={500}
                                showCursor={false}
                                />
                            </p>
                            <Transition  timeout={4000}>
                                <hr className={s.hr} />
                            </Transition>
                            
                            <p id="element" className={s.text_header} >
                            <Typed
                                strings={[`Я стремлюсь создавать качественный код, который не только эффективен и масштабируем, но и обеспечивает удобство использования для пользователей. Я всегда открыт новым вызовам и готов учиться, чтобы улучшить свои навыки и стать более опытным разработчиком.` ]}
                                typeSpeed={10}
                                startDelay={11000}
                                showCursor={false}
                                />
                            </p>
                            <Transition  timeout={8000}>
                                <hr className={s.hr2}  />
                            </Transition>
                            <p id="element" className={s.text_header} >
                            <Typed
                                strings={[`Я горжусь своими проектами, и я уверен, что мои навыки и предыдущий опыт помогут мне успешно внести свой вклад в вашу команду. Я ищу возможность работать в дружной и инновационной среде, где я смогу продолжать развиваться и вносить свой вклад в развитие проектов` ]}
                                typeSpeed={10}
                                startDelay={15000}
                                shuffle={true}
                                showCursor={false}
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

// Привет я Илья , я начинающий frontend-разроботчик.
//  Я начинающий программист, стремящийся найти работу в этой захватывающей и динамичной области.
// В моем портфолио вы найдете мои работы, которые я разработал в течение последних нескольких лет
// Я стремлюсь создавать качественный код, который не только эффективен и масштабируем, но и обеспечивает удобство использования для пользователей. Я всегда открыт новым вызовам и готов учиться, чтобы улучшить свои навыки и стать более опытным разработчиком.  