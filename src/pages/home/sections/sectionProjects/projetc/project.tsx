
import s from './project.module.sass'
import { Transition } from 'react-transition-group';
import {defaultStyleFieldRight,defaultStyleField, trasitonX} from '../../../../../animate/animate'
import classNames from 'classnames';
import ButtonGit from '../../../../../global/Button/Button'








const Propject = (props:any) => {
    let defStyleImg = defaultStyleFieldRight
    let defStyleSign = defaultStyleField
    if(props.left){
        defStyleImg = defaultStyleField
        defStyleSign = defaultStyleFieldRight
    }
    const listItems = props.techologi.map((item:string,index:number) =><div key={index} className={s.techologi}><p className={s.text_techo}>{item}</p></div>)

    return(
        <Transition  in={props.visible} timeout={100}>
        {state => (
            
        <div   className={props.left ? classNames(s.projects_cont) : classNames(s.projects_cont, s.left)}>
        <div style={{...defStyleImg,...{'transitionDelay': '.6s'},...trasitonX[state]}} className={s.cont_img}>
        
            <div className={s.hoverCurtain}>
            <a href={props.link}>
                <img className={s.img_portfolio} src={props.image} alt=""/>
                
            </a>
            
            <div className={classNames(s.curtain, s.curtain_left)}>

            </div>
            <div className={classNames(s.curtain, s.curtain_right)}></div>
                    <figcaption className={s.fig}>
                    <h2>{props.title}</h2>
                    </figcaption>
            </div>
        </div>
        

        <div style={{...defStyleSign,...{'transitionDelay': '.6s'},...trasitonX[state]}} className={props.directionRigth? s.cont_sign : classNames(s.cont_sign ,s.cont_sign_left )}>
            <h2 className={s.gold}>{props.title}</h2>
            <p className={s.sign_project}>{props.text}</p>
            <ButtonGit link={props.linkGit}/>  
            <div className={s.cont_techologi}>

                {listItems}
            </div>  
            

        </div>
        </div>
        )}
        </Transition>
    )
}

export default  Propject


