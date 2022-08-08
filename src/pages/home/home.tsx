
import s from './home.module.sass'

import SectionAbout from './components/sectionAbout/sectionAbout'
import SectionProjects from './components/sectionProjects/sectionProjects'
import SectionSckills from './components/sectionSkills/sectionSkills.module'
import SectionContacts from './components/sectionContacts/sectionContacts.module'

const Home = () => {
    return(
        <div className={s.home}>
            <SectionAbout/>
            <SectionProjects/>
            <SectionSckills/>
            <SectionContacts/>
        </div>
    )
}

export default  Home