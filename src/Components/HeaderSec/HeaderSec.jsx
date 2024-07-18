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
                    <Row className=''>
                        <Col lg={6} className='HeaderSecTopInner'>
                            <ImageComp Data={{ source: './Images/logo.png', className: 'h-[50px] max-sm:h-[40px]' }} />
                        </Col>
                        <Col className='HeaderSecTopInner2'>

                            <div className='h-[auto] flex flex-col items-end'>
                                <div className='flex gap-3 items-center' >
                                    <ParagraphComp Data={{ text: 'GuideStar India at a glance', className: 'headerSecFont2' }} />
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
                                <Row className='flex w-[auto] row-cols-1 row-cols-lg-2 '>
                                    <Col lg={7} className='max-lg:justify-end flex'>
                                        <div class="headerSecInputDiv">
                                            <input type="text" placeholder="Enter GSN/IT/PAN/Darpan ID/FCRA No" />
                                            <span class="search-icon">
                                                <FontAwesomeIcon id='headerSecInputIcon' icon={faSearch} />
                                            </span>
                                        </div>
                                    </Col>
                                    <Col className='max-lg:justify-end flex' lg={5}>
                                        <ParagraphComp Data={{ text: 'NPO/NGO/ Charity Check', className: 'headerSecFont' }} />
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
                            <Row className=''>
                                <Col lg={5} className='HeaderSecTopInner'>
                                    <ImageComp Data={{ source: './Images/logo.png', className: 'h-[50px] max-sm:h-[40px]' }} />
                                </Col>
                                <Col className='HeaderSecTopInner2'>

                                    <div className='h-[auto] flex flex-col items-end'>
                                        <div className='flex gap-3 items-center' >
                                            <ParagraphComp Data={{ text: 'GuideStar India at a glance', className: 'headerSecFont2light' }} />
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
                                        <Row className='flex w-[auto] row-cols-1 row-cols-lg-2 '>
                                            <Col lg={12} className='max-lg:justify-end max-sm:flex-col flex'>
                                                <div class="headerSecInputDiv">
                                                    <input type="text" placeholder="Enter GSN/IT/PAN/Darpan ID/FCRA No" />
                                                    <span class="search-icon">
                                                        <FontAwesomeIcon id='headerSecInputIcon' icon={faSearch} />
                                                    </span>
                                                </div>
                                                <ParagraphComp Data={{ text: 'NPO/NGO/ Charity Check', className: 'headerSecFontlight' }} />
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