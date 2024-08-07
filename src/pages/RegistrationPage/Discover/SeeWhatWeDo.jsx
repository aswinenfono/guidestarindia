import React from 'react'
import CustomInput from '../../../Components/InputCompo/CustomInput'
import { ParagraphComp } from '../../../Components/ParagraphComp/ParagraphComp'
import CustomFileInput from '../../../Components/InputCompo/CustomFileInput'
import { InputCompo } from '../../../Components/InputCompo/InputCompo'
import HeaderCompo from '../../../Components/HeaderComp/HeaderCompo'
import ButtonComp from '../../../Components/ButtonComp/ButtonComp'

const SeeWhatWeDo = () => {
    return (
        <>
            <form action="" className='flex flex-col gap-[30px]'>
                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomFileInput label='Head of Organization’s IT PAN *' />
                        <ParagraphComp text='One Picture that tells the story of what your organization does' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                    </div>
                    <div className='w-[100%]'>
                    </div>
                </div>
                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput label='How did you get to know about Guide star india' />
                    </div>
                </div>
                <div className='border-b-2' />

                <div className='p-[16px] rounded-[8px] bg-[#EFEFEF] flex flex-col gap-[20px]'>
                    <ParagraphComp className=' text-[black] text-md ' text='I hereby state that all facts provided in this form & supporting documents are true and correct. I have been authorised by the organisation to register it with GuideStar India and complete all required processes. I fully understand that all the information and documents provided will be displayed in public domain except the telephone number, mobile number and email id of Head of Organisation and Alternate Contact Person unless it is specifically ticked by me as "No" in the relevant sections. I authorise GuideStar India to send the user id and password for the organisation to the email id of the Head of Organisation or that of the Alternate Contact person. I authorise GuideStar India to remove telephone# /Mobile# /Email ID that is not reachable at anytime. I authorise GuideStar India to remove our organisation from the website if we do not respond to your emails or mails to us bounce for more than a month; or the organisation is blacklisted by the government or we cease to be operational. Yes, I agree with the above undertaking I, the authoirised signatory whose name is mentioned below, agree to the above conditions.' />
                    <label className="flex items-center space-x-2">
                        <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                        <span className='text-black'>I Agree</span>
                    </label>
                </div>


                <div className='border-b-2' />
                <div>
                    <HeaderCompo className='text-2xl text-black' text='Your organization is promoted by select all applicable' tagType='h3' />
                </div>

                <div className='w-[60%] flex '>
                    <div className='w-[100%] flex flex-col  gap-[24pt]'>
                        <label className="flex items-center space-x-2">
                            <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                            <span className='text-black'>Government</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                            <span className='text-black'>Religious Organizations</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                            <span className='text-black'>Political  Organizations</span>
                        </label>
                    </div>
                    <div className='w-[100%] flex flex-col  gap-[24pt]'>
                        <label className="flex items-center space-x-2">
                            <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                            <span className='text-black'>Professional or Trade Associations</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                            <span className='text-black'>A Family</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                            <span className='text-black'>None of the above</span>
                        </label>
                    </div>
                </div>

                <div className='border-b-2' />

                <div className='flex justify-end'>
                    <div className='flex gap-[20px]'>
                        <ButtonComp text={'Save'} className='px-[20px] rounded-full border-1 border-[#004878] text-[#004878] py-[10px]' />
                        <ButtonComp text={'Save & Next'} className='px-[20px] rounded-full bg-[#004878] text-[white] py-[10px]' />
                    </div>
                </div>
            </form>
        </>
    )
}

export default SeeWhatWeDo