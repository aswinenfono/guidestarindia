import React from 'react'

export const ImageComp = ({ Data: { className, source, } }) => {
    return (
        <>
            <img src={source} className={className} alt="" />
        </>
    )
}
