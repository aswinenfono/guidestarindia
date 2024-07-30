import React, { useState } from 'react'
import { m } from "framer-motion";
import { Container } from 'react-bootstrap';
import ButtonComp from '../ButtonComp/ButtonComp';
import OpenToggle from './OpenToggle';
import { navBarLinks } from './HeaderSecDatas';
import { Link } from 'react-router-dom';
const NavbarSec = ({ theme }) => {
  const [toggle, setToggle] = useState(false)

  const [List, setList] = useState({})

  const mouseEnter = (which) => {
    setList({ [which]: true })
  }

  const mouseLeave = (which) => {
    setList({ [which]: false })
  }
  return (
    <>
      <Container className='max-md:ml-0 '>
        <m.div >
          <div className='NavbarSec p-[10px]'>
            {navBarLinks?.map(link =>
              <div className='relative'>
                <h6 className='NavbarSecHeaderTag' onMouseLeave={() => { mouseLeave(link?.link) }} onMouseEnter={() => { mouseEnter(link?.link) }}><Link>{link.link}
                </Link> </h6>
                {List[link?.link] && link?.subLinks?.length > 0 &&
                  <ul onMouseLeave={() => { mouseLeave(link?.link) }} onMouseEnter={() => { mouseEnter(link?.link) }} className='absolute w-max mt-[-30px] bg-[#f7f7f7] p-[10px] z-10 rounded-md' >
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
          <div className='NavbarSecMob relative'>
            <div className='flex justify-end'>
              <div onClick={() => { setToggle(!toggle) }}>
                {toggle ?
                  <i class="fa-solid fa-xmark"></i>
                  :
                  <i class="fa-solid fa-bars"></i>
                }
              </div>
            </div>
            {toggle &&
              <OpenToggle theme={theme === "light" ? "light" : ''} />
            }
          </div>
        </m.div>

      </Container>
    </>
  )
}

export default NavbarSec