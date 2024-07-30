import React from 'react'
import { ParagraphComp } from '../ParagraphComp/ParagraphComp';

const CustomFileInput = ({ value, onChange, label }) => {
    const fileInputRef = React.createRef();
    const handleIconClick = () => {
        fileInputRef.current.click();
    };
    return (
        <>
            <div onClick={handleIconClick} className="relative mt-1 w-[100%]">
                <div className=' flex gap-[10px] w-full px-3 pt-4  rounded-t-2xl text-black bg-[#EFEFEF] focus:outline-none focus:border-b-4 focus:border-[#004878]'>
                    <input
                        type="file"
                        id="input"
                        ref={fileInputRef}
                        className="hidden w-full px-3 pt-4 pb-2 rounded-t-2xl text-black bg-[#EFEFEF]   focus:outline-none focus:border-b-4 focus:border-[#004878]"
                        value={value}
                        onChange={onChange}
                    />
                    <i class="fa-solid fa-paperclip text-xl "></i>
                    <ParagraphComp Data={{ text: value }} />

                </div>
                <label
                    htmlFor="input"
                    className="absolute top-4 text-xl left-3  text-[#004878] transition-all duration-200 transform -translate-y-1/2 scale-75 origin-top-left pointer-events-none"
                >
                    {label}
                </label>
            </div>
        </>
    )
}

export default CustomFileInput