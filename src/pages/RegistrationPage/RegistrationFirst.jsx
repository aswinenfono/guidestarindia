import React, { useState } from 'react'
import CustomInput from '../../Components/InputCompo/CustomInput'
import CustomSelection from '../../Components/SelectionComp/CustomSelection'
import { ParagraphComp } from '../../Components/ParagraphComp/ParagraphComp'
import HeaderCompo from '../../Components/HeaderComp/HeaderCompo'
import ButtonComp from '../../Components/ButtonComp/ButtonComp'
import CustomTextarea from '../../Components/textareaComp/CustomTextarea'

const RegistrationFirst = () => {
    const [tableDropDowns, setTableDropDowns] = useState()

    const updateDropDownNames = (name) => {
        if (tableDropDowns?.[name]) {
            setTableDropDowns({ [name]: false })
        } else {
            setTableDropDowns({ [name]: true })
        }
    }


    return (
        <>
            <div className='flex w-[90%] gap-[24pt]'>
                <div className='w-[100%]'>
                    <CustomSelection
                        label='Application Number'
                    />
                </div>
                <div className='w-[100%]'>
                    <CustomInput label='Organization primary Email' />
                </div>
            </div>
            <div className='flex w-[90%] gap-[24pt]'>
                <div className='w-[100%]'>
                    < CustomInput label='PAN Number' />
                    <ParagraphComp Data={{ className: 'mt-[8px] text-black text-sm px-[8px]', text: `organization's PAN exactly as per your PAN card all CAPITALS without any spaces or full stop.` }} />
                </div>
                <div className='w-[100%] '>
                    < CustomInput label='Confirm Email Address' />
                </div>
            </div>
            <div className='flex w-[90%] gap-[24pt]'>
                <div className='w-[50%] pe-[12pt]'>
                    < CustomInput label='Name of the organization' />
                    <ParagraphComp Data={{ className: 'mt-[8px] text-black text-sm px-[8px]', text: `Name as Per Registration Certificate/Deed` }} />
                </div>
            </div>
            <div>
                <div className='p-[20px] border-2 rounded-t-xl flex items-center justify-between'>
                    <HeaderCompo className='text-xl text-black mt-0 m-0' tagType='h3' text='Communication' />
                    <ButtonComp text='Add' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' />
                </div>
                <table className='border-2 rounded-t-2xl w-[100%]'>
                    <tr className='border-b-2 '>
                        <th className='p-[10px]'>
                            <div className='rounded-xl border-2 flex justify-center items-center px-[5px] h-[30px] w-[30px] py-[4px] border-[#004878]'>
                                <i class="fa-solid fa-minus"></i>
                            </div>
                        </th>
                        <th className='p-[10px]'>
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
                        <th className='p-[10px]'>

                            <div className='relative'>
                                Telephone No. Type <i onClick={() => { updateDropDownNames("Telephone No. Type") }} class="fa-solid fa-arrow-down cursor-pointer"></i>
                                {
                                    tableDropDowns?.["Telephone No. Type"] &&
                                    <div class=" p-[10px] bg-slate-100 absolute z-[99] w-fit" aria-labelledby="dropdownMenuButton">
                                        <option value=""></option>
                                    </div>
                                }
                            </div>
                        </th>
                        <th className='p-[10px]'>


                            <div className='relative'>
                                Country Code <i onClick={() => { updateDropDownNames("Country Code") }} class="fa-solid fa-arrow-down cursor-pointer"></i>
                                {
                                    tableDropDowns?.["Country Code"] &&
                                    <div class=" p-[10px] bg-slate-100 absolute z-[99] w-fit" aria-labelledby="dropdownMenuButton">
                                        <option value=""></option>
                                    </div>
                                }
                            </div>
                        </th>
                        <th className='p-[10px]'>


                            <div className='relative'>
                                Area Code <i onClick={() => { updateDropDownNames("Area Code") }} class="fa-solid fa-arrow-down cursor-pointer"></i>
                                {
                                    tableDropDowns?.["Area Code"] &&
                                    <div class=" p-[10px] bg-slate-100 absolute z-[99] w-fit" aria-labelledby="dropdownMenuButton">
                                        <option value=""></option>
                                    </div>
                                }
                            </div>
                        </th>
                        <th className='p-[10px]'>
                            <div className='relative'>
                                Telephone No. <i onClick={() => { updateDropDownNames("Telephone No.") }} class="fa-solid fa-arrow-down cursor-pointer"></i>
                                {
                                    tableDropDowns?.["Telephone No."] &&
                                    <div class=" p-[10px] bg-slate-100 absolute z-[99] w-fit" aria-labelledby="dropdownMenuButton">
                                        <option value=""></option>
                                    </div>
                                }

                            </div>

                        </th>
                    </tr>
                    <tr className='border-b-2'>
                        <td className='p-[10px]'>
                            <div className='rounded-xl h-[30px] w-[30px] border-2 px-[5px] py-[4px] border-[#004878]'>
                            </div>
                        </td>
                        <td className='text-center p-[10px]'>
                            1
                        </td>
                        <td className='p-[10px]'>
                            <CustomSelection label="Select" />
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

            <div className='w-[100%] '>
                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]  flex gap-[10px] flex-col'>
                        <CustomInput label='Name of the Person filling the form' />
                        <CustomInput label='Place' />
                        <CustomInput label='Designation of the person' />
                    </div>
                    <div className=' w-[100%] h-auto '>
                        <div className='w-[100%] h-[100%]'>
                            <CustomTextarea label="Comment Box" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <ButtonComp type={'submit'} className='px-[20px] py-[6px] text-white bg-[#004878] rounded-full ' text='Save & Next' />
            </div>


        </>
    )
}

export default RegistrationFirst