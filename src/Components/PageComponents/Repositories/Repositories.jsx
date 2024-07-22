import React from 'react'
import "./Repositories.css"
import HeaderCompo from '../../HeaderComp/HeaderCompo'
import { Container } from 'react-bootstrap'
import { fadeIn } from '../../../Functions/GlobalAnimations'
import { m } from 'framer-motion'
import Counter from "../../Counters/Counter"
import { CounterData01 } from '../../Counters/CounterData'

const Repositories = () => {
    return (
        <>

            <div className='p-[10px] max-sm:py-[70px] flex bg-[#f7f7f7] flex-col'>
                <HeaderCompo Data={{ tagType: "h1", text: 'Get involved with NPOs to make a difference', className: 'RepositoriesHeader max-sm:text-3xl max-md:text-4xl text-center text-black' }} />
                <m.section className="bg-lightgray max-md:py-[50px] py-[160px] lg:py-[40px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
                    <Container>
                        <Counter    
                            as="h5"
                            theme="counter-style-01"
                            grid="row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2 gap-y-10"
                            className="text-black "
                            duration={7}
                            data={CounterData01}
                            postfix_sign="+" />
                    </Container>
                </m.section>
            </div>

        </>
    )
}

export default Repositories