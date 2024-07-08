import React, { useState } from 'react'
import { m } from "framer-motion";
import { Container } from 'react-bootstrap';
import ButtonComp from '../ButtonComp/ButtonComp';
import OpenToggle from './OpenToggle';
import { fadeIn } from '../../Functions/GlobalAnimations';
import { Link } from 'react-router-dom';
const NavbarSec = ({ theme }) => {
  const [toggle, setToggle] = useState(false)


  return (
    <>
      <Container>
        <m.div {...fadeIn}>
          <div className='NavbarSec p-[10px]'>
            <div>
              <h6 className='NavbarSecHeaderTag'>HOME</h6>
            </div>
            <div>
              <h6 className='NavbarSecHeaderTag'>DISCOVER/ SUPPORT NPOS</h6>
            </div>
            <div>
              <h6 className='NavbarSecHeaderTag'>CERTIFIED NPOs LIST</h6>
            </div>
            <div>
              <h6 className='NavbarSecHeaderTag'>UPDATE YOUR NPO PROFILE</h6>
            </div>
            <div>
              <h6 className='NavbarSecHeaderTag'>HELP</h6>
            </div>
            <div>
              <h6 className='NavbarSecHeaderTag'>MEDIA</h6>
            </div>
            <div>
              <h6 className='NavbarSecHeaderTag'>
                <Link to={'/login'}>
                  <ButtonComp Data={{ className: `NavbarSecHeaderButton ${theme === 'light' ? 'bg-[#4472C4]' : 'bg-[#C00000]'} `, text: 'SIGN IN / CREATE ACCOUNT', }} />
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
              <OpenToggle />
            }
          </div>
        </m.div>

      </Container>
    </>
  )
}

export default NavbarSec