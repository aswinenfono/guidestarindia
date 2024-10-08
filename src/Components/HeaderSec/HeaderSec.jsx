import React, { useState } from 'react'
import "./HeaderSec.css"
import { fadeIn } from '../../Functions/GlobalAnimations'
import { m } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ParagraphComp } from '../ParagraphComp/ParagraphComp';
import { Col, Container, Row } from 'react-bootstrap';
import OpenHeader from './OpenHeader';
import HeaderLiveNpos from "../HeaderSec/HeaderLiveNpos"
import NavbarSec from "../HeaderSec/NavbarSec"
import { ImageComp } from '../ImageCompo/ImageComp';
const HeaderSec = ({ theme }) => {
    const [IsOpenContent, setIsOpenContent] = useState(false)


    const OpenContent = () => {
        setIsOpenContent(!IsOpenContent)
    }

    console.log("theme>>>>", theme)
    return (
        <>
            {theme !== "light" ? <Container>
                <m.div className="py-[10px]" >
                    <Row className='w-[100%] max-sm:ml-0'>
                        <Col lg={6} className='HeaderSecTopInner'>
                            <ImageComp source='./Images/logo.png' className='h-[50px] max-sm:h-[40px]' />
                        </Col>
                        <Col className='HeaderSecTopInner2 p-0'>

                            <div className='h-[auto] flex flex-col items-end'>
                                <div className='flex  gap-3 items-center' >
                                    <ParagraphComp text='GuideStar India at a glance' className='headerSecFont2' />
                                    {!IsOpenContent ?
                                        <m.div {...fadeIn}>
                                            <FontAwesomeIcon onClick={OpenContent} id='headerSecInputIcon' icon={faChevronDown} />
                                        </m.div>
                                        :
                                        <m.div {...fadeIn}>
                                            <FontAwesomeIcon onClick={OpenContent} id='headerSecInputIcon' icon={faXmark} />
                                        </m.div>

                                    }

                                </div>
                                <Row className='flex w-[auto] p-0 row-cols-1 max-sm:ml-0 row-cols-lg-2 '>
                                    <Col lg={12} className=' max-sm:w-[100%] max-lg:justify-end max-sm:flex-col flex'>
                                        <div class="headerSecInputDiv max-sm:w-[100%] max-sm:h-[100%]">
                                            <input className='max-sm:w-[100%] w-[300px] h-[30px] max-sm:h-[100%]' type="text" placeholder="Enter GSN/IT/PAN/Darpan ID/FCRA No" />
                                            <span class="search-icon">
                                                <FontAwesomeIcon id='headerSecInputIcon' icon={faSearch} />
                                            </span>
                                        </div>
                                        <ParagraphComp text='NPO/NGO/ Charity Check' className='headerSecFont' />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </m.div>
                {IsOpenContent &&
                    <OpenHeader />
                }
            </Container>

                :
                <>
                    <Container className='ml-0 mr-0 w-[100%] max-w-[100%] p-0'>

                        <m.div className="py-[10px] px-3" >
                            <Row className='w-[100%] max-sm:ml-0'>
                                <Col lg={5} className='HeaderSecTopInner'>
                                    <ImageComp source='./Images/logo.png' className='h-[50px] max-sm:h-[40px]' />
                                </Col>
                                <Col className='HeaderSecTopInner2'>

                                    <div className='h-[auto] flex flex-col items-end'>
                                        <div className='flex gap-3 items-center' >
                                            <ParagraphComp text='GuideStar India at a glance' className='headerSecFont2light' />
                                            {!IsOpenContent ?
                                                <m.div >
                                                    <FontAwesomeIcon onClick={OpenContent} id='headerSecInputIcon' icon={faChevronDown} />
                                                </m.div>
                                                :
                                                <m.div >
                                                    <FontAwesomeIcon onClick={OpenContent} id='headerSecInputIcon' icon={faXmark} />
                                                </m.div>

                                            }

                                        </div>
                                        <Row className=' max-sm:ml-0 flex w-[auto] row-cols-1 row-cols-lg-2 '>
                                            <Col lg={12} className=' max-sm:w-[100%] max-lg:justify-end max-sm:flex-col flex'>
                                                <div class="headerSecInputDiv max-sm:w-[100%] max-sm:h-[100%]">
                                                    <input className='w-[300px] h-[30px] max-sm:w-[100%] max-sm:h-[100%]' type="text" placeholder="Enter GSN/IT/PAN/Darpan ID/FCRA No" />
                                                    <span class="search-icon">
                                                        <FontAwesomeIcon id='headerSecInputIcon' icon={faSearch} />
                                                    </span>
                                                </div>
                                                <ParagraphComp text='NPO/NGO/ Charity Check' className='headerSecFontlight' />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </m.div>
                    </Container>
                    {IsOpenContent &&
                        <OpenHeader />
                    }
                </>
            }
            <HeaderLiveNpos theme={theme === "light" ? "light" : ''} />
            <NavbarSec theme={theme === "light" ? "light" : ''} />
        </>
    )
}

export default HeaderSec