import React from 'react'
const ButtonComp = ({ onClick, name, value, text, className, type }) => {
    return (< button type={type} className={className} onClick={(e) => { onClick && onClick(e) }} name={name} value={value} > {text}</button >)

}

export default ButtonComp