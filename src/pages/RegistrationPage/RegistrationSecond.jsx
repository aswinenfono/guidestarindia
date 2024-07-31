import React, { useState } from 'react'
import CustomSelection from '../../Components/SelectionComp/CustomSelection'
import CustomFileInput from '../../Components/InputCompo/CustomFileInput'
import HeaderCompo from '../../Components/HeaderComp/HeaderCompo'
import ButtonComp from '../../Components/ButtonComp/ButtonComp'
import { ParagraphComp } from '../../Components/ParagraphComp/ParagraphComp'
import CustomInput from '../../Components/InputCompo/CustomInput'
import { InputCompo } from '../../Components/InputCompo/InputCompo'
import CustomTextarea from '../../Components/textareaComp/CustomTextarea'
import ModalComp from '../../Components/ModalComp'

const RegistrationSecond = () => {
    const [tableDropDowns, setTableDropDowns] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)


    const updateDropDownNames = (name) => {

        if (tableDropDowns?.[name]) {
            setTableDropDowns({ [name]: false })
        } else {
            setTableDropDowns({ [name]: true })
        }
    }

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }
    return (
        <>
            {/* organization and pan section */}
            <div className='w-[80%] flex  gap-[24pt] '>
                <div className='w-[100%]'>
                    <CustomSelection label='Organization primary Email' />
                    <ParagraphComp Data={{ text: 'Has your IT PAN changed? if yes,kindly indicate the same', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                </div>
                <div className='w-[100%]'>
                    <CustomFileInput label="Upload PAN Card" />
                    <ParagraphComp Data={{ text: 'Income Tax Permanent Account Number(IT PAN) of the Non Profit', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                </div>
            </div>


            {/* legal registration section */}


            <div>
                <div className='p-[20px] border-2 rounded-t-xl flex items-center justify-between'>
                    <HeaderCompo className='text-xl text-black mt-0 m-0' tagType='h3' text='Legal Registration' />
                    <ButtonComp text='Add Row' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' onClick={openModal} />
                </div>
                <table className='border-2 rounded-t-2xl w-[100%]'>
                    <tr className='border-b-2 '>
                        <th className='p-[10px] flex justify-center'>
                            <div className='rounded-xl border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px] border-[#004878]'>
                                <i class="fa-solid fa-minus"></i>
                            </div>
                        </th>
                        <th className='p-[10px] text-center'>
                            <div className='relative'>
                                No. <i onClick={() => { updateDropDownNames("No.") }} class="fa-solid fa-arrow-down cursor-pointer"></i>
                                {
                                    tableDropDowns?.["No."] &&
                                    <div class=" p-[10px] bg-slate-100 absolute z-[99] w-fit" aria-labelledby="dropdownMenuButton">
                                        <option value=""></option>
                                    </div>
                                }
                            </div>
                        </th>
                        <th className='p-[10px] text-center'>
                            Registration As *
                        </th>
                        <th className='p-[10px] text-center'>
                            Registration Legacy
                        </th>
                        <th className='p-[10px] text-center'>
                            State of registration
                        </th>
                        <th className='p-[10px] text-center'>
                            Registration date as
                        </th>
                        <th className='p-[10px] text-center'>
                            Action
                        </th>
                    </tr>
                    <tr className='p-[5px]'>
                        <td className='font-bold text-center text-black flex justify-center'>
                            <div className='rounded-xl border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px]  bg-[#004878] text-white   '>
                                <i class="fa-solid fa-check"></i>
                            </div>
                        </td>
                        <td className='font-bold text-center text-black'>1</td>
                        <td className='font-bold text-center text-black'>Bold text column</td>
                        <td className='font-bold text-center text-black'>Bold text column</td>
                        <td className='font-bold text-center text-black'>Bold text column</td>
                        <td className='font-bold text-center text-black'>Bold text column</td>
                        <td className='font-bold text-center justify-center flex text-black'>
                            <div className='flex gap-1 '>
                                <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full  bg-[#004878]'>
                                    <i class="fa-regular fa-pen-to-square  text-white"></i>
                                </div>
                                <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full  bg-[red]'>
                                    <i class="fa-regular fa-trash-can text-white"></i>
                                </div>
                            </div>
                        </td>
                    </tr>

                </table>
            </div>
            <div className='border-b-2' />
            {/* previous, organization, designation section */}
            <div className='w-[80%] flex  gap-[24pt]' >
                <div className='w-[100%]'>
                    <CustomInput label='Previous Legal Names the or' />
                    <ParagraphComp Data={{ text: 'Name as per registration certificate/ Deed', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                </div>
                <div className='w-[100%]'>
                    <CustomInput label="organization Website" />
                    <ParagraphComp Data={{ text: 'Enter the correct address starting with http:// for example http://www.guidestar.org', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]' >
                <div className='w-[50%] pe-[15pt]'>
                    <CustomInput label='Designation of the person' />
                </div>
            </div>
            <div className='border-b-2' />


            {/* Registered Address Section */}


            <div className='w-[80%] flex  gap-[24pt]' >
                <HeaderCompo tagType='h3' className='text-2xl text-black' text='Registered Address' />
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomSelection label="Address Type" />
                </div>
                <div className='w-[100%]'>
                    <CustomSelection label="State" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="Unit No./ Room No./ Building name" />
                </div>
                <div className='w-[100%]'>
                    <CustomSelection label="District" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="Street Area" />
                </div>
                <div className='w-[100%]'>
                    <CustomInput label="Pin code" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="City/Town/Taluk/Village" />
                </div>
                <div className='w-[100%]'>
                    <CustomInput label="Land Mark" />
                </div>
            </div>
            <div className='border-b-2' />



            {/* Correspondence Address section */}


            <div className='w-[100%]'>
                <HeaderCompo className='text-2xl text-black' text='Correspondence Address' tagType='h3' />
                <div className='w-[100%]'>
                </div>
                <label className="flex items-center space-x-2">
                    <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                    <span className='text-black'>Same as Registered address</span>
                </label>
            </div >
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomSelection label="Address Type" />
                </div>
                <div className='w-[100%]'>
                    <CustomSelection label="State" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="Unit No./ Room No./ Building name" />
                </div>
                <div className='w-[100%]'>
                    <CustomSelection label="District" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="Street Area" />
                </div>
                <div className='w-[100%]'>
                    <CustomInput label="Pin code" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="City/Town/Taluk/Village" />
                </div>
                <div className='w-[100%]'>
                    <CustomInput label="Land Mark" />
                </div>
            </div>
            <div className='border-b-2' />


            {/* Address Proof Section */}


            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[50%] pe-[15pt]'>
                    <CustomFileInput label="Upload Document" />
                    <ParagraphComp Data={{ text: 'Address Proof', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                </div>

            </div>
            <div className='border-b-2' />


            {/* Head of Organization Details section */}


            <div>
                <HeaderCompo className='text-2xl text-black' text='Head of Organization Details' tagType='h3' />
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="Head of Organization’s name" />
                </div>
                <div className='w-[100%]'>
                    <CustomInput label="Head of organization’s IT PAN" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="Head of Organizations Designation" />
                </div>
                <div className='w-[100%]'>
                    <CustomSelection label="Head of organization’s Gender" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="Head of organization’s Email Id" />
                </div>
                <div className='w-[100%]'>
                    <CustomInput label="Head of organization’s From" />
                    <ParagraphComp Data={{ text: 'Enter date in DD-MM-YYYY format', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                </div>
            </div>
            <label className="flex items-center space-x-2">
                <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                <span className='text-black'>Please remove the tick if you Do not want it publicly displayed</span>
            </label>
            <div className='border-b-2' />


            {/* Head of Organization Contact Number section */}


            <div>
                <HeaderCompo className='text-2xl text-black' text='Head of Organization Contact Number' tagType='h3' />
            </div>
            <div className='w-[80%] flex'>
                <div className='w-[100%]  flex  gap-[24pt]'>
                    <div className='w-[100%]  gap-[24pt] flex flex-col '>
                        <CustomSelection label="Is the Head of the organization also the founder or Co-Founder ?" />
                        <CustomInput label="Head of organization’s IT PAN" />
                    </div>
                    <div className='h-[100%] w-[100%]'>
                        <div className='h-[100%]'>
                            <CustomTextarea label="Brief Description of the Person’s Qualification and experience" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='border-b-2' />


            {/* Organization’s Contact Person’s Details section */}


            <div>
                <HeaderCompo className={'text-2xl text-black'} text='Organization’s Contact Person’s Detail' tagType='h' />
            </div>
            <div className='w-[80%] flex gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomSelection label="Telephone Number Type" />
                </div>

                <div className='w-[100%]'>

                    <CustomSelection label="Telephone Number Type" />
                </div>

            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>

                    <CustomInput label="Country Code" />
                </div>

                <div className='w-[100%]'>

                    <CustomInput label="Country Code" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>

                    <CustomInput label="Area Code" />
                </div>

                <div className='w-[100%]'>

                    <CustomInput label="Area Code" />
                </div>
            </div>
            <div className='w-[80%] flex  gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomInput label="Telephone Number" />
                </div>

                <div className='w-[100%]'>

                    <CustomInput label="Mobile Number" />
                </div>
            </div>
            <label className="flex items-center space-x-2">
                <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                <span className='text-black'>Please remove the tick if you Do not want it publicly displayed</span>
            </label>
            <div className='border-b-2' />


            {/* Brief Description section */}


            <div className='w-[100%] gap-[24pt] flex'>
                <div className='w-[100%] flex flex-col gap-[30px]'>
                    <CustomSelection label="Year of starting the organization" />
                    <div>
                        <CustomInput label='Numbers Served' />
                        <ParagraphComp Data={{ text: 'Numbers served for the indicators from organization inception till end of financial year under review or at least for the last 5 financial years', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                    </div>
                    <CustomSelection label="Pan India" />
                    <CustomSelection label="Beneficiary Groups" />
                    <CustomSelection label="Independently verified or not" />
                    <CustomTextarea label="Indicators" className="min-h-[150px]" />
                    <CustomSelection label="Goal Year" />
                    <CustomTextarea label="Goal" className="min-h-[150px]" />
                </div>
                <div className='w-[100%] flex flex-col gap-[30px]'>
                    <div>
                        <div className='p-[20px] border-2 rounded-t-xl flex items-center justify-between'>
                            <HeaderCompo className='text-xl text-black mt-0 m-0' tagType='h3' text='Communication' />
                            <ButtonComp text='Add' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' />
                        </div>
                        <table className='border-2 rounded-t-2xl w-[100%]'>
                            <tr className='border-b-2'>
                                <th className='p-[10px] flex justify-center'>
                                    <div className='rounded-xl border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px] border-[#004878]'>
                                        <i class="fa-solid fa-minus"></i>
                                    </div>
                                </th>
                                <th className='p-[10px]'>
                                    <div className='relative'>
                                        State <i onClick={() => { updateDropDownNames("State") }} class="fa-solid fa-arrow-down cursor-pointer"></i>
                                        {
                                            tableDropDowns?.["State"] &&
                                            <div class=" p-[10px] bg-slate-100 absolute z-[99] w-fit" aria-labelledby="dropdownMenuButton">
                                                <option value=""></option>
                                            </div>
                                        }
                                    </div>
                                </th>
                                <th className='p-[10px]'>
                                    <div className='relative'>
                                        District <i onClick={() => { updateDropDownNames("District.") }} class="fa-solid fa-arrow-down cursor-pointer"></i>
                                        {
                                            tableDropDowns?.["District"] &&
                                            <div class=" p-[10px] bg-slate-100 absolute z-[99] w-fit" aria-labelledby="dropdownMenuButton">
                                                <option value=""></option>
                                            </div>
                                        }
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td className='font-bold text-center  text-black align-middle'>
                                    <div className='rounded-xl mr-auto ml-auto border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px]  bg-[#004878] text-white   '>
                                        <i class="fa-solid fa-check"></i>
                                    </div>
                                </td>
                                <td className='font-bold text-center p-[5px]'>
                                    <CustomSelection label="Select" />
                                </td>
                                <td className='font-bold text-center p-[5px]'>
                                    <CustomSelection label="Select" />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <div className='p-[20px] border-2 rounded-t-xl flex items-center justify-between'>
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
                    <div>
                        <div className='p-[20px] border-2 rounded-t-xl flex items-center justify-between'>
                            <HeaderCompo className='text-xl text-black mt-0 -0' tagType='h3' text='Primary  Classification of NPO' />
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
            {/* Your organization is promoted by select all applicable section */}

            <div className='w-[100%]'>
                <div className='w-[50%] pe-[15pt]'>
                    <CustomFileInput label='Upload' />
                    <ParagraphComp Data={{ text: 'One Picture that tells the story of what your organization does', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                </div>
            </div>

            <div className='border-b-2' />
            <div>
                <HeaderCompo className='text-2xl text-black' text='Your organization is promoted by select all applicable ' tagType='h3' />
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

            <div className='w-[50%] pe-[15pt]'>
                <CustomInput label="How did you get to know about Guide star india" />
            </div>
            <div className='border-b-2' />

            <div className='w-[100%] flex flex-col gap-[30px]'>
                <div className='w-auto p-[20px] rounded-lg bg-[#EFEFEF]'>
                    <ParagraphComp Data={{ text: 'I hereby state that all facts provided in this form & supporting documents are true and correct. I have been authorised by the organization to register it with GuideStar India and complete all required processes. I fully understand that all the information and documents provided will be displayed in public domain except the telephone number, mobile number and email id of Head of Organisation and Alternate Contact Person unless it is specifically ticked by me as "No" in the relevant sections. I authorise GuideStar India to send the user id and password for the organisation to the email id of the Head of Organisation or that of the Alternate Contact person. I authorise GuideStar India to remove telephone# /Mobile# /Email ID that is not reachable at anytime. I authorise GuideStar India to remove our organisation from the website if we do not respond to your emails or mails to us bounce for more than a month; or the organisation is blacklisted by the government or we cease to be operational. Yes, I agree with the above undertaking I, the authorised signatory whose name is mentioned below, agree to the above conditions.' }} />
                    <label className="flex items-center space-x-2">
                        <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                        <span className='text-black'>i Agree</span>
                    </label>
                </div>
                <div className='w-[50%] pe-[15pt]'>
                    <CustomSelection label="Status" />
                </div>
            </div>
            <div className='border-b-2' />

            <div className='flex justify-end'>
                <ButtonComp className='px-[20px] bg-[#004878] rounded-full text-white' text='Save' />
            </div>
            {/* modal section */}
            <ModalComp modalIsOpen={modalIsOpen} closeModal={closeModal} width={"50%"} >
                <div >
                    <HeaderCompo tagType='h4' className='text-xl text-black' text='Add Legal registration details' />
                    <div className='w-[100%] flex flex-col gap-[30px]'>
                        <div className='w-[100%] flex   gap-[24pt]'>
                            <div className='w-[100%]'>
                                <CustomSelection label={'Registration as '} />
                                <ParagraphComp Data={{ text: 'Has your IT PAN changed? if yes,kindly indicate the same', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                            </div>
                            <div className='w-[100%]'>
                                <CustomInput label={'Registration number of non profit entry *'} />
                                <ParagraphComp Data={{ text: 'If you do not have a number please write NA', className: 'mt-[8px] text-black text-sm px-[8px]' }} />
                            </div>
                        </div>
                        <div className='w-[100%] flex   gap-[24pt]'>
                            <CustomSelection label={'Registration as '} />
                            <CustomInput label={'Registration Act *'} />
                        </div>
                        <div className='w-[100%] flex   gap-[24pt]'>
                            <CustomSelection label={'State of registration of Non Profit entry'} />
                            <CustomSelection label={'Registration Status as a Non Profit Entity *'} />
                        </div>
                        <div className='w-[100%] flex   gap-[24pt]'>
                            <CustomInput type={'date'} label={'Registration Date as a Non Profit Entry *'} />
                            <CustomSelection label={'Registration Authority *'} />
                        </div>
                        <div className='w-[100%] flex   gap-[24pt]'>
                            <CustomInput type={'date'} label={'Registration Valid Till*'} />
                            <CustomFileInput label={'Upload Document'} />
                        </div>

                    </div>
                    <div className='w-[100%] justify-end flex mt-4'>
                        <div className='flex gap-4'>
                            <ButtonComp className={'border-none bg-none px-[20px] py-[6px]  rounded-full text-black'} text={'Cancel'} />
                            <ButtonComp className={'border-none bg-none bg-[#004878] px-[20px] py-[6px] rounded-full   text-[white] '} text={'Submit'} />
                        </div>
                    </div>
                </div>
            </ModalComp>
        </>
    )
}

export default RegistrationSecond