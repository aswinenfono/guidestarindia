import React from 'react'
import { m } from "framer-motion"
import HeaderCompo from '../HeaderComp/HeaderCompo'
import { ParagraphComp } from '../ParagraphComp/ParagraphComp'
import ButtonComp from '../ButtonComp/ButtonComp'
import { fadeIn } from '../../Functions/GlobalAnimations'
import { Link } from 'react-router-dom'
const OpenToggle = ({ theme }) => {
    const Data = [
        "Discover/ Support NPOs",
        "CERTIFIED NPOs LIST",
        "Update your Npo Profile",
        "HELP",
        "MEDIA"

    ]
    return (
        <>
            <m.div className=' absolute z-10 bg-white w-[100%] shadow-sm' {...fadeIn}>
                <HeaderCompo Data={{ tagType: 'h6', className: 'text-black text-[17px] font-bold mb-[0px]', text: 'HOME' }} />
                <div className='p-[10px] flex flex-col gap-3'>
                    {Data.map(ele =>
                        <ParagraphComp Data={{ text: ele, className: ' text-black' }} />
                    )}
                    <div>
                        <h6 className='NavbarSecHeaderTag'>
                            <Link to={'/login'}>
                                <ButtonComp Data={{ className: `NavbarSecHeaderButton ${theme === 'light' ? 'bg-[#4472C4]' : 'bg-[#C00000]'} `, text: 'SIGN IN / CREATE ACCOUNT', }} />
                            </Link>
                        </h6>
                    </div>
                </div>
            </m.div>
        </>
    )
}

export default OpenToggle