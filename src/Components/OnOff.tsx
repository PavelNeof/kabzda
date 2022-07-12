import React, {useState} from "react";
/*import {Off} from "./Off";
import {On} from "./On";*/
/*import s from "./OnOff.module.css";*/

type OnOffPropsType = {
    on:boolean
    setOn: (on :boolean) => void
}


export const OnOff = (props:OnOffPropsType) => {


    const onStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: '40px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        borderRadius: '50%',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{props.setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{props.setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>

        </div>
    )
}