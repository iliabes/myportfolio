
import s from './skillBarTitle.module.sass'








const SkillBarTitle = (props:any) => {

    return(
            <p className={s.cont_title }><span className={s.title_ckil }>{props.title}</span></p>
    )
}

export default  SkillBarTitle