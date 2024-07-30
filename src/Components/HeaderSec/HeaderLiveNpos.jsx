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
                        <Row className='max-sm:ml-0 w-[100%]'>
                            <Col lg={3} className='flex gap-1'>
                                <HeaderCompo tagType='h6' className='HeaderLiveNposHeader' text='12,301' />
                                <HeaderCompo tagType='h6' className='HeaderLiveNposHeader2 text-sm' text='Live NPOs' />
                            </Col>
                            <Col>
                                <HeaderCompo tagType='h6' className='HeaderLiveNposHeader3 max-sm:text-lg max-sm:text-center' text={`India's most exhaustive information repository of Not for Profit organization (NPOs/NGOs)`} />
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
                    <Row className='max-sm:ml-0 w-[100%]'>
                        <Col lg={4} className='flex gap-1'>
                            <div className="flex items-start">
                                <HeaderCompo tagType='h6' classNam='HeaderLiveNposHeader' text='12,301' />
                                <HeaderCompo tagType='h6' className='HeaderLiveNposHeader2Light' text='Live NPOs' />
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="flex flex-1 w-[100%]  justify-center">
                                <HeaderCompo tagType='h6' className='HeaderLiveNposHeader3light max-sm:text-lg max-sm:text-center' text={`India's most exhaustive information repository of Not for Profit organization (NPOs/NGOs)`} />
                            </div>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </m.div>
            </Container >
        )

    }
}

export default HeaderLiveNpos