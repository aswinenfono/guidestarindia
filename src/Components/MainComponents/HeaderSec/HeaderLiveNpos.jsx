import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeaderCompo from '../HeaderComp/HeaderCompo'
import { m } from "framer-motion";
import { fadeIn } from '../../../Functions/GlobalAnimations';
const HeaderLiveNpos = ({ theme }) => {
    if (theme !== "light") {
        return (
            <>
                <m.div className='bg-[#004878] h-auto items-center p-2' {...fadeIn}>
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
            <m.div className='bg-[#4472C4] h-auto items-center p-2' {...fadeIn}>
                <Row>
                    <Col className='flex gap-1 h-auto'>
                        <div className="flex items-start">
                            <HeaderCompo Data={{ tagType: 'h6', className: 'HeaderLiveNposHeader', text: '12,301' }} />
                            <HeaderCompo Data={{ tagType: 'h6', className: 'HeaderLiveNposHeader2Light', text: 'Live NPOs' }} />
                        </div>
                        <div className="flex flex-1 justify-center">
                            <HeaderCompo Data={{ tagType: 'h6', className: 'HeaderLiveNposHeader3light', text: `India's most exhaustive information repository of Not-for-Profit Organization (NPOs/NGOs)` }} />
                        </div>
                    </Col>
                </Row>
            </m.div>

        )

    }
}

export default HeaderLiveNpos