import React from 'react'
import "./ButtonComp.css"
const ButtonComp = ({ Data: { onClick, name, value, text, className } }) => {
    return (< button className={className} onClick={(e) => { onClick && onClick(e) }} name={name} value={value} > {text}</button >)

}

export default ButtonComp