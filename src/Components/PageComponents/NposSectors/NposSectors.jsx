import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { m } from 'framer-motion'
import { fadeIn } from '../../../Functions/GlobalAnimations'
import { SectorData } from './NposSector'
import { ImageComp } from '../../ImageCompo/ImageComp'
import "./NposSectors.css"
const NposSectors = () => {
    return (
        <>
            <m.section className="py-[160px] max-sm:py-[70px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs;py-[50px]" {...fadeIn}>
                <Container>
                    <Row className=''>
                        <Col className="mb-[4%]">
                            <h6 className="font-extrabold text-black text-center max-sm:text-3xl text-4xl mb-[25px] lg:mb-[15px]">Learn about the NPO Sector in India</h6>
                        </Col>
                    </Row>
                    <Row>
                        {SectorData.map(ele =>
                            <Col lg={4} className="px-[15px] md:mb-[15px]">
                                <div className="bg-lightgray p-[40px] flex flex-col gap-4 sm:p-[30px]">
                                    <div className='flex justify-center'>
                                        <ImageComp Data={{ source: ele?.img, className: "SectorDataImg max-sm:h-[100px]" }} />
                                    </div>
                                    <p className='text-1xl max-sm:text-lg text-black font-bold font-serif'> {ele?.content}</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </Container>
            </m.section>

        </>
    )
}

export default NposSectors