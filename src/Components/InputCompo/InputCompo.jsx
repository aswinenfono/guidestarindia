import React from 'react'

export const InputCompo = ({ Data: { type, name, placeholder, value, onChange, className } }) => {
    return (
        <>
            <input onChange={(e) => { onChange(e) }} type={type} value={value} name={name} placeholder={placeholder} className={className} />
        </>
    )
}
