import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback
};

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    onChange: callback
};

export const ModeChanging:ComponentStory<typeof Accordion>  = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={()=>setValue(!value)}/>
}

ModeChanging.args = {
    titleValue: 'Users'
}