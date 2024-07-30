import React from 'react'
import "./UserInfoSec.css"
import Testimonials from '../../Testimonials/Testimonials'
import { Col, Container, Row } from 'react-bootstrap'
import { TestimonialsData03 } from '../../Testimonials/TestimonialsData'
import { fadeIn } from "../../..//Functions/GlobalAnimations";

const UserInfoSec = () => {
    return (<>
        <section className="py-[130px] max-sm:py-[70px] overflow-hidden bg-gray-100 lg:py-[90px] md:py-[75px] sm:py-[50px]">
            <Container>
                <Row className="justify-center">
                    <Col
                        lg={10}
                        md={8}
                        sm={9}
                        className="text-center max-sm:mb-[50px] mb-[100px] md:mb-16"
                    >
                        <h2 className="heading-5 max-sm:text-3xl font-extrabold text-[#262b35] tracking-[-1px] mb-[15px] infoSecFont">
                            Know how institutions and individuals are using GuideStar India
                        </h2>
                        <p className="w-[100%] font-serif max-sm:text-lg text-black mx-auto lg:w-[95%] sm:w-full">
                            Our NPO information, due diligence and insights are the differentiator for strategic philanthropy, organization development and ecosystem system building
                        </p>
                    </Col>
                </Row>
                <Row className="justify-center">
                    <Col md={12} sm={8}>
                        <Testimonials
                            grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-[30px] justify-center eventsconference-testimonials"
                            theme="testimonials-style-03"
                            data={TestimonialsData03}
                            animation={fadeIn}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    )
}

export default UserInfoSec