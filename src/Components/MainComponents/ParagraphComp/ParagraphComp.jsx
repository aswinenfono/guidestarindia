import React from 'react'

export const ParagraphComp = ({ Data: { text, className } }) => {
    return (
        <p className={className}>
            {text}
        </p >
    )
}
