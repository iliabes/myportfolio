
import s from './sectionProjects.module.sass'
import { Transition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import Propject from './projetc/project';
import { useAppSelector } from '../../../../hooks/store';
import img1 from '../../../../assets/img/weather.jpg'
import img2 from '../../../../assets/img/appBook.jpg'
import img3 from '../../../../assets/img/waha.jpg'
import food from '../../../../assets/img/food.png'
import neuro from '../../../../assets/img/neuro.png'
import { defaultStyleSection, transitionY } from '../../../../animate/animate';


const SectionProjects = () => {
    let sectionState = useAppSelector(state => (state.counterSlice.visProj))
    let [visible , setVisible] = useState(useAppSelector(state => (state.counterSlice.visProj)))

    useEffect(()=>{
        if (sectionState != visible){
            setVisible(sectionState)
        }
    })

    return(
        <Transition in={visible} timeout={700}>
            
            {state => (
                <>
                <section style={{...defaultStyleSection,...transitionY[state]}} className={s.section_projects}>
                    <Propject techologi={['Vue','Vuex','Tailwind','Vite']} directionRigth={true} visible={visible} link='https://admirable-madeleine-faeb93.netlify.app/' title='Delicious day recipes' left={true}  text='саит кулинарных рецептов, все рецепты сгруппированы по категориям по которым их легко найти. Приложение сделано с использованием Vue Composition API. Данные и изображения берутся из Edamam API и TheMealDB API' image={food} />
                    <Propject techologi={['React','Redux','Typescript','ReduxTooolkit','Sass']} directionRigth={false} visible={visible} link='https://choose-book.vercel.app/' title='Choose book' left={false}  text='Прилолжения для выбора книг основанное на гайде Sfsignal, на этом сайте вы найдете разнообразные категории книг, начиная от классической литературы и заканчивая современными бестселлерами. ' image={img2} />  
                    <Propject techologi={['Vite','Sass']} directionRigth={true} visible={visible} link='https://neuro-lending-page.vercel.app/' title='Grand Park' left={true}  text='Лендинг жилищного комплекса Grand Park. Макет сайта был создан при помощи нейросети Midjourney, для верстки использовался препроцессор SASS, в качестве сборщика использован Vite' image={neuro} />
                    <Propject techologi={['React','Redux','Typescript','ReduxTooolkit','Sass']} directionRigth={false} visible={visible} link='https://zippy-naiad-c0d8ef.netlify.app/' title='Memory card' left={false}  text='Карточная мини игра для развития памяти в стиле Warhammer 40000.Цель игры проста - вы должны открыть две карты одновременно и найти пару изображений, которые совпадают.' image={img3} />
                    <Propject techologi={['React','Redux','Typescript','ReduxTooolkit','Sass']} directionRigth={true} visible={visible} link='https://bejewelled-biscochitos-22bf1c.netlify.app/ ' title='Weather-forecast' left={true}  text='Сайт погоды предоставляет вам актуальную информацию о погодных условиях в екатеринбурге,на нем вы можете  получить доступ к прогнозам температуры, осадкам, ветру и другим метеорологическим данным  , даныые берутся из OpenWeatherMap' image={img1} />
                </section>
                </>
            )}
        </Transition>
    )
}








export default  SectionProjects
