import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    value: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div className={s.onOff}>
            <button className={props.value ? s.on : undefined}>on</button>
            <button className={!props.value ? s.off : undefined}>off</button>
            <div className={props.value ? s.light: s.light + ' ' + s.off}></div>
        </div>
    );
};