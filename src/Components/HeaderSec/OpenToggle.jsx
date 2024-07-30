import React, { useState } from 'react'
import { m } from "framer-motion"
import ButtonComp from '../ButtonComp/ButtonComp'
import { fadeIn } from '../../Functions/GlobalAnimations'
import { Link } from 'react-router-dom'
import { navBarLinks } from './HeaderSecDatas'
const OpenToggle = ({ theme }) => {
    const [List, setList] = useState({})

    const mouseEnter = (which) => {
        setList({ [which]: true })
    }

    const mouseLeave = (which) => {
        setList({ [which]: false })
    }

    return (
        <>
            <m.div className=' absolute z-10 bg-white w-[100%] h-[auto] p-[5px] shadow-sm' {...fadeIn}>
                <div className='p-[10px] flex flex-col gap-3'>
                    {navBarLinks?.map(link =>
                        <div className='relative'>
                            <Link>
                                <p onMouseLeave={() => { mouseLeave(link?.link) }} onMouseEnter={() => { mouseEnter(link?.link) }} className='text-black'>{link?.link}</p>
                            </Link>
                            {
                                List[link?.link] && link?.subLinks?.length > 0 &&
                                <ul onMouseLeave={() => { mouseLeave(link?.link) }} onMouseEnter={() => { mouseEnter(link?.link) }} className='absolute w-[100% ]  bg-[#f7f7f7] p-[10px] z-10 rounded-md' >
                                    {link?.subLinks?.map(subLink =>
                                        <li ><Link className='hover:text-blue-600 hover:underline'>{subLink}</Link></li>
                                    )}
                                </ul>
                            }
                        </div>
                    )}
                    <div>
                        <h6 className='NavbarSecHeaderTag'>
                            <Link to={'/login'}>
                                <ButtonComp className={`NavbarSecHeaderButton ${theme === 'light' ? 'bg-[#4472C4]' : 'bg-[#C00000]'} `} text='SIGN IN / CREATE ACCOUNT' />
                            </Link>
                        </h6>
                    </div>
                </div>
            </m.div >
        </>
    )
}

export default OpenToggle