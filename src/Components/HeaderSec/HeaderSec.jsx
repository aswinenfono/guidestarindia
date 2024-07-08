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
const HeaderSec = ({ theme }) => {
    const [IsOpenContent, setIsOpenContent] = useState(false)


    const OpenContent = () => {
        setIsOpenContent(!IsOpenContent)
    }

    console.log("theme>>>>", theme)
    return (
        <>
            {theme !== "light" ? <Container>
                <m.div className="py-[10px]" {...fadeIn}>
                    <Row className=''>
                        <Col lg={6} className='HeaderSecTopInner'>
                            <img src="/images/logo.png" alt="" />
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
                                <div className='flex gap-1 w-[auto]'>
                                    <div>
                                        <div class="headerSecInputDiv">
                                            <input type="text" placeholder="Enter GSN/IT/PAN/Darpan ID/FCRA No" />
                                            <span class="search-icon">
                                                <FontAwesomeIcon id='headerSecInputIcon' icon={faSearch} />
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <ParagraphComp Data={{ text: 'NPO/NGO/ Charity Check', className: 'headerSecFont' }} />
                                    </div>
                                </div>
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

                        <m.div className="px-[30px] py-2" {...fadeIn}>
                            <Row className=''>
                                <Col lg={6} className='HeaderSecTopInner'>
                                    <img src="/images/logo.png" alt="" />
                                </Col>
                                <Col className='HeaderSecTopInner2'>

                                    <div className='h-[auto] flex flex-col items-end'>
                                        <div className='flex gap-3 items-center' >
                                            <ParagraphComp Data={{ text: 'GuideStar India at a glance', className: 'headerSecFont2light' }} />
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
                                        <div className='flex gap-1 w-[auto]'>
                                            <div>
                                                <div class="headerSecInputDiv">
                                                    <input type="text" placeholder="Enter GSN/IT/PAN/Darpan ID/FCRA No" />
                                                    <span class="search-icon">
                                                        <FontAwesomeIcon id='headerSecInputIcon' icon={faSearch} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <ParagraphComp Data={{ text: 'NPO/NGO/ Charity Check', className: 'headerSecFontlight' }} />
                                            </div>
                                        </div>
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