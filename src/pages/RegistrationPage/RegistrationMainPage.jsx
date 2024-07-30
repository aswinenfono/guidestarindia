import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { ImageComp } from '../../Components/ImageCompo/ImageComp'
import HeaderCompo from '../../Components/HeaderComp/HeaderCompo'
import RegistrationFirst from './RegistrationFirst'
import RegistrationSecond from './RegistrationSecond'

const RegistrationMainPage = () => {

    const [selectedButton, setSelectedButton] = useState({ 'Registration Details': true })

    const ButtonName = [
        'Registration Details',
        'Discover registration details',
        'Engage Details'
    ]

    const ButtonNameUpdate = (name) => {
        if (selectedButton?.[name]) {
            setSelectedButton({ [name]: false })
        } else {
            setSelectedButton({ [name]: true })
        }
    }
    return (
        <>
            <Container className='py-[20px]'>
                <div className='flex flex-col gap-[30px]'>
                    <div>
                        <ImageComp Data={{ source: '/Images/logo.png', className: 'max-h-[100%] h-[50px]' }} />
                    </div>
                    <div>
                        <HeaderCompo tagType='h3' className='text-2xl text-black font-semibold tracking-wider' text='New NPO Registration' />
                    </div>
                    <div className='flex gap-[10px]'>
                        {ButtonName.map((btn, index) =>
                            <button onClick={() => { ButtonNameUpdate(btn) }} className={`${selectedButton?.[btn] ? "bg-[#004878] text-white " : "border-2 border-[#004878] text-[#004878] "} py-[10px] px-[20px] rounded-full flex gap-[10px] items-center`}>
                                <div className={`${selectedButton?.[btn] ? 'bg-white text-black' : 'bg-[#004878] text-white '} h-[25px] w-[25px] rounded-full  flex items-center justify-center  text-[20px]`}>
                                    {index + 1}
                                </div>
                                {btn}
                            </button>
                        )}
                    </div>
                    {
                        selectedButton?.['Registration Details'] ?
                            <RegistrationFirst />
                            :
                            selectedButton?.['Discover registration details']
                                ?
                                <RegistrationSecond />
                                : ''

                    }

                </div>

            </Container>

        </>
    )
}

export default RegistrationMainPage