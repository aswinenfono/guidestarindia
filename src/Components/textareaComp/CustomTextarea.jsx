import React from 'react'

const CustomTextarea = (props) => {
    return (
        <div className="relative mt-1 w-[100%] h-[100%]">
            <textarea name={props?.name}
                value={props?.value}
                className={` ${props?.className} block w-full px-3 pt-4 pb-2 rounded-t-2xl text-black bg-[#EFEFEF] focus:outline-none focus:border-b-4 focus:border-[#004878] min-h-[100%] max-h-[100%]`}
                onChange={props?.onChange}
                id=""></textarea>
            <label
                htmlFor="input"
                className="absolute top-4 text-xl left-3 min-w-max  text-[#004878] transition-all duration-200 transform -translate-y-1/2 scale-75 origin-top-left pointer-events-none"
            >
                {props?.label}
            </label>
        </div >
    )
}

export default CustomTextarea