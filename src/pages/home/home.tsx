
import s from './home.module.sass'
import SectionAbout from './sections/sectionAbout/sectionAbout'
import SectionProjects from './sections/sectionProjects/sectionProjects'
import SectionSckills from './sections/sectionSkills/sectionSkills'
import SectionContacts from './sections/sectionContacts/sectionContacts.module'
import Header from '../../global/Header/Header'


const Home = () => {
    return(
        <div className={s.home}>
            <Header/>
            <SectionAbout/>
            <SectionProjects/>   
            <SectionSckills/>  
            <SectionContacts/>   
        </div>
    )
}

export default  Home





