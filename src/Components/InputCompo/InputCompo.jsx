import React from 'react'

export const InputCompo = ({ type, name, placeholder, value, onChange, className, onClick, checked }) => {
    return (
        <>
            <input checked={checked} onClick={onClick && onClick} onChange={onChange && onChange} type={type} value={value} name={name} placeholder={placeholder} className={className} />
        </>
    )
}
