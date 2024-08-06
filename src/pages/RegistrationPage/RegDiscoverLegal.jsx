import React from 'react'
import CustomInput from '../../Components/InputCompo/CustomInput'
import { ParagraphComp } from '../../Components/ParagraphComp/ParagraphComp'

const RegDiscoverLegal = () => {
    return (
        <>
            <form className='flex flex-col gap-[30px]' action="">
                <div className='w-[80%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput required={true} label='Others(Please Specify)' />
                    </div>
                </div>
                <div className='w-[80%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput required={true} label='Please Specify' />
                    </div>
                </div>
                <div className='w-[100%] p-[20px] bg-[#F2F2F7]' >
                    <ParagraphComp className='' />
                </div>
            </form>



        </>
    )
}

export default RegDiscoverLegal