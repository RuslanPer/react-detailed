import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className={s.onOff}>
            <button className={on ? s.on : undefined}
                    onClick={onClicked}>on
            </button>
            <button className={!on ? s.off : undefined}
                    onClick={offClicked}>off
            </button>
            <div className={on ? s.light : s.light + ' ' + s.off}></div>
        </div>
    );
};