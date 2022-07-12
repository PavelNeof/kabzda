import React, {useState} from "react";
/*import {Off} from "./Off";
import {On} from "./On";*/
/*import s from "./OnOff.module.css";*/


type PropsType = {
    onChange:(on:boolean) => void
}

export const UncontrolledOnOff = (props:PropsType) => {

    let [on,setOn] = useState(false)

    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        borderRadius: '50%',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicled = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicled = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicled}>On</div>
            <div style={offStyle} onClick={offClicled}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    )
}