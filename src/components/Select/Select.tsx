import React, {useState, KeyboardEvent, useEffect} from "react";
import style from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any,
    onChange: (value: any) => void
    items: ItemType[]
}

function SelectSecret(props: SelectPropsType) {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect( () => {
        setHoveredElementValue(props.value)
    }, [props.value])


    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if(props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i+1]
                        : props.items[i-1];

                    if(pretendentElement){
                        props.onChange(pretendentElement.value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }

        }

        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }

    return (
        <div className={style.wrap} onKeyUp={onKeyUp} tabIndex={0}>
            <div className={style.title} onClick={toggleItems}>
                <span>{selectedItem && selectedItem.title}</span>
            </div>
            {
                active &&
                <div className={style.dropdownMenu}>
                    {props.items.map(i =>
                        <div
                            onMouseEnter={() => setHoveredElementValue(i.value)}
                            className={style.item + " " + (hoveredItem === i ? style.selected : "")}
                             key={i.value}
                             onClick={() => onItemClick(i.value)}>
                            {i.title}
                        </div>)}
                </div>
            }
        </div>
    )
}
export const Select = React.memo(SelectSecret)

// export function Select(props: SelectPropsType) {
//     const [collapsed, setCollapsed] = useState(false)
//
//     const onClickTitleHandler = () => {
//         setCollapsed(!collapsed)
//     }
//
//     const onClickItemHandler = (title:string) => {
//         props.onChange(title)
//     }
//
//     return (
//         <div className={style.wrap}>
//             <div className={style.title} onClick={onClickTitleHandler}><span>{props.value}</span></div>
//             {collapsed &&
//                 <div className={style.dropdownMenu}>
//                     {props.items.map(i=><div className={style.item} key={i.value} onClick={()=>onClickItemHandler(i.title)}>{i.title}</div>)}
//                 </div>
//             }
//         </div>
//     )
// }