
import s from './home.module.sass'

import SectionAbout from './sections/sectionAbout/sectionAbout'
import SectionProjects from './sections/sectionProjects/sectionProjects'
import SectionSckills from './sections/sectionSkills/sectionSkills.module'
import SectionContacts from './sections/sectionContacts/sectionContacts.module'

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