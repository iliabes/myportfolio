
import s from './sectionAbout.module.sass'
import Canvas from './canvas/canvas'
import { Transition } from 'react-transition-group';
import portr from '../../../../assets/img/mozport.jpg'
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
                            <div id='citcle_img' className={s.cont_curcle_img}>
                                <picture className={s.picture}>
                                    <source type='image/webp' media="(min-width:650px)" srcSet={portr}></source>
                                    <img alt="portret"  className={s.img_aftar} src={portr}/>
                                </picture>
                            </div>
                    <div  className={s.cont_text}>
                            <div  className={s.block_text}>
                            <p  className={s.text_header} >
                            <Typed
                                strings={[`Привет я Илья начинающий фронтенд разработчик, и я ищу возможность присоединиться к команде, где смогу применить свои навыки .В моем портфолио вы найдете примеры моих работ, которые я создал в процессе обучения и самостоятельной практики.` ]}
                                typeSpeed={8} 
                                startDelay={500}
                                showCursor={false}
                                />
                            </p>
                            <Transition  timeout={4000}>
                                <hr className={s.hr} />
                            </Transition>
                            <p  className={s.text_header} >
                            <Typed
                                strings={[`Я стремлюсь создавать качественный код, который не только эффективен и масштабируем, но и обеспечивает удобство использования для пользователей. Я всегда открыт новым вызовам и готов учиться, чтобы улучшить свои навыки и стать более опытным разработчиком.` ]}
                                typeSpeed={8}
                                startDelay={5000}
                                showCursor={false}
                                />
                            </p>
                            <Transition  timeout={8000}>
                                <hr className={s.hr2}  />       
                            </Transition>
                            <p className={s.text_header} >
                            <Typed
                                strings={[`Я  уверен, что мои навыки и  опыт помогут мне успешно внести свой вклад в вашу команду. Я ищу возможность работать в дружной и инновационной среде, где я смогу продолжать развиваться и вносить свой вклад в развитие проектов` ]}
                                typeSpeed={7}
                                startDelay={10000}
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

