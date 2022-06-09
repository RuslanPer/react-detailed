import React, {Dispatch, SetStateAction, useState} from "react";

export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} num={1}/>
            <Star selected={value > 1} setValue={setValue} num={2}/>
            <Star selected={value > 2} setValue={setValue} num={3}/>
            <Star selected={value > 3} setValue={setValue} num={4}/>
            <Star selected={value > 4} setValue={setValue} num={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: Dispatch<SetStateAction<number>>
    num: number
}

function Star(props: StarPropsType) {
    return (
        props.selected ? <span onClick={()=>props.setValue(props.num)}><b>star </b></span> : <span onClick={()=>props.setValue(props.num)}>star </span>
    )
}