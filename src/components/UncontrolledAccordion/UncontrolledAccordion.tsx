import React, {Dispatch, SetStateAction, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} collapsed={collapsed} setCollapsed={setCollapsed}/>
        { !collapsed && <AccordionBody /> }
    </div>

}

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean
    setCollapsed: Dispatch<SetStateAction<boolean>>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={ () => props.setCollapsed(!props.collapsed)}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;
