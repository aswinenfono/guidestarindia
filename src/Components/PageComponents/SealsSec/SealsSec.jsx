import React from 'react'
import "./SealsSec.css"
import HeaderCompo from '../../HeaderComp/HeaderCompo'
import { ImageComp } from '../../ImageCompo/ImageComp'
import { Data } from './SealSecData'
import { Col, Row } from 'react-bootstrap'
import { m } from "framer-motion"
import { fadeIn } from '../../../Functions/GlobalAnimations'
import { ParagraphComp } from '../../ParagraphComp/ParagraphComp'
export const SealsSec = () => {
    return (
        <>
            <m.div className='SealsSec max-sm:py-[70px] px-[10%] py-5 text-center ' {...fadeIn}>
                <div>
                    <HeaderCompo tagType='h1' className="SealsSecHeader max-sm:text-3xl max-md:text-4xl" text={Data?.headding} />
                    <ParagraphComp Data={{ className: 'max-sm:text-lg', text: 'Based on GuideStar India’s 7 pillar assessment rubric covering Situation Analysis, Theory of Change, Programme Intervention & Resilience, Infrastructure, Finance & Compliance, Governance & Accountability, Evidence of Impact, Learning & Reflection' }} />
                </div>

                <Row className='row-cols-1 gap-y-5 row-cols-lg-4 row-cols-sm-2'>
                    {
                        Data?.MapItems?.map(ele =>
                            <Col className='SealsSecCard'>
                                <ImageComp Data={{ source: ele?.image, className: "SealsSecCardImg max-sm:h-[100px]" }} />
                                <HeaderCompo className={`SealsSecCardHeader text-2xl ${ele?.seal === 'PLATINUM' ? 'text-[#a3bcc7]' : ele?.seal === 'GOLD' ? 'text-[#ffcc28]' : ele?.seal === 'SILVER' ? 'text-[#94a0a8]' : ele?.seal === 'BRONZE' ? 'text-[#a05822]' : ''} max-md:text-2xl`} text={ele?.seal} tagType='h3' />
                            </Col>
                        )
                    }
                </Row>
            </m.div>
        </>
    )
}
