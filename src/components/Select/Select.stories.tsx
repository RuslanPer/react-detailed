import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('2');

    return (
        <>
            <Select value={value}
                    onChange={setValue}
                    items={[
                        {title: "Dimych", value: '1'},
                        {title: "Victor", value: '2'},
                        {title: "Igor", value: '3'}]}/>
        </>
    )

}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);

    return (
        <>
            <Select value={value} onChange={setValue}
                    items={[
                        {title: "Dimych", value: '1'},
                        {title: "Victor", value: '2'},
                        {title: "Igor", value: '3'}]}/>
        </>
    )
}




