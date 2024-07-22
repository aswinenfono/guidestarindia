import React from 'react'
import { fadeIn } from '../../../Functions/GlobalAnimations'
import { Col, Container, Row } from 'react-bootstrap'
import { m } from "framer-motion"
import Services from '../../Services/Services'
import { IssuesData1 } from './IssueSecData'
const IssueSec = () => {
    return (
        <>
            <m.section className="bg-[#f7f7f7] max-sm:py-[70px] py-[160px] lg:py-[120px] md:py-[95px]  xs:py-[50px]" {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <Col md={12} className="text-center mb-[7%]">
                            <h6 className="text-black font-extrabold max-sm:text-3xl text-4xl">Understand needs and issues from the ground</h6>
                        </Col>
                    </Row>
                    <Services grid="row-cols-1 row-cols-lg-3 row-cols-md-2 gap-y-10 justify-center" theme='service-style-02' className="" data={IssuesData1} animation={fadeIn} />
                </Container>
            </m.section>
        </>
    )
}

export default IssueSec