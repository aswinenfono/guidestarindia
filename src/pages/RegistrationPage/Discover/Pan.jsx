import React, { useState } from 'react';
import CustomSelection from '../../../Components/SelectionComp/CustomSelection';
import CustomFileInput from '../../../Components/InputCompo/CustomFileInput';
import HeaderCompo from '../../../Components/HeaderComp/HeaderCompo';
import ButtonComp from '../../../Components/ButtonComp/ButtonComp';
import { ParagraphComp } from '../../../Components/ParagraphComp/ParagraphComp';
import CustomInput from '../../../Components/InputCompo/CustomInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useQuery } from '@tanstack/react-query';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { discoveryInitialQ } from '../../../Store/auth/register';

const RegistrationSecond = () => {
    const [tableDropDowns, setTableDropDowns] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [file64, setFile64] = useState();
    const [fileName, setFileName] = useState();

    const modelSchema = Yup.object().shape({
        'DRQ-00002': Yup.string()
            .required("PAN Legacy Has your IT PAN changed?"),
        'DRQ-00004': Yup.string()
            .required("PAN Legacy Has your IT PAN changed?"),
        'DRQ-00005': Yup.string()
            .required("Unit No/ Room No/ Door No, Building Name, Floor, Wing."),
        'DRQ-00006': Yup.string()
            .required("Street, Area."),
        'DRQ-00007': Yup.string()
            .required("City/ Town/ Taluka/ Village."),
        'DRQ-00008': Yup.string()
            .required("State"),
        'DRQ-00009': Yup.string()
            .required("District"),
        'DRQ-00010': Yup.string()
            .required('Pincode is required')
            .matches(/^[1-9][0-9]{5}$/, 'Pincode must be a valid 6-digit number')
            .max(6, 'Pincode must be exactly 6 digits'),
        'DRQ-00011': Yup.string()
            .required("Landmark"),
    });

    const formik = useFormik({
        initialValues: {
            'DRQ-00002': '',
            'DRQ-00004': '',
            'DRQ-00005': '',
            'DRQ-00006': '',
            'DRQ-00007': '',
            'DRQ-00008': '',
            'DRQ-00009': '',
            'DRQ-00010': '',
            'DRQ-00011': '',
        },
        validationSchema: modelSchema,
        enableReinitialize: true,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const tempData = discoverInitalData?.documents?.map(fields => {
                    if (fields.type.toLowerCase() === 'attach') {
                        console.log("fields>>>", fields)
                        return {
                            question_no: fields?.question_no,
                            attach_file: file64?.[fields?.question_no],
                            file_name: fileName?.[fields?.question_no]
                        };
                    } else {
                        return {
                            question_no: fields?.question_no,
                            answer: values[fields?.question_no]
                        };  
                    }
                });

                const structuredData = {
                    args: {
                        name: '',
                        initial_registration_answers: tempData
                    }
                };
                console.log("structuredData>>>>>", structuredData)
                await submitData(structuredData);

            } catch (error) {
                console.error(error);
            } finally {
                setSubmitting(false);
            }
        },
    });

    const { isLoading: fieldLoading, data: discoverInitalData } = useQuery({
        queryKey: 'DiscoverQuestions',
        queryFn: () => discoveryInitialQ(),
    });


    const submitData = async (formData) => {
    };



    const FileHandler = (e) => {
        const file = e?.target?.files[0];
        const name = e?.target?.name;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result.split(',')[1];
                setFile64({ ...file64, [name]: base64String })
                setFileName({ ...fileName, [name]: file.name })
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <>
            <form className='flex gap-[30px] w-[100%] flex-col' onSubmit={formik.handleSubmit}>

                {/* Upload pan section */}
                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomFileInput value={fileName?.['DRQ-00001']} onChange={FileHandler} name='DRQ-00001' label='Upload PAN Card' />
                        <ParagraphComp text='Income Tax Permanent Account Number(IT PAN) of the Non Profit' className='mt-[8px] text-black text-sm px-[8px]' />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required={true} {...formik.getFieldProps('DRQ-00002')} options={discoverInitalData?.documents.find(ele => ele.question_no === 'DRQ-00002').options} label="Has you IT PAN changed ?" />
                        <ParagraphComp text='Income Tax Permanent Account Number(IT PAN) of the Non Profit' className='mt-[8px] text-black text-sm px-[8px]' />
                    </div>
                </div>

                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[50%] pe-[13pt]'>
                        <CustomFileInput onChange={FileHandler} value={fileName?.['DRQ-00003']} name='DRQ-00003' label='Upload New PAN Card' />
                    </div>
                </div>

                <div className='border-b-2 mt-[25px]' />

                {/* Address as per PAN section */}
                <div className='w-[100%] flex mt-[25px] gap-[24pt]' >
                    <HeaderCompo tagType='h3' className='text-2xl mb-0 text-black' text='Registered Address' />
                </div>

                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomSelection required={true} {...formik.getFieldProps('DRQ-00004')} options={discoverInitalData?.documents.find(ele => ele.question_no === 'DRQ-00004').options} label='Address Type' />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required={true} {...formik.getFieldProps('DRQ-00008')} options={discoverInitalData?.documents.find(ele => ele.question_no === 'DRQ-00008').options} label="State" />
                    </div>
                </div>

                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput required={true} {...formik.getFieldProps('DRQ-00005')} label='Unit No./ Room No./ Building name' />
                    </div>
                    <div className='w-[100%]'>
                        <CustomSelection required={true} {...formik.getFieldProps('DRQ-00009')} options={discoverInitalData?.documents.find(ele => ele.question_no === 'DRQ-00009').options} label="District" />
                    </div>
                </div>
                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput required={true} {...formik.getFieldProps('DRQ-00006')} label='Street Area' />
                    </div>
                    <div className='w-[100%]'>
                        <CustomInput type='number' required={true} {...formik.getFieldProps('DRQ-00010')} label="Pin code" />
                        <ParagraphComp className='text-[red] text-[10px] mt-1 px-[8px]' text={formik.values?.['DRQ-00010'] && formik.errors?.['DRQ-00010']} />
                    </div>
                </div>
                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput required={true} {...formik.getFieldProps('DRQ-00007')} label='City/Town/Taluk/Village' />
                    </div>
                    <div className='w-[100%]'>
                        <CustomInput required={true} {...formik.getFieldProps('DRQ-00011')} label="Land Mark" />
                    </div>
                </div>
                <div className='w-[100%] flex  gap-[24pt] '>
                    <div className='w-[100%]'>
                        <CustomInput endLabel={<MyLocationIcon />} label='City/Town/Taluk/Village' />
                        <ParagraphComp text='Click the Locate icon to open map and pin location' className='mt-[8px] text-black text-sm px-[8px]' />
                    </div>
                </div>
                <div className='border-b-2' />
                <div className='flex justify-end'>
                    <div className='flex gap-[20px]'>
                        <ButtonComp text={'Save'} className='px-[20px] rounded-full border-1 border-[#004878] text-[#004878] py-[10px]' />
                        <ButtonComp type={'submit'} text={'Save & Next'} className='px-[20px] rounded-full bg-[#004878] text-[white] py-[10px]' />
                    </div>
                </div>
            </form>
        </>
    );
}

export default RegistrationSecond;
