import React from 'react'
import CustomSelection from '../../../Components/SelectionComp/CustomSelection'
import { ParagraphComp } from '../../../Components/ParagraphComp/ParagraphComp'
import CustomInput from '../../../Components/InputCompo/CustomInput'
import { InputCompo } from '../../../Components/InputCompo/InputCompo'
import CustomTextarea from '../../../Components/textareaComp/CustomTextarea'
import HeaderCompo from '../../../Components/HeaderComp/HeaderCompo'
import ButtonComp from '../../../Components/ButtonComp/ButtonComp'

function HeadOfOrganization() {
    return (
        <>
            <form action="" className='flex flex-col gap-[30px]'>

                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput label='Head of Organization’s name *' />
                        <ParagraphComp text='Head of organization is also called the Chief Functionary or the Head of Management' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                    </div>
                    <div className='w-[100%]'>
                        <CustomInput required={true} label="Head of Organizations Designation *" />
                    </div>
                </div>
                <div className='w-[100%] flex gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput label='Head of Organisation’s Email Id *' />
                    </div>
                    <div className=' w-[100%]'>
                        <label className="flex mt-[16px] items-center space-x-2">
                            <InputCompo className='bg-[#004878]  text-white w-[20px] h-[20px]' type='checkbox' />
                            <span className='text-black'>Display Head of Organization’s Email Id</span>
                        </label>
                    </div>
                </div>


                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput label='Head of Organization’s IT PAN *' />
                        <ParagraphComp text='Head of organization is also called the Chief Functionary or the Head of Management' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required={true} label="Head of Organization’s Gender" />
                    </div>
                </div>
                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput type='date' label='Head of Organisation’s From *' />
                        <ParagraphComp text='Enter date in DD-MM-YYYY format' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                    </div>
                    <div className='w-[100%]'>
                    </div>
                </div>
                <div>

                    <div className='p-[20px] border-b-transparent border-2 rounded-t-[8px] flex items-center justify-between'>
                        <HeaderCompo className='text-lg text-black mt-0 m-0' tagType='h3' text='Communication' />

                    </div>
                    <table className='border-2 text-[#667085] font-light rounded-t-2xl w-[100%]'>
                        <tr className='border-b-2 '>

                            <th className='p-[10px]'>
                                No.
                            </th>
                            <>
                                <th className='p-[10px] '>
                                    Telephone No. Type <i class="fa-solid fa-arrow-down cursor-pointer"></i>
                                </th>
                                <th className='p-[10px]'>
                                    Country Code <i class="fa-solid fa-arrow-down cursor-pointer"></i>
                                </th>
                                <th className='p-[10px]'>
                                    Area Code <i class="fa-solid fa-arrow-down cursor-pointer"></i>
                                </th>
                                <th className='p-[10px]'>
                                    Telephone No. <i class="fa-solid fa-arrow-down cursor-pointer"></i>
                                </th>
                            </>
                        </tr>
                        <tr className='border-b-2'>

                            <td className='text-start p-[10px]'>
                            </td>
                            <td className='p-[10px]'>
                                <CustomInput label="Enter" />
                            </td>
                            <td className='p-[10px]'>
                                <CustomInput label="Enter" />
                            </td>
                            <td className='p-[10px]'>
                                <CustomInput label="Enter" />
                            </td>
                            <td className='p-[10px]'>
                                <CustomInput label="Enter" />
                            </td>
                        </tr>
                    </table>
                    <div className='border-2 border-t-transparent rounded-b-[8px] pb-[10px] px-[10px] w-[100%]'>
                        <label className="flex mt-[16px] items-center space-x-2">
                            <InputCompo className='bg-[#004878]  text-white w-[20px] h-[20px]' type='checkbox' />
                            <span className='text-black'>Display Head of Organization’s Email Id</span>
                        </label>
                    </div>
                </div>

                <div className='w-[100%] flex  gap-[24pt] '>
                    <CustomTextarea className='min-h-[100px]' label='Brief Description of the Person’s Qualification and experience' />
                </div>
                <div className='w-[100%] flex  gap-[24pt] '>
                    <CustomSelection label='Is the Head of the organization also the founder or Co-Founder ? *' />
                </div>
                <div className='w-[100%] flex  gap-[24pt] '>
                    <CustomTextarea className='min-h-[100px]' label='If you answered yes to the previous question, kindly provide the role the head of the organisation plays in the governing body' />
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

export default HeadOfOrganization