import React from 'react'
import { ParagraphComp } from '../../../Components/ParagraphComp/ParagraphComp'
import CustomSelection from '../../../Components/SelectionComp/CustomSelection'
import CustomInput from '../../../Components/InputCompo/CustomInput'
import HeaderCompo from '../../../Components/HeaderComp/HeaderCompo'
import { InputCompo } from '../../../Components/InputCompo/InputCompo'
import ButtonComp from '../../../Components/ButtonComp/ButtonComp'
import CustomTextarea from '../../../Components/textareaComp/CustomTextarea'

const BriefDescriptionAboutNPO = () => {
    return (
        <>
            <form action="" className='flex flex-col gap-[30px]'>
                <div className='p-[24px]  bg-[#F2F2F7] rounded-[8px]'>
                    <ParagraphComp className='font-bold leading-10' text='Describe what the organization does using this sentence constructor:' />
                    <ParagraphComp className='' text='We started our organization in the year __________ and since then, served ________ number(s) of ____________,___________,___________(communities/ entities) in the thematic areas of ___________, ____________, ______________in top state - districts of _______________,___________,____________ and/ or pan India, and use the key indicator(s) __________________________, ______________________,_________________to track our progress ___________(all of which can be verified independently/ some of which can be be verified independently/ none of which can be verified independently), and hope to reach our goal of ______________________ _____________________________by around the year ______.' />
                </div>
                <div className='w-[100%] flex  gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput label={'Organization  Contact person’s name'} />
                        <ParagraphComp text='Alternate Contact Person is the person who will attend to enquiries and manage your content on the GuideStar India site. Please do not enter details if the person is the same as the Head of Organisation. We recommend that you have a contact person other than Head of the Organisation' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                    </div>

                </div>
                <div className='w-[100%] flex  gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput label={'Organizations Contact Person Designation'} />
                    </div>
                    <div className='w-[100%]'>
                        <CustomInput label={'Organizations Contact Person Email Id'} />
                    </div>
                </div>
                <div>

                    <div className='p-[20px] border-b-transparent border-2 rounded-t-[8px] flex items-center justify-between'>
                        <HeaderCompo className='text-lg text-black mt-0 m-0' tagType='h3' text='Organization’s Contact Person’s Contact Number' />

                    </div>
                    {/* Organization’s Contact Person’s Contact Number table */}
                    <table className='border-2 rounded-t-2xl text-[#667085] font-light w-[100%]'>
                        <tr className='border-b-2 '>

                            <th className='p-[10px]'>
                                No.
                            </th>
                            <>
                                <th className='p-[10px]'>
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
                            <span className='text-black'>Display Organization’s Contact Person’s Mobile Number</span>
                        </label>
                    </div>
                </div>
                {/* Organization’s Contact Person’s Mobile Number table */}
                <div>

                    <div className='p-[20px] border-b-transparent border-2 rounded-t-[8px] flex items-center justify-between'>
                        <HeaderCompo className='text-lg text-black mt-0 m-0' tagType='h3' text='Organization’s Contact Person’s Mobile Number' />

                    </div>
                    {/* Organization’s Contact Person’s Contact Number table */}
                    <table className='border-2 rounded-t-2xl text-[#667085] font-light w-[100%]'>
                        <tr className='border-b-2 '>

                            <th className='p-[10px]'>
                                No.
                            </th>
                            <>
                                <th className='p-[10px]'>
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

                </div>

                <div className='w-[100%] flex  gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput label={'Whatsapp Contact Details'} />
                        <ParagraphComp text='Kindly share the number on which whatsapp communication can be shared' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                    </div>

                </div>



                <div className='w-[100%] gap-[24pt] flex'>
                    <div className='w-[100%] flex flex-col gap-[30px]'>
                        <CustomSelection label="Year of starting the organization" />
                        <div>
                            <CustomInput label='Numbers Served' />
                            <ParagraphComp text='Numbers served for the indicators from organization inception till end of financial year under review or at least for the last 5 financial years' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                        </div>
                        <CustomSelection label="Geographic State" />
                        <CustomSelection label="Geographic District" />
                        <CustomSelection label="Pan India" />
                        <div>
                            <CustomSelection label='Indicators' />
                            <ParagraphComp text='Numbers served for the indicators from organization inception till end of financial year under review or at least for the last 5 financial years' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                        </div>
                        <div>
                            <CustomSelection label='Independently verified or not' />
                            <ParagraphComp text='if this progress can be independently verified or not' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                        </div>
                        <div>
                            <CustomSelection label='Independently verified or not' />
                            <ParagraphComp text='if this progress can be independently verified or not' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                        </div>
                        <div>
                            <CustomInput label='Goal' />
                            <ParagraphComp text='Stated Overall Organisation end Goal and ultimate Outcome for its entire duration' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                        </div>
                        <div>
                            <CustomSelection label='Goal Year' />
                            <ParagraphComp text='Year by which the end goal of the organisation will be reached' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
                        </div>
                    </div>
                    <div className='w-[100%] flex flex-col gap-[30px]'>
                        {/* Causes/ Thematic Areas as per ICNPO Section */}
                        <div>
                            <div className='p-[20px] border-b-transparent border-2 rounded-t-xl flex items-center justify-between'>
                                <HeaderCompo className='text-xl text-black mt-0 m-0' tagType='h3' text='Causes/ Thematic Areas as per ICNPO' />
                                <ButtonComp text='Add' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' />
                            </div>
                            <table className='border-2 rounded-t-2xl w-[100%]'>
                                <tr>
                                    <td className='font-bold text-center w-[25%]  text-black align-middle'>
                                        <div className='rounded-xl mr-auto ml-auto border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px]  bg-[#004878] text-white   '>
                                            <i class="fa-solid fa-check"></i>
                                        </div>
                                    </td>
                                    <td className='font-bold text-center p-[5px]'>
                                        <CustomSelection label="Select" />
                                    </td>

                                </tr>
                            </table>
                        </div>
                        {/* Beneficiary Groups Section */}

                        <div>
                            <div className='p-[20px] border-2 border-b-transparent rounded-t-xl flex items-center justify-between'>
                                <div className='w-[80%]'>
                                    <HeaderCompo className='text-xl mb-0 text-black mt-0 -0' tagType='h3' text='Beneficiary Groups' />
                                    <ParagraphComp text='Beneficiary includes entities such as individual, person, thing, article, unit, body, creature)' className='mt-[8px] text-[#5A5A5A] text-sm ' />
                                </div>
                                <ButtonComp text='Add' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' />
                            </div>
                            <table className='border-2 rounded-t-2xl w-[100%]'>
                                <tr>
                                    <td className='font-bold text-center w-[25%]  text-black align-middle'>
                                        <div className='rounded-xl mr-auto ml-auto border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px]  bg-[#004878] text-white   '>
                                            <i class="fa-solid fa-check"></i>
                                        </div>
                                    </td>
                                    <td className='font-bold text-center p-[5px]'>
                                        <CustomSelection label="Select" />
                                    </td>

                                </tr>
                            </table>
                        </div>
                        {/* Organization Secondary Classification section */}
                        <div>
                            <div className='p-[20px] border-2 border-b-transparent rounded-t-xl flex items-center justify-between'>
                                <HeaderCompo className='text-xl mb-0 text-black mt-0 -0' tagType='h3' text='Organization Secondary Classification' />
                                <ButtonComp text='Add' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' />
                            </div>
                            <table className='border-2 rounded-t-2xl w-[100%]'>
                                <tr>
                                    <td className='font-bold text-center w-[25%]  text-black align-middle'>
                                        <div className='rounded-xl mr-auto ml-auto border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px]  bg-[#004878] text-white   '>
                                            <i class="fa-solid fa-check"></i>
                                        </div>
                                    </td>
                                    <td className='font-bold text-center p-[5px]'>
                                        <CustomSelection label="Select" />
                                    </td>

                                </tr>
                            </table>
                        </div>
                        {/* Organization Tertiary Classification section */}

                        <div>
                            <div className='p-[20px] border-2 border-b-transparent rounded-t-xl flex items-center justify-between'>
                                <HeaderCompo className='text-xl mb-0 text-black mt-0 -0' tagType='h3' text='Organization Tertiary Classification' />
                                <ButtonComp text='Add' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' />
                            </div>
                            <table className='border-2 rounded-t-2xl w-[100%]'>
                                <tr>
                                    <td className='font-bold text-center w-[25%]  text-black align-middle'>
                                        <div className='rounded-xl mr-auto ml-auto border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px]  bg-[#004878] text-white   '>
                                            <i class="fa-solid fa-check"></i>
                                        </div>
                                    </td>
                                    <td className='font-bold text-center p-[5px]'>
                                        <CustomSelection label="Select" />
                                    </td>

                                </tr>
                            </table>
                        </div>
                        {/* Organization Primary Classification section */}

                        <div>
                            <div className='p-[20px] border-2 border-b-transparent rounded-t-xl flex items-center justify-between'>
                                <HeaderCompo className='text-xl mb-0 text-black mt-0 -0' tagType='h3' text='Organization Primary Classification' />
                                <ButtonComp text='Add' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' />
                            </div>
                            <table className='border-2 rounded-t-2xl w-[100%]'>
                                <tr>
                                    <td className='font-bold text-center w-[25%]  text-black align-middle'>
                                        <div className='rounded-xl mr-auto ml-auto border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px]  bg-[#004878] text-white   '>
                                            <i class="fa-solid fa-check"></i>
                                        </div>
                                    </td>
                                    <td className='font-bold text-center p-[5px]'>
                                        <CustomSelection label="Select" />
                                    </td>

                                </tr>
                            </table>
                        </div>
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

export default BriefDescriptionAboutNPO