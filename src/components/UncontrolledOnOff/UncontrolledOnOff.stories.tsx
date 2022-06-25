import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff,
}

const callback = action('on or off clicked')

export const ModeChanging = () => <UncontrolledOnOff onChange={callback}/>
