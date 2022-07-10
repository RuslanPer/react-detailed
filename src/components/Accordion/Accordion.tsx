import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionSecret = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
    </div>

}
export const Accordion = React.memo(AccordionSecret)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

const AccordionTitleSecret = (props: AccordionTitlePropsType) => {
    return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
}
export const AccordionTitle = React.memo(AccordionTitleSecret)


export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBodySecret = (props: AccordionBodyPropsType) => {
    return <ul>
        {props.items.map((item, index)=> <li onClick={()=>{props.onClick(item.value)}} key={index}>{item.title}</li>)}
    </ul>
}
export const AccordionBody = React.memo(AccordionBodySecret)

