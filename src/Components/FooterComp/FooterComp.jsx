import React from 'react'
import { FooterUnderData, FooterData } from './FooterData'
import FooterMenu, { Footer } from "../Footers/Footer"
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ImageComp } from '../ImageCompo/ImageComp'
import "./FooterComp.css"
import { ParagraphComp } from '../ParagraphComp/ParagraphComp'
const FooterComp = (props, { theme }) => {
    console.log("lightt>>>>>>>", theme, props)
    return (
        <>
            <Footer className={`${props.className ? ` ${props.className}` : ""}`} theme={props.theme}>
                <Container className='ml-0 mr-0 w-[100%] max-w-[100%]'>
                    <div className="py-[-7%] lg:py-[-8%] sm:py-[50px]">
                        <Row md={4} sm={3} className="justify-between md:justify-center">
                            <Col className="m-0 md:text-center sm:text-start" lg={{ offSet: 0, span: 3, order: 0 }} sm={{ span: 6, order: 5, offSet: 2 }} md={{ span: 4, offset: 0, order: 5 }} xs={{ span: 12, order: 5, offSet: 2 }}>
                                <Link to="/" className="text-slateblue mb-[15px] mt-[5px] inline-block">
                                    {props.logo && <img loading="lazy" src={props.logo} alt="logo" width="111" height="36" />}
                                </Link>
                                <div className='flex flex-col items-center gap-4'>
                                    <ImageComp Data={{ source: './Images/logo.png', className: 'w-[80%] max-w-[100%] object-cover max-h-[100%]' }} />
                                    <div className='FooterCompIcons flex items-center gap-3 max-md:p-3'>
                                        <i class="fa-regular fa-message"></i>
                                        <i class="fa-brands fa-linkedin"></i>
                                        <i class="fa-brands fa-youtube"></i>
                                        <i class="fa-brands fa-facebook"></i>
                                        <i class="fa-brands fa-instagram"></i>
                                        <i class="fa-brands fa-whatsapp"></i>
                                    </div>
                                </div>
                            </Col>
                            <FooterMenu data={FooterData.slice(0, 4)} lg={{ span: 2, offSet: 1, order: 0 }} md={{ span: 3, order: 0 }} sm={{ span: 4, offSet: 1, order: 2 }} className="xl:px-[15px] md:mb-[40px] xs:mb-[25px]" titleClass="capitalize" />
                        </Row>
                    </div>
                </Container>
            </Footer>
            <div className={`h-auto ${props?.theme === "light" ? 'bg-[#4472C4]' : 'bg-[#004878]'} gap-4 p-[10px] justify-center flex flex-wrap`}>
                {FooterUnderData.map(ele =>
                    <ParagraphComp Data={{ className: 'text-1xl text-white max-sm:text-lg', text: ele }} />
                )}
            </div >
            <div className='h-auto bg-white gap-4 p-[10px] justify-center flex flex-wrap'>
                <ParagraphComp Data={{ className: 'text-sm text-black', text: "GuideStar India is a programme of Civil Society Information Services India (CSISI), a public charitable trust registered in India with 80G and FCRA registration. ©2024 CSISI.Support GuideStar India." }} />
            </div>
        </>
    )
}

export default FooterComp