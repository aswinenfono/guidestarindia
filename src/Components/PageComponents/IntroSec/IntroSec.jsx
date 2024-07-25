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
            <Container >
                <Row className='max-md:h-auto max-lg:h-auto max-sm:h-auto sm:p-[10px] h-[60vh]  justify-between items-center gap-4'>
                    <Col lg={8} className='flex flex-col gap-6'>
                        <HeaderCompo Data={{ className: "IntroSecHeader max-md:text-5xl max-sm:leading-[35px] max-sm:text-[26px] max-md:leading-[40px]", text: data?.mainHeadding, tagType: 'h1' }} />
                        <ParagraphComp Data={{ className: "IntroSecParagraph max-sm:text-xl max-md:text-2xl ", text: data?.subHeadding }} />
                        {/* <InputCompo Data={{ className: "IntroSecInput", placeholder: "", placeholder: "" }} /> */}
                        <div className='flex flex-col gap-3'>
                            <Row className=' row-cols-1 row-cols-lg-2 gap-y-2'>
                                <Col lg={7} class="">
                                    <div className='IntroSecInputContainer'>
                                        <input type="text" placeholder="Enter organisation name or keyword " className="IntroSecInput max-sm:text-xl max-sm:h-[40px]" />
                                        <span class="search-icon">
                                            <FontAwesomeIcon id='IntroSecInputContainerIcon' icon={faSearch} />
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={5} className='flex gap-2 max-md:justify-start justify-end'>
                                    <ButtonComp Data={{ className: "IntroSecSearchButton max-sm:text-xl max-sm:h-[40px] rounded-md", text: 'Search' }} />
                                    <ButtonComp Data={{ className: "IntroSecSearchButton2 max-sm:text-xl max-sm:h-[40px] rounded-md", text: 'Register for free' }} />
                                </Col>
                            </Row>
                            <div className='flex justify-end max-md:justify-start '>
                                <a className='IntroSecAtag max-sm:text-lg' href="#/">Why register for more free searches?</a>
                            </div>
                        </div>
                    </Col>

                    <Col className='introimgalign max-sm:h-auto max-sm:w-[100%] max-sm:justify-center max-lg:justify-center w-[35%] flex h-[100%] items-center'>
                        <ImageComp Data={{ source: data?.MainSideImg, className: "IntroSecMainSideImg max-sm:h-[250px]" }} />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
