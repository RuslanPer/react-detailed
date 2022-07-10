import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean,
    onChange: (on: boolean) => void
}

const OnOffSecret = (props: OnOffPropsType) => {

    return (
        <div className={s.onOff}>
            <button className={props.on ? s.on : undefined}
                    onClick={ () => props.onChange(true)}>on
            </button>
            <button className={!props.on ? s.off : undefined}
                    onClick={() => props.onChange(false)}>off
            </button>
            <div className={props.on ? s.light : s.light + ' ' + s.off}></div>
        </div>
    );
};

export const OnOff = React.memo(OnOffSecret)