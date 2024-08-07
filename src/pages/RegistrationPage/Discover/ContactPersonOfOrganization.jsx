import React from 'react'
import CustomInput from '../../../Components/InputCompo/CustomInput'
import { ParagraphComp } from '../../../Components/ParagraphComp/ParagraphComp'
import { InputCompo } from '../../../Components/InputCompo/InputCompo'
import HeaderCompo from '../../../Components/HeaderComp/HeaderCompo'
import ButtonComp from '../../../Components/ButtonComp/ButtonComp'

const ContactPersonOfOrganization = () => {
  return (
    <>
      <form className='flex flex-col gap-[30px]' action="">
        <div className='w-[100%] '>
          <CustomInput label='Organization Contact person’s name' />
          <ParagraphComp text='Alternate Contact Person is the person who will attend to enquiries and manage your content on the GuideStar India site. Please do not enter details if the person is the same as the Head of Organisation. We recommend that you have a contact person other than Head of the Organisation' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
        </div>

        <div className='w-[100%] flex  gap-[24pt] '>
          <div className='w-[100%]'>
            <CustomInput label='Organizations Contact Person Designation' />
          </div>
          <div className='w-[100%]'>
            <CustomInput required={true} label="Organizations Contact Person Email Id" />
          </div>
        </div>
        <div className='border-b-2' />
        <div>

          <div className='p-[20px] border-b-transparent border-2 rounded-t-[8px] flex items-center justify-between'>
            <HeaderCompo className='text-lg text-black mt-0 m-0' tagType='h3' text='Organization’s Contact Person’s Contact Number' />

          </div>
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
        <div>

          <div className='p-[20px] border-b-transparent border-2 rounded-t-[8px] flex items-center justify-between'>
            <HeaderCompo className='text-lg text-black mt-0 m-0' tagType='h3' text='Organization’s Contact Person’s Mobile Number' />

          </div>
          <table className='border-2 text-[#667085] font-light  rounded-t-2xl w-[100%]'>
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

        <div className='w-[100%] flex  gap-[24pt] '>
          <div className='w-[100%]'>
            <CustomInput label='Whatsapp Contact Details' />
            <ParagraphComp text='Kindly share the number on which whatsapp communication can be shared' className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' />
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

export default ContactPersonOfOrganization