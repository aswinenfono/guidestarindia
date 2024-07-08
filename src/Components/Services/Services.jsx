import React, { memo } from 'react'

// Libraries
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { PropTypes } from "prop-types";
import { m } from "framer-motion"

// Data
import { serviceData1 } from './ServicesData'

// css
import "../../Assets/scss/components/_services.scss"
import { ParagraphComp } from '../ParagraphComp/ParagraphComp';

const Services = (props) => {
    return (
        <Row className={props.grid}>
            {
                props.data.map((item, i) => {
                    return (
                        <m.div key={i} className={`col px-[15px]${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay } }}>
                            <div className={props.theme}>
                                <div className="img-wrapper flex h-[260px] bg-[#ede7e7] items-center  justify-center bg- w-[100%]">
                                    {props.theme === "service-style-05" && <span className="text-xmd">{i + 1 >= 10 ? '' : '0'}{i + 1}</span>}
                                    {item.img && <img className="" src={item.img} alt="service-style-5" />}
                                    {props.theme === "service-style-01" && <div className='services-box-hover'>
                                        {(item.icon || item.link) && <Link aria-label="services" to={item.link ? item.link : "#"}><i className={item.icon}></i></Link>}
                                    </div>}
                                </div>
                                <div className='service-style justify-between h-[350px] '>
                                    <div className='h-[230px]'>
                                        {props.theme === "service-style-03" && <span className='verticalline'></span>}
                                        {item.name && <span className="title font-bold  text-black block font-serif mb-[10px]">{item.name}</span>}
                                        {item.content && <p className='text-black font-serif'>{item.content}</p>}
                                    </div>
                                    {(props.theme === "service-style-02" || props.theme === "service-style-05") && <div className='info-service'>
                                        {(item.linkTitle || item.icon) && <Link aria-label="services" to={item.link ? item.link : "#"} className=" ServicesLinkHOver no-underline font-bold text-sm uppercase block">Name
                                            <div className='flex gap-2  items-center'>
                                                <ParagraphComp Data={{ className: "text-1xl font-bold  mb-0 ", text: item.linkTitle, }} />
                                                <i className={item.icon}></i>
                                            </div>
                                        </Link>}
                                    </div>
                                    }
                                </div>
                            </div>
                        </m.div>
                    )
                })
            }
        </Row>
    )
}

Services.defaultProps = {
    data: serviceData1,
    theme: "service-style-01",
    animationDelay: 0.2
}

Services.propTypes = {
    grid: PropTypes.string,
    theme: PropTypes.string,
    animationDelay: PropTypes.number,
    animation: PropTypes.object,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            icon: PropTypes.string,
            title: PropTypes.string,
            img: PropTypes.string,
            content: PropTypes.string,
            link: PropTypes.string,
            linkTitle: PropTypes.string,
        })
    ),
}


export default memo(Services)