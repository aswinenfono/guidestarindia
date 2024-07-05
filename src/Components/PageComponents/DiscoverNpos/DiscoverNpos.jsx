import React from 'react'
import "./DiscoverNpos.css"
import { Col, Container, Row } from 'react-bootstrap'
import ProcessStep from "../../ProcessStep/ProcessStep"
import { fadeIn } from '../../../Functions/GlobalAnimations'
import { ProcessStepData01 } from '../../ProcessStep/ProcessStepData'
export const DiscoverNpos = () => {
    return (
        <>
            <section className="py-[130px] bg-gray-100 lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden">
                <Container >
                    <Row className="justify-center ">
                        <Col xl={5} sm={8} className="text-center mb-24 font-serif sm:mb-12">
                            <h5 className="text-darkgray text-gray-800 font-extrabold inline-block">Discover NPOs across India</h5>
                        </Col>
                        <ProcessStep grid="row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-10"
                            theme='process-step-style-01' className=""
                            data={ProcessStepData01} animation={fadeIn} />
                    </Row>
                </Container>
            </section>
        </>
    )
}
