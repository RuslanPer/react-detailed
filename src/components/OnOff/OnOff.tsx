import React, {useState} from 'react';
import s from './OnOff.module.css'


export const OnOff = () => {

    let [on, setOn] = useState(false)

    return (
        <div className={s.onOff}>
            <button className={on ? s.on : undefined}
                    onClick={ () => setOn(true)}>on
            </button>
            <button className={!on ? s.off : undefined}
                    onClick={() => setOn(false)}>off
            </button>
            <div className={on ? s.light : s.light + ' ' + s.off}></div>
        </div>
    );
};