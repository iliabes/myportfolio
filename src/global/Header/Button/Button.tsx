import { useEffect, useState } from 'react';
import s from './Button.module.sass'
import classNames from 'classnames'
import { activeAbout } from '../../../store/slices/sliceBtn';
import { useAppDispatch } from '../../../hooks/store';
import { useAppSelector } from '../../../hooks/store';



function Button(props: any) {
    const dispatch = useAppDispatch()
    let [active, setActive] = useState(false)


    console.log('btn state----', active)
    return (
        <button onClick={() => { dispatch(activeAbout(true)) }} id='topAbout' className={active ? classNames(s.btn, s.active) : s.btn}>{props.name} </button>
    )
}

export default Button;