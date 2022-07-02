import React, {ChangeEvent, useState} from "react";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string>('sdada')

    const onChange = (value: string) => {
        setParentValue(value)
    }

    return <Select value={parentValue} onChange={onChange}
                   items={[
                       {title: "Dimych", value: 1},
                       {title: "Victor", value: 2},
                       {title: "Igor", value: 3}]}/>
}