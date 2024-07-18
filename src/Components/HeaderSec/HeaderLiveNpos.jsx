import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeaderCompo from '../HeaderComp/HeaderCompo'
import { m } from "framer-motion";
const HeaderLiveNpos = ({ theme }) => {
    if (theme !== "light") {
        return (
            <>
                <m.div className='bg-[#004878] h-auto items-center p-2' >
                    <Container >
                        <Row>
                            <Col lg={3} className='flex gap-1'>
                                <HeaderCompo Data={{ tagType: 'h6', className: 'HeaderLiveNposHeader', text: '12,301' }} />
                                <HeaderCompo Data={{ tagType: 'h6', className: 'HeaderLiveNposHeader2', text: 'Live NPOs' }} />
                            </Col>
                            <Col>
                                <HeaderCompo Data={{ tagType: 'h6', className: 'HeaderLiveNposHeader3', text: `India's most exhaustive information repository of Not-for-Profit Organization (NPOs/NGOs)` }} />
                            </Col>
                        </Row>
                    </Container >
                </m.div>
            </>

        )
    } else {
        return (
            <Container className='ml-0 mr-0 w-[100%] max-w-[100%] p-0'>
                <m.div className='bg-[#4472C4] h-auto items-center p-2' >
                    <Row>
                        <Col lg={3} className='flex gap-1'>
                            <div className="flex items-start">
                                <HeaderCompo Data={{ tagType: 'h6', className: 'HeaderLiveNposHeader', text: '12,301' }} />
                                <HeaderCompo Data={{ tagType: 'h6', className: 'HeaderLiveNposHeader2Light', text: 'Live NPOs' }} />
                            </div>
                        </Col>
                        <Col>
                            <div className="flex flex-1 justify-center">
                                <HeaderCompo Data={{ tagType: 'h6', className: 'HeaderLiveNposHeader3light', text: `India's most exhaustive information repository of Not-for-Profit Organization (NPOs/NGOs)` }} />
                            </div>
                        </Col>
                    </Row>
                </m.div>
            </Container >
        )

    }
}

export default HeaderLiveNpos