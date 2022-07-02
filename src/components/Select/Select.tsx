import React, {useState} from "react";
import style from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any,
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    const onClickTitleHandler = () => {
        setCollapsed(!collapsed)
    }

    const onClickItemHandler = (title:string) => {
        props.onChange(title)
    }

    return (
        <div className={style.wrap}>
            <div className={style.title} onClick={onClickTitleHandler}><span>{props.value}</span></div>
            {collapsed &&
                <div className={style.dropdownMenu}>
                    {props.items.map(i=><div className={style.item} key={i.value} onClick={()=>onClickItemHandler(i.title)}>{i.title}</div>)}
                </div>
            }
        </div>
    )
}