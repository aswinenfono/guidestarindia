import React, { useState } from 'react'
import CustomSelection from '../../Components/SelectionComp/CustomSelection'
import CustomInput from '../../Components/InputCompo/CustomInput'
import HeaderCompo from '../../Components/HeaderComp/HeaderCompo'
import ButtonComp from '../../Components/ButtonComp/ButtonComp'

const RegistrationThird = () => {
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
            <div>
                <div className='p-[20px] border-2 rounded-t-xl flex items-center justify-between'>
                    <HeaderCompo className='text-xl text-black mt-0 m-0' tagType='h3' text='Engage level question and answers' />
                    <ButtonComp text='Add Row' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' />
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
                            Question
                        </th>
                        <th className='p-[10px]'>
                            Answer
                        </th>
                        <th className='p-[10px]'>
                            Action
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
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default RegistrationThird