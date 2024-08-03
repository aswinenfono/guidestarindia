import React, { useEffect, useState } from 'react'
import CustomInput from '../../Components/InputCompo/CustomInput'
import CustomSelection from '../../Components/SelectionComp/CustomSelection'
import { ParagraphComp } from '../../Components/ParagraphComp/ParagraphComp'
import HeaderCompo from '../../Components/HeaderComp/HeaderCompo'
import ButtonComp from '../../Components/ButtonComp/ButtonComp'
import { useMutation, useQuery } from '@tanstack/react-query'
import { initialLoading, initialRegistration, initialSubRegistration } from '../../Store/auth'
import { InputCompo } from '../../Components/InputCompo/InputCompo'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { allCountries } from './RegistrationDatas'
import CustomFileInput from '../../Components/InputCompo/CustomFileInput'
import { m } from 'framer-motion'
import { fadeIn, zoomIn } from '../../Functions/GlobalAnimations'
import { enqueueSnackbar } from 'notistack'
const RegistrationFirst = () => {
    const [tableDropDowns, setTableDropDowns] = useState()
    const [tableDatas, setTableDatas] = useState()
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [file64, setFile64] = useState()
    const [fileName, setFileName] = useState()
    const [tableValues, setTableValues] = useState([{}])


    const modelSchema = Yup.object().shape({
        'IRQ-00001': Yup.string()
            .required("PAN number is required")
            .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number. It should be in the format: ABCDE1234F."),
        'IRQ-00004': Yup.string()
            .email('Invalid email address')
            .required('Organization primary Email'),
        'IRQ-00005': Yup.string()
            .email('Invalid email address')
            .required('Confirm Email address')
            .oneOf([Yup.ref('IRQ-00004'), null], 'Emails must match'),
        'IRQ-00002': Yup.string()
            .matches(/^([A-Z]{2}\/\d{4}\/\d{7})$/, "Enter 2 characters for state, four numbers for year and 7 numbers for the actual registration number")
            .required("Darpan ID is required"),
        'IRQ-00003': Yup.string()
            .required("Name of the organisation"),
        'IRQ-00007': Yup.string()
            .required("Name of the Person filling the form"),
        'IRQ-00008': Yup.string()
            .required("Designation of the person"),
        'IRQ-00009': Yup.string()
            .required("Designation of the person"),
        'IRQ-00010': Yup.string()
            .required("Designation of the person"),
    });




    const updateDropDownNames = (name) => {
        if (tableDropDowns?.[name]) {
            setTableDropDowns({ [name]: false })
        } else {
            setTableDropDowns({ [name]: true })
        }
    }




    const { isLoading: fieldLoading, data } = useQuery({
        queryKey: 'Questions',
        queryFn: () => initialLoading(),
    });

    useEffect(() => {
        if (data?.documents) {
            const filteredValue = data.documents.find(ele => ele?.question_no === 'IRQ-00006')
            if (filteredValue) {
                setTableDatas(filteredValue)
            }
        }
    }, [data?.documents])

    const formik = useFormik({
        initialValues: {
            'IRQ-00001': '',
            'IRQ-00002': '',
            'IRQ-00003': '',
            'IRQ-00004': '',
            'IRQ-00005': '',
            'IRQ-00005': '',
            'IRQ-00007': '',
            'IRQ-00008': '',
            'IRQ-00009': '',
            'IRQ-00010': '',
            'IRQ-00011': '',
        },
        validationSchema: modelSchema,
        enableReinitialize: true,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                const tempData = [];
                const keys = [
                    'IRQ-00001', 'IRQ-00002', 'IRQ-00003', 'IRQ-00004',
                    'IRQ-00005', 'IRQ-00006', 'IRQ-00007', 'IRQ-00008', 'IRQ-00009',
                    'IRQ-00010', 'IRQ-00011'
                ];

                for (const key of keys) {
                    if ((formik.values['IRQ-00010'] === "Obtained via email" || formik.values['IRQ-00010'] === "Obtained via call") && key === 'IRQ-00011') {
                        tempData.push({
                            question_no: key,
                            attach_file: file64,
                            file_name: fileName
                        });
                    } else {
                        tempData.push({
                            question_no: key,
                            answer: values[key]
                        });
                    }
                }

                const structuredData = {
                    args: {
                        name: '',
                        initial_registration_answers: tempData
                    }
                };

                await submitData(structuredData);

            } catch (error) {
                console.error(error);
            } finally {
                setSubmitting(false);
            }
        },
    });




    const onOptionClick = (e, name) => {
        const value = e?.target?.value
        let tempData = [...tableValues]
        tempData[tableValues?.length - 1] = { ...tempData[tableValues?.length - 1], [name]: value }
        setTableValues(tempData)
        setTableDropDowns('')
    }


    const tableValuesUpdate = (e, name, index) => {
        const value = e?.target?.value
        let tempData = [...tableValues]
        tempData[index] = { ...tempData[index], [name]: value }
        setTableValues(tempData)
    }
    const addRow = () => {
        const nullValues =
            tableValues[tableValues.length - 1]?.['SQ-00001'] ||
            tableValues[tableValues.length - 1]?.['SQ-00002'] ||
            tableValues[tableValues.length - 1]?.['SQ-00003'] ||
            tableValues[tableValues.length - 1]?.['SQ-00004']
        if (nullValues) {
            setTableValues([...tableValues, {}])
        } else {
            enqueueSnackbar('Please ensure that at least one field is filled out', { variant: 'warning' });
        }
    }
    const CheckAllFields = (e, index) => {
        let tempValues = [...tableValues];

        if (typeof index === 'undefined') {
            setIsCheckedAll(!isCheckedAll)
            tempValues = tempValues.map((ele) => ({
                ...ele,
                check: !isCheckedAll,
            }));
        } else {
            tempValues[index] = { ...tempValues[index], check: !tempValues[index].check };
        }
        const findChecked = tempValues.filter(ele => ele.check)
        if (findChecked.length === tempValues.length) {
            setIsCheckedAll(true)
        } else {
            setIsCheckedAll(false)
        }
        setTableValues(tempValues);
    };


    const submitData = (formData) => {
        const allFieldsPresent = tableValues.every(ele =>
            ele?.['SQ-00001'] &&
            ele?.['SQ-00004']
        );
        if (allFieldsPresent) {
            if (formik?.values['IRQ-00010'] === 'Obtained via call' || formik?.values['IRQ-00010'] === 'Obtained via email') {
                if (file64) {
                    submitInitialReg(formData)
                } else {
                    enqueueSnackbar('Concent proof is required', { variant: 'warning' });
                }
            } else {
                submitInitialReg(formData)
            }
        } else {
            enqueueSnackbar('Please check Communication fields', { variant: 'warning' });
        }
    }



    const handleCreateSuccess = () => {
        enqueueSnackbar('success!', { variant: 'success' });
    };

    const handleCreateError = (error) => {
        if (error?.response?.data.status_code >= 500) {
            enqueueSnackbar(error?.response?.data?.status_message, { variant: 'error' });
        } else {
            enqueueSnackbar(error?.response?.data?.message || error?.message, { variant: 'error' });

        }
    };

    const createFarmerMutationOptions = {
        onSuccess: handleCreateSuccess,
        onError: handleCreateError,
    };

    const {
        mutate: submitInitialReg,
        data: regFinalData,
        isPending: mainRegistration
    } = useMutation({
        mutationFn: initialRegistration,
        ...createFarmerMutationOptions,
    });



    useEffect(() => {
        if (regFinalData?.application_no) {
            submitTable(regFinalData?.application_no)
        }
    }, [regFinalData?.application_no])



    const attachFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result.split(',')[1];
                setFile64(base64String)
                setFileName(file.name)
            };
            reader.readAsDataURL(file);
        }
    };

    const DeleteRows = () => {
        let tempValues = [...tableValues];
        let deleteArray = [];
        tableValues.map((ele, index) => {
            if (ele?.check) {
                deleteArray.push(index);
            }
        });

        deleteArray.sort((a, b) => b - a);
        deleteArray.forEach(index => {
            tempValues.splice(index, 1);
        });

        setTableValues(tempValues);
    };

    const submitTable = async (reg_name) => {
        if (reg_name) {
            try {
                let passedValues = {
                    args: {
                        reg_name: reg_name,
                        main_question_no: 'IRQ-00006',
                        question_answers: []
                    }
                };

                // Using forEach instead of map since we're not using the return value of map
                await tableValues.forEach((ele, index) => {
                    let tempQuestion_answers = [];

                    const keys = Object.keys(ele);
                    keys.forEach((key) => {
                        tempQuestion_answers.push({
                            question_no: key,
                            answer: ele[key]
                        });
                    });

                    passedValues.args.question_answers[index] = tempQuestion_answers;
                });

                if (passedValues.args.question_answers.length > 0) {
                    submitSubReg(passedValues);
                }
            } catch (error) {
                console.log(error);
            }

        }

    };
    const {
        mutate: submitSubReg,
        isPending: subLoading,
    } = useMutation({
        mutationFn: initialSubRegistration,
        ...createFarmerMutationOptions,
    });


    if (fieldLoading || subLoading || mainRegistration) { return (<><h3>Loading...</h3></>) }

    return (
        <>
            <form className='flex flex-col gap-[30px]' onSubmit={formik.handleSubmit} action="">
                <div className='flex w-[90%] gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required
                            {...formik.getFieldProps('IRQ-00001')}
                            name='IRQ-00001' label='PAN Number'
                            error={formik.errors?.['IRQ-00001'] && formik.values?.['IRQ-00001'] ? true : false} />
                        <ParagraphComp Data={{ className: ' text-[red] text-[10px] px-[8px]', text: formik.values?.['IRQ-00001'] && formik.errors?.['IRQ-00001'] }} />
                        <ParagraphComp Data={{ className: 'mt-[8px] text-black text-sm px-[8px]', text: `Organization's PAN exactly as per your PAN card all CAPITALS without any spaces or full stop.` }} />
                    </div>
                    <div className='w-[100%]'>
                        <CustomInput required
                            {...formik.getFieldProps('IRQ-00004')}
                            name='IRQ-00004' error={formik.errors?.['IRQ-00004'] && formik.values?.['IRQ-00004'] ? true : false}
                            label='Organization primary Email' />
                        <ParagraphComp Data={{ className: ' text-[red] text-[10px] px-[8px]', text: formik.values?.['IRQ-00004'] && formik.errors?.['IRQ-00004'] }} />
                    </div>
                </div>
                <div className='flex w-[90%] gap-[24pt]'>
                    <div className='w-[100%]'>
                        <CustomInput required
                            {...formik.getFieldProps('IRQ-00002')}
                            error={formik.errors?.['IRQ-00002'] && formik.values?.['IRQ-00002'] ? true : false}
                            name={'IRQ-00002'}
                            label='Darpan ID' />
                        <ParagraphComp Data={{ className: 'text-[red] text-[10px] px-[8px]', text: formik.values?.['IRQ-00002'] && formik.errors?.['IRQ-00002'] }} />
                        <ParagraphComp Data={{ className: 'mt-[8px] text-black text-sm px-[8px]', text: `If you are not registered on NITI AAYOG DARPAN, please enter NA` }} />
                    </div>
                    <div className='w-[100%] '>
                        <CustomInput name='IRQ-00005'
                            {...formik.getFieldProps('IRQ-00005')} error={formik.errors?.['IRQ-00005'] && formik.values?.['IRQ-00005'] ? true : false}
                            label='Confirm Email Address' />
                        <ParagraphComp Data={{ className: ' text-[red] text-[10px] px-[8px]', text: formik.values?.['IRQ-00005'] && formik.errors?.['IRQ-00005'] }} />

                    </div>
                </div>
                <div className='flex w-[90%] gap-[24pt]'>
                    <div className='w-[50%] pe-[12pt]'>
                        <CustomInput
                            required
                            {...formik.getFieldProps('IRQ-00003')}
                            name="IRQ-00003" label='Name of the organization'
                            error={formik.errors?.['IRQ-00003'] && formik.values?.['IRQ-00003'] ? true : false}
                        />
                        <ParagraphComp Data={{ className: 'mt-[8px] text-black text-sm px-[8px]', text: `Name as Per Registration Certificate/Deed` }} />
                    </div>
                </div>
                <div>
                    <div className='p-[20px] border-2 rounded-t-xl flex items-center justify-between'>
                        <HeaderCompo className='text-xl text-black mt-0 m-0' tagType='h3' text='Communication' />
                        <div className='flex gap-[20px]'>
                            {
                                tableValues.find(ele => ele?.check) &&
                                <m.div {...zoomIn}>
                                    <ButtonComp type='button' onClick={DeleteRows} text={<i class="fa-regular fa-trash-can text-white"></i>} className='px-[20px]  text-white bg-[red] rounded-full py-[5px]' />
                                </m.div>
                            }
                            <ButtonComp type='button' onClick={addRow} text='Add' className='px-[20px] text-white bg-[#004878] rounded-full py-[5px]' />
                        </div>
                    </div>
                    <table className='border-2 rounded-t-2xl w-[100%]'>
                        <tr className='border-b-2 '>
                            <th className='p-[10px]'>
                                {tableValues.length > 1 ?
                                    <m.div {...zoomIn} className='flex items-center'>
                                        <InputCompo checked={isCheckedAll} onClick={(e) => { CheckAllFields(e) }} className='w-[25px] h-[25px] rounded-lg mr-auto ml-auto mt-auto mb-auto' type={'checkbox'} />
                                    </m.div>
                                    :
                                    <>
                                        <div className='w-[25px]'> </div>
                                    </>
                                }

                            </th>
                            <th className='p-[10px]'>
                                No.
                            </th>
                            <th className='p-[10px]'>

                                <div className='relative'>
                                    Telephone No. Type <i onClick={() => { updateDropDownNames("Telephone No. Type") }} class="fa-solid fa-arrow-down cursor-pointer"></i>
                                    {
                                        tableDropDowns?.["Telephone No. Type"] &&
                                        <div class=" p-[10px] bg-slate-100 absolute z-[99] w-fit" >
                                            {tableDatas?.sub_questions?.find(ele => ele.question_no === "SQ-00001")?.options?.map(type =>
                                                <option className='hover:bg-[#004878] rounded-lg p-[5px] cursor-pointer hover:text-white' onClick={(e) => { onOptionClick(e, 'SQ-00001') }} value={type?.option} >{type?.option}</option>
                                            )}
                                        </div>
                                    }
                                </div>
                            </th>
                            <th className='p-[10px]'>


                                <div className='relative'>
                                    Country Code <i onClick={() => { updateDropDownNames("Country Code") }} class="fa-solid fa-arrow-down cursor-pointer"></i>
                                    {
                                        tableDropDowns?.["Country Code"] &&
                                        <div class="p-[10px] bg-slate-100 max-h-[150px] overflow-y-scroll min-w-[150px]   absolute z-[99] w-fit" >
                                            {allCountries.map(country =>
                                                <option className='hover:bg-[#004878] rounded-lg p-[5px] cursor-pointer hover:text-white' onClick={(e) => { onOptionClick(e, 'SQ-00002') }} value={`+${country?.phone}`}>{country?.phone}</option>
                                            )}
                                        </div>
                                    }
                                </div>
                            </th>
                            <th className='p-[10px]'>
                                Area code
                            </th>
                            <th className='p-[10px]'>
                                Telephone No.
                            </th>
                        </tr>
                        {tableValues.map((values, index) =>
                            <tr key={index} className='border-b-2'>
                                <td className='p-[10px] '>
                                    {tableValues?.length > 1 ?
                                        <m.div {...zoomIn} className='flex items-center'>
                                            <InputCompo checked={values?.check} onClick={(e) => CheckAllFields(e, index)} type='checkbox' className='w-[25px] h-[25px] mr-auto ml-auto mt-auto mb-auto' />
                                        </m.div>
                                        :
                                        <>
                                            <div className='w-[25px]'>

                                            </div>
                                        </>
                                    }

                                </td>
                                <td className='text-start p-[10px]'>
                                    {index + 1}
                                </td>
                                <td className='p-[10px]'>
                                    <CustomInput onChange={(e) => tableValuesUpdate(e, 'SQ-00001', index)} value={values?.['SQ-00001']} label="Enter" />
                                </td>
                                <td className='p-[10px]'>
                                    <CustomInput disabled={values?.['SQ-00001']?.toLowerCase() === 'Mobile'.toLowerCase() ? false : true} onChange={(e) => tableValuesUpdate(e, 'SQ-00002', index)} value={values?.['SQ-00002']} label="Enter" />
                                </td>
                                <td className='p-[10px]'>
                                    <CustomInput disabled={values?.['SQ-00001']?.toLowerCase() === 'Telephone'.toLowerCase() ? false : true} type='number' onChange={(e) => tableValuesUpdate(e, 'SQ-00003', index)} value={values?.['SQ-00003']} label="Enter" />
                                </td>
                                <td className='p-[10px]'>
                                    <CustomInput type='number' onChange={(e) => tableValuesUpdate(e, 'SQ-00004', index)} value={values?.['SQ-00004']} label="Enter" />
                                </td>
                            </tr>
                        )}

                    </table>
                </div>

                <div className='w-[100%] '>
                    <div className='w-[100%] flex gap-[24pt]'>
                        <div className='w-[100%]  flex gap-[30px] flex-col'>
                            <div className='w-[100%]'>
                                <CustomInput required
                                    {...formik.getFieldProps('IRQ-00007')}
                                    name='IRQ-00007' label='Name of the Person filling the form' />
                                <ParagraphComp Data={{ className: 'text-[red] text-[10px] px-[8px]', text: formik.values?.['IRQ-00007'] && formik.errors?.['IRQ-00007'] }} />
                            </div>
                            <div className='w-[100%]'>
                                <CustomInput label='Place'
                                    required
                                    {...formik.getFieldProps('IRQ-00009')}
                                    name='IRQ-00009'
                                />
                                <ParagraphComp Data={{ className: 'text-[red] text-[10px] px-[8px]', text: formik.values?.['IRQ-00009'] && formik.errors?.['IRQ-00009'] }} />
                            </div>
                            <div className='w-[100%]'>
                                <CustomInput
                                    required
                                    {...formik.getFieldProps('IRQ-00008')}
                                    name='IRQ-00008'
                                    label='Designation of the person' />
                                <ParagraphComp Data={{ className: 'text-[red] text-[10px] px-[8px]', text: formik.values?.['IRQ-00008'] && formik.errors?.['IRQ-00008'] }} />
                            </div>

                        </div>
                        <div className=' w-[100%] h-auto '>
                            <div className='w-[100%] flex flex-col gap-[30px] h-[100%]'>
                                <div className='w-[100%]'>
                                    <CustomSelection required
                                        {...formik?.getFieldProps('IRQ-00010')}
                                        options={data?.documents?.find(ele => ele?.question_no === 'IRQ-00010')?.options}
                                        name='IRQ-00010' label='Name of the Person filling the form' />
                                    <ParagraphComp Data={{ className: 'text-[red] text-[10px] px-[8px]', text: formik.values?.['IRQ-00010'] && formik.errors?.['IRQ-00010'] }} />
                                </div>
                                {
                                    formik?.values?.['IRQ-00010'] === 'Obtained via call' || formik?.values?.['IRQ-00010'] === 'Obtained via email' ?
                                        <m.div {...fadeIn} className='w-[100%]'>
                                            <CustomFileInput label='Consent Obtained proof'
                                                required
                                                onChange={attachFile}
                                                value={fileName}
                                            />
                                        </m.div>
                                        : ''
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <ButtonComp type={'submit'} className='px-[20px] py-[6px] text-white bg-[#004878] rounded-full ' text='Save & Next' />
                </div>
            </form >

        </>
    )
}

export default RegistrationFirst