import React from 'react'
import "./SealsSec.css"
import HeaderCompo from '../../MainComponents/HeaderComp/HeaderCompo'
import { ImageComp } from '../../MainComponents/ImageCompo/ImageComp'
import { ParagraphComp } from '../../MainComponents/ParagraphComp/ParagraphComp'
import { Data } from './SealSecData'
import { Col, Row } from 'react-bootstrap'
import { m } from "framer-motion"
import { fadeIn } from '../../../Functions/GlobalAnimations'
export const SealsSec = () => {
    return (
        <>
            <m.div className='SealsSec px-[10%] py-5 text-center ' {...fadeIn}>
                <HeaderCompo Data={{ tagType: 'h1', className: "SealsSecHeader ", text: Data?.headding }} />
                <Row className='row-cols-1 row-cols-lg-4 row-cols-sm-2'>
                    {
                        Data?.MapItems?.map(ele =>
                            <Col className='SealsSecCard'>
                                <ImageComp Data={{ source: ele?.image, className: "SealsSecCardImg" }} />
                                <HeaderCompo Data={{ className: 'SealsSecCardHeader', text: ele?.seal, tagType: 'h3' }} />
                                <ParagraphComp Data={{ text: ele?.discription, className: 'SealsSecCardParagraph' }} />
                            </Col>
                        )
                    }
                </Row>
            </m.div>
        </>
    )
}
