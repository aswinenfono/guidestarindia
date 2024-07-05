import React, { memo } from 'react'

// Libraries
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { m } from "framer-motion"
import { PropTypes } from "prop-types";
import '../../Components/PageComponents/PhilanthropySec/Philanthropy.css'
// Data
import { InfoBannerData01 } from './InfoBannerData'

const InfoBannerStyle01 = (props) => {
    return (
        <Row className={`${props.className ? ` ${props.className}` : ""}${props.grid ? ` ${props.grid}` : ""}`}>
            {
                props.data.map((item, i) => {
                    return (
                        <m.div key={i} className="col" {...{ ...props.animation, transition: { delay: i * props.animationDelay } }}>
                            <div className="InfoBannerStyleAfterHover justify-between h-[500px] relative flex gap-3 flex-col  box-shadow-small p-10">
                                <div className='h-auto InfoBannerStyleInnerdivHeight flex gap-3 flex-col'>
                                    <div className='flex '>
                                        <img className=' InfoBannerStyleImgstyle' src={item?.img} alt="" />
                                        <img className='InfoBannerStyleImgstyleHov' src={item?.imgHov} alt="" />
                                    </div>
                                    <span className="InfoBannerTitileeHov text-lg font-bold  block mb-[10px]">{item.title}</span>
                                    <p className="mb-[25px] font-serif InfoBannerTitileeHov">{item.content}</p>
                                    {item?.update && <p className="mb-[25px] text-amber-800 uppercase font-bold font-serif InfoBannerTitileeHov">{item?.update}</p>}
                                </div>
                                <Link aria-label="link" className="infoBannerAfterHov h-10 leading-snug font-serif font-semibold text-sm text-[#333045] hover:text-basecolor uppercase  flex items-center" to={item.btnLink}>{item.btnName}</Link>
                            </div>
                        </m.div>
                    )
                })
            }
        </Row>
    )
}

InfoBannerStyle01.defaultProps = {
    data: InfoBannerData01,
    animationDelay: 0.2
}

InfoBannerStyle01.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            img: PropTypes.string,
            title: PropTypes.string,
            content: PropTypes.string,
            price: PropTypes.string,
            btnName: PropTypes.string,
            btnLink: PropTypes.string,
        })
    ),
    animation: PropTypes.object,
    animationDelay: PropTypes.number,
}


export default memo(InfoBannerStyle01)
