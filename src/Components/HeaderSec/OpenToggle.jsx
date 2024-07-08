import React from 'react'
import { m } from "framer-motion"
import HeaderCompo from '../HeaderComp/HeaderCompo'
import { ParagraphComp } from '../ParagraphComp/ParagraphComp'
import ButtonComp from '../ButtonComp/ButtonComp'
const OpenToggle = () => {
    const Data = [
        "Discover/ Support NPOs",
        "CERTIFIED NPOs LIST",
        "Update your Npo Profile",
        "HELP",
        "MEDIA"
    ]
    return (
        <>
            <m.div className=' absolute bg-white w-[100%] shadow-sm'>
                <HeaderCompo Data={{ tagType: 'h6', className: 'text-black text-[17px] font-bold mb-[0px]', text: 'HOME' }} />
                <div className='p-[10px] flex flex-col gap-3'>
                    {Data.map(ele =>
                        <ParagraphComp Data={{ text: ele, className: ' text-black' }} />
                    )}
                    <div>
                        <ButtonComp Data={{ className: 'NavbarSecHeaderButton', text: 'SIGN IN / CREATE ACCOUNT' }} />
                    </div>
                </div>
            </m.div>
        </>
    )
}

export default OpenToggle