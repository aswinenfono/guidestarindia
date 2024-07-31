import React, { useRef, useState } from 'react';

const CustomTextarea = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const TextRef = useRef()
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    console.log(TextRef)
    return (
        <div className="relative w-[100%] h-full ">
            <textarea
                ref={TextRef}
                name={props?.name}
                value={props?.value}
                className={`block w-full px-4 pt-8 pb-2  rounded-t-[8px] text-black bg-[#EFEFEF] border-b-2 border-[#00000040]  focus:border-[#004878] focus:outline-none min-h-[100%] max-h-[100%] transition-all duration-200`}
                onChange={props?.onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                id="textarea-id"
            ></textarea>
            <label
                htmlFor="textarea-id"
                className={`absolute left-3 top-10 text-md text-[#004878] transition-all duration-200 transform origin-top-left pointer-events-none ${isFocused || props?.value || TextRef?.current?.value ? '-translate-y-9 scale-75' : '-translate-y-1/2 scale-100'}`}
            >
                {props?.label}
            </label>
        </div>
    );
}

export default CustomTextarea;
