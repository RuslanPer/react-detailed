import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
        { !collapsed && <AccordionBody /> }
    </div>

}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3 onClick={ () => props.onClick() }>{props.title}</h3>
}

export const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

