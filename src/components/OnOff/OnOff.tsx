import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    turn: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    const colorLight = props.turn ? s.on : s.off
    return (
        <div className={s.onOff}>
            { props.turn ? <button className={colorLight}>on</button> : <button>on</button> }
            { !props.turn ? <button className={colorLight}>off</button> : <button>off</button> }
            { props.turn ? <div className={s.light}></div> : <div className={s.light + ' ' + s.off}></div>}
        </div>
    );
};