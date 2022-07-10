import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

const UncontrolledAccordionSecret = (props: AccordionPropsType) => {

    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: TOGGLE_COLLAPSED})}/>
        { !state.collapsed && <AccordionBody /> }
    </div>

}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

const AccordionTitleSecret = (props: AccordionTitlePropsType) => {
    return <h3 onClick={ () => props.onClick() }>{props.title}</h3>
}
export const AccordionTitle = React.memo(AccordionTitleSecret)

export const AccordionBodySecret = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
export const AccordionBody = React.memo(AccordionBodySecret)

