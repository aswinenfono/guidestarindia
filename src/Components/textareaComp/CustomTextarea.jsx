import React, { useRef, useState } from 'react';

const CustomTextarea = ({ name, value, onChange, label, className }) => {
    const [isFocused, setIsFocused] = useState(false);
    const TextRef = useRef()
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    return (
        <div className="relative w-[100%] h-full ">
            <textarea
                ref={TextRef}
                name={name}
                value={value}
                className={`block w-full px-4 pt-8 pb-2 text-[black] bg-[white] rounded-[8px] border-1 border-[#00000078]  focus:border-[#004878] focus:outline-none min-h-[100%] max-h-[100%] transition-all duration-200 ${className}`}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                id="textarea-id"
            ></textarea>
            <label
                htmlFor="textarea-id"
                className={`absolute left-3 top-10 text-md text-[gray] transition-all duration-200 transform origin-top-left bg-[white] pointer-events-none ${isFocused || value || TextRef?.current?.value ? '-translate-y-2 w-fit px-[10px] top-[0px] scale-75' : '-translate-y-1/2 scale-100'}`}
            >
                {label}
            </label>
        </div>
    );
}

export default CustomTextarea;
