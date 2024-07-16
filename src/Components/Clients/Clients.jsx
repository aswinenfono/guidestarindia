import React, { memo, useRef } from "react";

// Libraries
import { Col, Row } from "react-bootstrap";
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { PropTypes } from "prop-types";

// Data
import { ClientData02 } from "./ClientsData";
import { ParagraphComp } from "../ParagraphComp/ParagraphComp";

const ClientSwitch = (params, item, i) => {
  switch (params.theme) {
    case "client-logo-style-06":
      return (
        <Col key={i} className={params.className}>
          <a target={item.target} className="inline-block" aria-label="clientlogo" href={item.link ? item.link : "#"}>
            <m.div {...{ ...params.animation, transition: { delay: i / 4, duration: 0.8 } }}>
              {item.img && <img width="148" height="43" className="w-[auto]" src={item.img} alt="clientlogo" />}
            </m.div>
          </a>
        </Col>
      )
    default:
      return (
        <Col key={i} className={params.className}>
          <m.div
            className="client-box relative w-full h-full  items-center inline-block " {...{ ...params.animation, transition: { delay: i / 4, duration: 0.8 } }}>
            <div className="h-[100px] flex items-center">
              <img className="relative w-[auto] max-h-[100%]  object-cover items-center" height="43" src={item.img} alt="clientlogo" />
            </div>
            {item?.UnderImg &&
              <div className="flex flex-col gap-3">
                <ParagraphComp Data={{ text: item.grade, className: `font-serif font-bold text-1xl uppercase ${item.grade === "Platinum" ? 'text-[#d1d8de]' : item.grade === "Gold" ? 'text-[#fecf27]' : item.grade === "Silver" ? 'text-[#d1d8de]' : item.grade === "Bronze" && 'text-[#eb8638]'}` }} />
              </div>
            }
          </m.div>
        </Col>
      )
  }
}

const ClientCarouselSwitch = (params, item, i) => {
  switch (params.theme) {
    case "client-logo-style-06":
      return (
        <SwiperSlide key={i}>
          <div className="h-[100px] flex items-center">
            <img className="relative w-[auto] max-h-[100%]  object-cover items-center" width="148" height="43" src={item.img} alt="clientlogo" />
          </div>
          {item.UnderImg &&
            <div className="flex flex-col gap-3">
              <ParagraphComp Data={{ text: item.grade, className: `font-serif font-bold text-1xl ${item.grade === "Platinum" ? 'text-[#d1d8de]' : item.grade === "Gold" ? 'text-[#fecf27]' : item.grade === "Silver" ? 'text-[#d1d8de]' : item.grade === "Bronze" && 'text-[#eb8638]'}` }} />
            </div>
          }
        </SwiperSlide>
      )
    default:
      return (
        <SwiperSlide key={i}>
          <div className="client-box">
            <div className="h-[100px] flex items-center">
              <img className="relative w-[auto] max-h-[100%]  items-center" width="148" height="43" src={item.img} alt="clientlogo" />
            </div>
            {item.UnderImg &&

              <div className="flex flex-col gap-3">
                <ParagraphComp Data={{ text: item.grade, className: `font-serif font-bold text-1xl ${item.grade === "Platinum" ? 'text-[#d1d8de]' : item.grade === "Gold" ? 'text-[#fecf27]' : item.grade === "Silver" ? 'text-[#d1d8de]' : item.grade === "Bronze" && 'text-[#eb8638]'}` }} />
              </div>
            }
          </div>
        </SwiperSlide>
      )
  }
}

const Clients = (props) => {
  const swiperRef = useRef(null);
  return (
    props.carousel === true ? (
      <m.div className={`client-slider-wrapper relative${props.className ? ` ${props.className}` : ""}`} {...props.animation}>
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={
            {
              delay: 1000

            }
          }
          className={props.theme}
          modules={[Pagination, Autoplay]}
          {...props.carouselOption}
        >
          {
            props.data.map((item, i) => {
              return ClientCarouselSwitch(props, item, i)
            })
          }
        </Swiper>
        {
          props.carouselOption && (
            <>
              <div onClick={() => swiperRef.current.swiper.slidePrev()} className="swiper-button-prev absolute"></div>
              <div onClick={() => swiperRef.current.swiper.slideNext()} className="swiper-button-next absolute"></div>
            </>
          )
        }
      </m.div>
    ) : (
      <Row className={`${props.grid} ${props.theme}`}>
        {props.data.map((item, i) => ClientSwitch(props, item, i))}
      </Row>
    )
  );
}

Clients.defaultProps = {
  data: ClientData02,
  animationDelay: 0.2,
  theme: "client-logo-style-01",
}

Clients.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string,
      target: PropTypes.string,
      link: PropTypes.string
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  theme: PropTypes.string,
  grid: PropTypes.string,
  carousel: PropTypes.bool,
  carouselOption: PropTypes.object,
}

export default memo(Clients);