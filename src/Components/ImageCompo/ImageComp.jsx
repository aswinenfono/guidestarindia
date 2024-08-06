import React from 'react'

export const ImageComp = ({ className, source }) => {
    return (
        <>
            <img src={source} className={className} alt="" />
        </>
    )
}
