import React from 'react'

export const InputCompo = ({ type, name, placeholder, value, onChange, className }) => {
    return (
        <>
            <input onChange={(e) => { onchange && onChange(e) }} type={type} value={value} name={name} placeholder={placeholder} className={className} />
        </>
    )
}
