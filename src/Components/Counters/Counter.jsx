import React, { memo, useEffect } from "react";

// Libraries
import { m } from "framer-motion";
import { Row } from "react-bootstrap";
import { PropTypes } from "prop-types";
import CountUp from "react-countup";

// Data
import { CounterData01 } from "./CounterData";

// css
import "../../Assets/scss/components/_counter.scss"
import { ImageComp } from "../ImageCompo/ImageComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Counter = (props) => {
  useEffect(() => {
    let vertical_counters = document.querySelectorAll(".vertical-counter");
    let height = 0;
    vertical_counters.forEach(item => {
      height = item.querySelector("li").clientHeight;
      item.style.height = `${height}px`;
    });

    window.addEventListener('resize', () => {
      let vertical_counters = document.querySelectorAll(".vertical-counter");
      vertical_counters.forEach(item => {
        height = item.querySelector("li").clientHeight;
        item.style.height = `${height}px`;
      });
    })
  }, [])

  return (
    <Row className={props.grid}>
      {props.theme === "counter-style-02" || props.theme === "counter-style-03"
        ? props.data.map((item, i) => {
          let number = item.number.text && item.number.text.toString();
          let splitted_num = number && number.split("");
          return (
            <m.div
              key={i}
              className={`${props.theme} ${props.className} relative`}
              {...{ ...props.animation, transition: { delay: i * props.animationDelay } }}
            >
              <props.as className={`vertical-counter inline-flex overflow-hidden mb-0${item.number.class ? ` ${item.number.class}` : ""}`} >
                {splitted_num.map((item, i) => {
                  return (
                    <span key={i} className="vertical-counter-number text-center font-serif tracking-[-0.5px]" data-to={item}>
                      <m.ul
                        className="p-0 font-semibold text-center"
                        initial={{ y: 0 }}
                        whileInView={{ y: `-${item * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ ease: "linear", duration: props.duration }}
                      >
                        <li>0</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                      </m.ul>
                    </span>
                  );
                })}
              </props.as>
              {props.postfix_sign && (<span className="postfix_sign">{props.postfix_sign}</span>)}
              <div>
                <span className="counter-content text-start">
                  {item.title && (<span className="counter-title  text-start">{item.title}</span>)}
                  {item.content && item.content}
                </span>
              </div>
            </m.div>
          );
        })
        : props.data.map((item, i) => {
          return (
            <m.div
              key={i}
              className={`${props.theme} ${props.className} counter-col flex flex-col gap-6`}
              {...{ ...props.animation, transition: { delay: i * props.animationDelay } }}
            >
              <div className="w-[100%] flex justify-center">
                <ImageComp Data={{ source: item?.image, className: 'h-[90px] object-cover' }} />
              </div>
              {item.number && (
                <props.as className={` text-center counter-numbers${item.number.class ? ` ${item.number.class}` : ""}`}>
                  <CountUp start={0} end={item.number.text} duration={props.duration} easing={false}>
                    {({ countUpRef, start }) => (<m.span ref={countUpRef} whileInView={start} viewport={{ once: true }} />)}
                  </CountUp>
                  {props.postfix_sign && <span className="postfix_sign">{props.postfix_sign}</span>}
                </props.as>
              )}
              {(item.title || item.content) && (
                <div className="counter-content-section">
                  {item.content && <span className="counter-content">{item.content}</span>}
                </div>
              )}
              {(item?.list?.length > 0) && (
                <ul className="flex gap-3 flex-col">

                  {item?.list?.map(ele =>
                    <>
                      <li className="border-b-2 flex gap-3 items-center">
                        <FontAwesomeIcon className='IntroSecInputContainerIcon' icon={faCheck} />  {ele}
                      </li>
                    </>
                  )}
                </ul>
              )}
            </m.div>
          );
        })}
    </Row>
  )
};

Counter.defaultProps = {
  data: CounterData01,
  theme: "counter-style-01",
  duration: 5,
  animationDelay: 0.2,
  as: "h2"
};

Counter.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      number: PropTypes.shape({
        text: PropTypes.string,
        class: PropTypes.string
      }),
      content: PropTypes.string,
    })
  ),
  as: PropTypes.string,
  theme: PropTypes.string,
  grid: PropTypes.string,
  postfix_sign: PropTypes.string,
  duration: PropTypes.number,
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
}

export default memo(Counter);