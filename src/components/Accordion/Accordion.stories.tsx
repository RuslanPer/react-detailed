import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
    items: [],
    onClick: onClickCallback
};

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    onChange: callback,
    items: [
        {title: "Dimych", value: 1},
        {title: "Victor", value: 2},
        {title: "Igor", value: 3}],
    onClick: onClickCallback
};

export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[
                          {title: "Dimych", value: 1},
                          {title: "Victor", value: 2},
                          {title: "Igor", value: 3}]}
                      onClick={onClickCallback}/>
}

ModeChanging.args = {
    titleValue: 'Users'
}