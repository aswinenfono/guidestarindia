import React from 'react'

const HeaderCompo = ({ Data: { tagType, text, className } }) => {
    if (tagType === "h1") { return (<> {<h1 className={className}>{text}</h1>} </>) } else
        if (tagType === "h2") { return (<> {<h2 className={className}>{text}</h2>} </>) } else
            if (tagType === "h3") { return (<> {<h3 className={className}>{text}</h3>} </>) } else
                if (tagType === "h4") { return (<> {<h4 className={className}>{text}</h4>} </>) } else
                    if (tagType === "h5") { return (<> {<h5 className={className}>{text}</h5>} </>) } else
                        if (tagType === "h6") { return (<> {<h6 className={className}>{text}</h6>} </>) }
}

export default HeaderCompo