import React from 'react'
import HeaderCompo from '../HeaderComp/HeaderCompo'
import { ImageComp } from '../ImageCompo/ImageComp'
import { Col, Row } from 'react-bootstrap'
import { m } from "framer-motion";
import { fadeInDown } from '../../../Functions/GlobalAnimations';
const OpenHeader = () => {
    return (
        <>
            <m.div className='py-3 '{...fadeInDown}>
                <Row className='flex items-center sm:justify-center row-cols-1 row-cols-lg-1 row-cols-md-2' >
                    <Col className='max-sm:flex max-sm:justify-center' lg={1}>
                        <ImageComp Data={{ source: '/images/Npo icon 1.png', className: 'h-[50px]  ' }} />
                    </Col>
                    <Col className='max-sm:flex max-sm:justify-center' lg={3}>
                        <ul className='HeaderSecUl'>
                            <li> <a href="#/">Theory of Change and Impact</a> </li>
                            <li> <a href="#/">People, Partners and Supporters</a> </li>
                        </ul>
                    </Col>
                    <Col className='max-sm:flex max-sm:justify-center' lg={3}>
                        <ul className='HeaderSecUl'>
                            <li><a href="#/">How to Discover/ Support NPOs</a> </li>
                            <li> <a href="#/">How to Enhance Credibility of your NPO</a> </li>
                        </ul>
                    </Col>
                    <Col className='max-sm:flex max-sm:justify-center' lg={3}>
                        <ul className='HeaderSecUl'>
                            <li>
                                <a href="#/">Research Reports & Insights</a></li>
                            <li>
                                <a href="#/">Statutory and FCRA Compliance</a> </li>
                        </ul>
                    </Col>

                    <Col className='max-sm:flex max-sm:justify-center' lg={2}>
                        <div className='flex flex-col gap-3 max-sm:justify-center'>
                            <HeaderCompo Data={{ tagType: 'h6', text: 'Contact us', className: 'text-lg  text-black mb-0' }} />
                            <div className='flex gap-4 headerSecInputIcons2 items-center '>
                                <i class="fa-regular fa-message"></i>
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                            <div className='flex gap-4 headerSecInputIcons2 items-center'>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </m.div>
        </>
    )
}

export default OpenHeader