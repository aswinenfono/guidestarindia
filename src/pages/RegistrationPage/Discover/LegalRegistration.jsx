import React, { useState } from 'react'
import CustomInput from '../../../Components/InputCompo/CustomInput'
import { ParagraphComp } from '../../../Components/ParagraphComp/ParagraphComp'
import CustomSelection from '../../../Components/SelectionComp/CustomSelection'
import { ImageComp } from '../../../Components/ImageCompo/ImageComp'
import ButtonComp from '../../../Components/ButtonComp/ButtonComp'
import { InputCompo } from '../../../Components/InputCompo/InputCompo'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import CustomFileInput from '../../../Components/InputCompo/CustomFileInput'
import ModalComp from '../../../Components/ModalComp'
import HeaderCompo from '../../../Components/HeaderComp/HeaderCompo'
const LegalRegistration = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openModal = (e) => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <>
            <form className='flex flex-col gap-[30px] ' action="">
                <div className='w-[100%] flex gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomSelection required={true} label='Legal Registration' />
                    </div>
                    <div className='w-[100%]'>
                        <CustomInput required={true} label='Please Specify' />
                    </div>
                </div>

                <div className='w-[100%] p-[20px] bg-[#F2F2F7] rounded-md flex gap-2' >
                    <p>
                        <span className='font-bold'>Note :</span>
                        Please fill all details correctly as you cannot make any corrections. Upload your registration certificate or the pages of your trust deed containing name clause and Sub-Registrar's stamp. Documents can be only PDF with file size less than 1MB. Click the ADD button to enter the details of each type of your registration, if you have multiple registrations such as trust and society
                    </p>
                </div>
                <div className='border-b-2' />

                {/* add entry section */}

                <div className=' p-[20px] rounded-md bg-[#F2F2F7] items-center flex flex-col gap-[10px]'>
                    <ImageComp className='h-[200px] ' source={'/Images/Add notes-bro.png'} />
                    <ParagraphComp className='text-md font-bold' text='Click the button to add an entry' />
                    <ButtonComp onClick={openModal} className='px-[20px] py-[10px] h-[40px] rounded-full bg-[#004878] text-white' type='button' text='Add Entry' />
                </div>

                <div className='border-b-2' />

                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required label='Previous Legal Name of the organization'
                        />
                        <ParagraphComp className='mt-[8px] text-black text-sm px-[8px]' text={'Name as per registration certificate/ Deed'} />
                    </div>
                    <div className='w-[100%]'>
                        <CustomInput required label='Other Names'
                        />
                        <ParagraphComp className='mt-[8px] text-black text-sm px-[8px]' text={'Name as per registration certificate/ Deed'} />
                    </div>
                </div>
                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required label='Organisation Website'
                        />
                        <ParagraphComp className='mt-[8px] text-black text-sm px-[8px]' text={'Enter the correct address starting with http:// for example http://www.guidestar.org'} />
                    </div>
                    <div className='w-[100%]'>

                    </div>
                </div>

                <div className='border-b-2' />

                <div className=''>
                    <ParagraphComp className='font-bold text-lg' text='Correspondence Address *' />
                </div>
                <label className="flex items-center space-x-2">
                    <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                    <span className='text-black'>Same as PAN address</span>
                </label>

                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomSelection required label='Address Type'
                        />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required label='State' />
                    </div>
                </div>

                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required label='Unit No./ Room No./ Building name'
                        />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required label='District' />
                    </div>
                </div>
                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required label='Street Area'
                        />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required label='Pin code ' />
                    </div>
                </div>
                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required label='City/Town/Taluk/Village'
                        />
                    </div>
                    <div className='w-[100%]'>
                        <CustomInput required label='Land Mark' />
                    </div>
                </div>
                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required endLabel={<MyLocationIcon />} label='Location on Map'
                        />
                        <ParagraphComp className='mt-[8px] text-black text-sm px-[8px]' text={'Click the Locate icon to open map and pin location'} />
                    </div>
                </div>

                <div className='border-b-2' />


                <div className='w-[100%] mt-[20px] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomFileInput required label='City/Town/Taluk/Village'
                        />
                        <ParagraphComp className='mt-[8px] text-black text-sm px-[8px]' text={'Address Proof'} />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required label='Address Type' />
                    </div>
                </div>


                <div className=''>
                    <ParagraphComp className='font-bold text-lg' text='Registered Address *' />
                </div>
                <label className="flex items-center space-x-2">
                    <InputCompo className='bg-[#004878] text-white w-[20px] h-[20px]' type='checkbox' />
                    <span className='text-black'>Same as Correspondence address</span>
                </label>

                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomSelection required label='Address Type'
                        />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required label='State' />
                    </div>
                </div>

                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required label='Unit No./ Room No./ Building name' />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required label='District' />
                    </div>
                </div>
                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required label='Street Area'
                        />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required label='Pin code ' />
                    </div>
                </div>
                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required label='City/Town/Taluk/Village'
                        />
                    </div>
                    <div className='w-[100%]'>
                        <CustomInput required label='Land Mark' />
                    </div>
                </div>
                <div className='w-[100%] flex gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required endLabel={<MyLocationIcon />} label='Location on Map'
                        />
                        <ParagraphComp className='mt-[8px] text-black text-sm px-[8px]' text={'Click the Locate icon to open map and pin location'} />
                    </div>
                </div>


                <div className='flex justify-end'>
                    <div className='flex gap-[20px]'>
                        <ButtonComp text={'Save'} className='px-[20px] rounded-full border-1 border-[#004878] text-[#004878] py-[10px]' />
                        <ButtonComp text={'Save & Next'} className='px-[20px] rounded-full bg-[#004878] text-[white] py-[10px]' />
                    </div>
                </div>

            </form>


            <ModalComp modalIsOpen={modalIsOpen} closeModal={closeModal} width={"50%"} >
                <div >
                    <HeaderCompo tagType='h4' className='text-xl text-black' text='Add Entry' />
                    <div className='w-[100%] flex flex-col gap-[30px]'>
                        <div className='w-[100%] flex  gap-[24pt]'>
                            <div className='w-[100%]'>
                                <CustomSelection label={'Registration as '} />
                                <ParagraphComp text='Has your IT PAN changed? if yes,kindly indicate the same' className='mt-[8px] text-black text-sm px-[8px]' />
                            </div>
                            <div className='w-[100%]'>
                                <CustomSelection label={'State of registration of Non Profit entry *'} />
                            </div>
                        </div>
                        <div className='w-[100%] flex   gap-[24pt]'>
                            <div className='w-[100%]'>
                                <CustomInput type={'date'} label={'Registration Date as a Non Profit Entry *'} />
                            </div>
                            <div className='w-[100%]'>
                                <CustomInput label={'Registration number of non profit entry *'} />
                                <ParagraphComp text='If you do not have a number please write NA' className='mt-[8px] text-black text-sm px-[8px]' />

                            </div>

                        </div>
                        <div className='w-[100%] flex   gap-[24pt]'>
                            <div className='w-[100%]'>
                                <CustomSelection label={'Registration Status as a Non Profit Entry *'} />
                            </div>
                            <div className='w-[100%]'>
                                <CustomInput type={'date'} label={'Registration Valid Till'} />
                            </div>
                        </div>
                        <div className='w-[100%] flex  gap-[24pt]'>
                            <div className='w-[100%]'>
                                <CustomSelection label={'Registration Authority *'} />
                            </div>
                            <div className='w-[100%]'>
                                <CustomInput label={'Registration Act *'} />
                            </div>
                        </div>
                        <div className='w-[100%] flex gap-[24pt]'>
                            <div className='w-[100%]'>
                                <CustomSelection label={'Registration Legacy'} />
                            </div>
                            <div className='w-[100%]'>
                                <CustomFileInput label={'Upload Document'} />
                            </div>
                        </div>

                    </div>
                    <div className='border-b-2' />

                    <div className='w-[100%] justify-between flex mt-4'>
                        <div>
                            <ButtonComp className={'border-none bg-none px-[20px] py-[6px]  bg-[red] rounded-full text-white'} text={'Delete'} />
                        </div>
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

export default LegalRegistration