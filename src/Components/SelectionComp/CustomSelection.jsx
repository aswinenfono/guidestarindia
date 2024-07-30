import React from 'react'

const CustomSelection = (props) => {
    return (



        <div className="relative mt-1 w-[100%]">
            <select
                value={props?.value}
                onChange={props?.onChange}
                className="custom-select block w-full pr-[20px] px-3 pt-4 pb-2 rounded-t-2xl text-black bg-[#EFEFEF]  focus:outline-none focus:border-b-4 focus:border-[#004878]"
                name={props.name} id="">

                {props?.options?.map(opt =>
                    <option className='bg-[#EFEFEF]' value={opt}>{opt}</option>
                )}
            </select>
            <label
                htmlFor="input"
                className="absolute top-4 text-xl left-3 min-w-max  text-[#004878] transition-all duration-200 transform -translate-y-1/2 scale-75 origin-top-left pointer-events-none"
            >
                {props?.label}
            </label>
        </div>
    )
}

export default CustomSelection