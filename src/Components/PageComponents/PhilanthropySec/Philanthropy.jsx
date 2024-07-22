import React from 'react'
import "./Philanthropy.css"
import { Col, Container, Row } from 'react-bootstrap'
import InfoBannerStyle01 from "../../InfoBanner/InfoBannerStyle01"
import { fadeIn } from '../../../Functions/GlobalAnimations'
import { infoData } from './PhilanthropyData'
const Philanthropy = () => {
    return (
        <>
            <section className="py-[100px] max-sm:py-[70px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
                <Container>
                    <Row className="justify-center">
                        <Col md={6} lg={9} className="text-center mb-16 md:mb-12">
                            <h2 className="heading-5 max-sm:3xl  font-extrabold text-[#353536] -tracking-[1px]">Power your philanthropy</h2>
                        </Col>
                    </Row>
                    <InfoBannerStyle01 animation={fadeIn} grid="row row-cols-1 row-cols-md-2 row-cols-lg-4 gap-y-5" className="justify-center" data={infoData} />
                </Container>
            </section>
        </>
    )
}

export default Philanthropy