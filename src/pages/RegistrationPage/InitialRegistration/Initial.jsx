import React, { useEffect, useState } from 'react'
import CustomInput from '../../../Components/InputCompo/CustomInput'
import CustomSelection from '../../../Components/SelectionComp/CustomSelection'
import { ParagraphComp } from '../../../Components/ParagraphComp/ParagraphComp'
import HeaderCompo from '../../../Components/HeaderComp/HeaderCompo'
import ButtonComp from '../../../Components/ButtonComp/ButtonComp'
import { useMutation, useQuery } from '@tanstack/react-query'
import { InputCompo } from '../../../Components/InputCompo/InputCompo'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { allCountries } from '../RegistrationDatas'
import CustomFileInput from '../../../Components/InputCompo/CustomFileInput'
import { m } from 'framer-motion'
import { zoomIn } from '../../../Functions/GlobalAnimations'
import { enqueueSnackbar } from 'notistack'
import { initialLoading, initialRegistration, initialSubRegistration } from '../../../Store/auth/register'
const RegistrationFirst = ({ setMainForm }) => {
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [file64, setFile64] = useState()
    const [fileName, setFileName] = useState()
    const [tableValues, setTableValues] = useState([{}])

    const { isLoading: fieldLoading, data: InitialRegQ } = useQuery({
        queryKey: 'Questions',
        queryFn: () => initialLoading(),
    });

    const modelSchema = Yup.object().shape({

        ...InitialRegQ?.documents?.reduce((schema, fields) => {

            if (fields.mandatory === 1 && fields.type.toLowerCase() !== 'section') {

                schema[fields?.question_no] = Yup.string().required(`${fields.question} is required`);

                if (fields.validation.toLowerCase() === 'email') {
                    schema[fields?.question_no] = Yup.string()
                        .email('Invalid email address')
                        .required(`${fields.question} is required`);
                } else if (fields.validation.toLowerCase() === 'pan') {
                    schema[fields?.question_no] = Yup.string()
                        .required(`${fields.question} is required`).matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number. It should be in the format: ABCDE1234F.");
                } else if (fields.validation.toLowerCase() === 'darpan') {

                    schema[fields?.question_no] = Yup.string()

                        .required(`${fields.question} is required`)

                        .test(
                            'is-valid-darpan',

                            'Invalid PAN Number. It should be in the format: ABCDE1234F.',
                            (value) => {
                                if (value?.toUpperCase() === 'NA') {
                                    return true;
                                }
                                return /^([A-Z]{2}\/\d{4}\/\d{7})$/.test(value);
                            }
                        );
                }
            }

            return schema;
        }, {}),
    });

    const formik = useFormik({
        initialValues: InitialRegQ?.documents?.reduce((values, fields,) => {
            values[fields?.question_no] = '';  // Initializing values for each field dynamically
            return values;
        }, {}),
        validationSchema: modelSchema,
        enableReinitialize: true,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const tempData = InitialRegQ?.documents?.map(fields => {
                    if (evaluateCondition(formik?.values?.[fields?.depend_question], fields.condition, fields.value)) {
                        return {
                            question_no: fields?.question_no,
                            attach_file: file64,
                            file_name: fileName
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
                console.log(structuredData)
                await submitData(structuredData);
            } catch (error) {
                console.error(error);
            } finally {
                setSubmitting(false);
            }
        },
    });


    // separate Update table values 

    const tableValuesUpdate = (e, name, index) => {
        const value = e?.target?.value
        let tempData = [...tableValues]
        tempData[index] = {
            ...tempData[index], [name]: value
        }
        setTableValues(tempData)
    }

    console.log(tableValues)

    // Add table rows 

    const addRow = (Qnm) => {

        const findTable = InitialRegQ?.documents?.find(ele => ele.question_no === Qnm)


        const nullValues = findTable.sub_questions.map(ele => {
            if (tableValues[tableValues.length - 1]?.[ele.question_no]) {
                return tableValues[tableValues.length - 1]?.[ele.question_no]
            } else {
                return null
            }
        }
        ).filter(value => value !== null)
        console.log("nullValues>>>>>>", nullValues)
        if (nullValues.length > 0) {
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
                const main_question_no = InitialRegQ?.documents?.find(ele => ele.type.toLowerCase() === 'section')
                let passedValues = {
                    args: {
                        reg_name: reg_name,
                        main_question_no: main_question_no?.question_no,
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



    useEffect(() => {
        if (formik.isValid && formik.dirty) {
            setMainForm(formik.values);
        }
    }, [formik.values, formik.isValid, formik.dirty]);



    const evaluateCondition = (value1, condition, value2) => {
        switch (condition) {
            case '===':
                return value1 === value2;
            case '!==':
                return value1 !== value2;
            case '>':
                return value1 > value2;
            case '<':
                return value1 < value2;
            case '>=':
                return value1 >= value2;
            case '<=':
                return value1 <= value2;
            // Add more cases as needed
            default:
                return false;
        }
    };




    // loading questions

    if (fieldLoading || subLoading || mainRegistration) return (<><h5>Loading...</h5> </>)




    // set default fields


    console.log("formik.values>>>>", formik.values)

    return (
        <>

            <form className='flex flex-col gap-[30px]' onSubmit={formik.handleSubmit} action="">
                <div className='flex flex-wrap gap-[30px] justify-between 100%'>
                    {InitialRegQ?.documents.map(Fields =>
                        <>
                            <div className='w-[48%]'>
                                {Fields.type.toLowerCase() === 'text' || Fields.type.toLowerCase() === 'number' ?
                                    <div className={`${evaluateCondition(formik?.values?.[Fields?.depend_question], Fields.condition, Fields.value) ? 'block' : 'block'}`}>

                                        <CustomInput required
                                            {...formik.getFieldProps(Fields.question_no)}
                                            name={Fields.question_no} label={Fields.question}

                                        />
                                        <ParagraphComp className='text-[red] text-[10px] px-[8px] mt-1' text={formik.values?.[Fields.question_no] && formik.errors?.[Fields.question_no]} />
                                        <ParagraphComp className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' text={Fields.description} />
                                    </div>
                                    :
                                    Fields.type.toLowerCase() === 'dropdown'
                                        ?
                                        <div className={`${evaluateCondition(formik?.values?.[Fields?.depend_question], Fields.condition, Fields.value) ? 'block' : 'block'}`}>
                                            <>
                                                <CustomSelection required options={Fields?.options}
                                                    {...formik.getFieldProps(Fields.question_no)}
                                                    name={Fields.question_no} label={Fields.question}
                                                />
                                                <ParagraphComp className='text-[red] text-[10px] px-[8px] mt-1' text={formik.values?.[Fields.question_no] && formik.errors?.[Fields.question_no]} />
                                                <ParagraphComp className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' text={Fields.description} />                                        </>
                                        </div>
                                        :
                                        Fields.type.toLowerCase() === 'attach' ?
                                            <div className={`${!evaluateCondition(formik?.values?.[Fields?.depend_question], Fields.condition, Fields.value) || !formik?.values?.[Fields?.depend_question] ? 'hidden' : 'block'}`}>
                                                <>
                                                    <CustomFileInput required options={Fields?.options}
                                                        onChange={attachFile}
                                                        value={fileName}
                                                        name={Fields.question_no} label={Fields.question}
                                                    />
                                                    <ParagraphComp className='text-[red] text-[10px] px-[8px] mt-1' text={formik.values?.[Fields.question_no] && formik.errors?.[Fields.question_no]} />
                                                    <ParagraphComp className='mt-[8px] text-[#5A5A5A] text-sm px-[8px]' text={Fields.description} />                                              </>
                                            </div>
                                            : ''

                                }
                            </div>
                            {Fields.type.toLowerCase() === 'section' ?
                                <>
                                    <div className='w-[100%]'>
                                        <div className='p-[20px] w-[100%] border-2 rounded-t-xl flex items-center justify-between'>
                                            <HeaderCompo className='text-xl text-black mt-0 m-0' tagType='h3' text='Communication' />
                                            <div className='flex gap-[20px]'>
                                                {
                                                    tableValues.find(ele => ele?.check) &&
                                                    <m.div {...zoomIn}>
                                                        <ButtonComp type='button' onClick={DeleteRows} text={<i class="fa-regular fa-trash-can text-white"></i>} className='px-[20px] h-[40px] text-white bg-[red] rounded-full py-[5px]' />
                                                    </m.div>
                                                }
                                                <ButtonComp type='button' onClick={() => addRow(Fields.question_no)} text='Add' className='px-[20px] h-[40px] text-white bg-[#004878] rounded-full py-[5px]' />
                                            </div>
                                        </div>
                                        <table className='border-2 text-[#667085] rounded-t-2xl w-[100%]'>
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
                                                {Fields.sub_questions.map(subQ =>

                                                    <>
                                                        <th className='p-[10px]'>
                                                            {subQ.question} {subQ.type === 'Dropdown' && <i class="fa-solid fa-arrow-down "></i>}
                                                        </th>

                                                    </>
                                                )}
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
                                                    {Fields.sub_questions.map(subQ =>
                                                        <>
                                                            {subQ.type === 'Dropdown'
                                                                ?
                                                                <td className='p-[10px]'>
                                                                    <CustomSelection mappingKey={subQ?.question === 'Country Code' ? 'phone' : ''} options={subQ?.question === 'Country Code' ? allCountries : subQ?.options} onChange={(e) => tableValuesUpdate(e, subQ.question_no, index)} value={values?.[subQ.question_no]} label="Select" />
                                                                </td>
                                                                :
                                                                subQ.type === 'Text' || subQ.type === 'Number'
                                                                    ?
                                                                    <td className='p-[10px]'>
                                                                        <CustomInput options={subQ?.options} type={subQ?.type?.toLowerCase()} onChange={(e) => tableValuesUpdate(e, subQ.question_no, index)} value={values?.[subQ.question_no]} label="Select" />
                                                                    </td>
                                                                    : ''
                                                            }
                                                        </>
                                                    )}
                                                </tr>
                                            )}
                                        </table >
                                    </div>
                                </>
                                : ''
                            }
                        </>
                    )}


                </div >
                <div className='flex justify-end'>
                    <ButtonComp type={'submit'} className='px-[20px] py-[6px] h-[40px] text-white bg-[#004878] rounded-full ' text='Save & Next' />
                </div>

            </form >


        </>
    )
}

export default RegistrationFirst