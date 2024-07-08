import React from 'react'
import "./IntroSec.css"
import HeaderCompo from '../../HeaderComp/HeaderCompo'
import { data } from './IntroData'
import { ParagraphComp } from '../../ParagraphComp/ParagraphComp'
import { ImageComp } from '../../ImageCompo/ImageComp'
// import { InputCompo } from '../InputCompo/InputCompo'
// import ButtonComp from '../ButtonComp/ButtonComp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ButtonComp from '../../ButtonComp/ButtonComp'
import { Col, Container, Row } from 'react-bootstrap'
export const IntroSec = () => {

    return (
        <>
            {/* <ButtonComp Data={{ name: "search", className: "IntroSearchButton", text: "search" }} /> */}
            <Container>
                <Row className='max-md:h-auto max-lg:h-auto max-sm:h-auto sm:p-[10px] h-[60vh] justify-between items-center gap-4'>
                    <Col lg={8} className='flex flex-col gap-6'>
                        <HeaderCompo Data={{ className: "IntroSecHeader", text: data?.mainHeadding, tagType: 'h1' }} />
                        <ParagraphComp Data={{ className: "IntroSecParagraph", text: data?.subHeadding }} />
                        {/* <InputCompo Data={{ className: "IntroSecInput", placeholder: "", placeholder: "" }} /> */}
                        <div className='flex flex-col gap-3'>
                            <div className='IntroSecHeaderAlignBoxes'>
                                <div class="IntroSecInputContainer">
                                    <input type="text" placeholder="Enter organisation name or keyword" className="IntroSecInput" />
                                    <span class="search-icon">
                                        <FontAwesomeIcon id='IntroSecInputContainerIcon' icon={faSearch} />
                                    </span>
                                </div>
                                <div className='flex IntroSecSearchAlignButtons '>
                                    <ButtonComp Data={{ className: "IntroSecSearchButton", text: 'Search' }} />
                                    <ButtonComp Data={{ className: "IntroSecSearchButton2", text: 'Register for free' }} />
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <a className='IntroSecAtag' href="#/">Why register for more free searches?</a>
                            </div>
                        </div>
                    </Col>

                    <Col className='introimgalign max-sm:h-auto max-sm:w-[100%] max-sm:justify-center max-lg:justify-center w-[35%] flex h-[100%] items-center'>
                        <ImageComp Data={{ source: data?.MainSideImg, className: "IntroSecMainSideImg" }} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
