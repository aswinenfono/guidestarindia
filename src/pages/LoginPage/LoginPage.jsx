import React from 'react';
import FooterComp from '../../Components/FooterComp/FooterComp';
import HeaderSec from '../../Components/HeaderSec/HeaderSec';
import './LoginPage.css';
import * as yup from 'yup';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ParagraphComp } from '../../Components/ParagraphComp/ParagraphComp';
import HeaderCompo from '../../Components/HeaderComp/HeaderCompo';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { login } from '../../Store/auth/login';

const LoginPage = () => {
    const schema = yup.object({
        username: yup.string().required("username is required"),
        password: yup.string().required("password is required")
    });
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (formData) => {
        const checkFields = !formData.username || !formData.password
        if (!checkFields) {
            loginMutate(formData);
        } else {
            enqueueSnackbar('Please fill out the form completely', { variant: 'warning' });
        }
    };

    const handleCreateSuccess = () => {
        enqueueSnackbar('Login success!', { variant: 'success' });
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

    //getting mutation alerts

    const {
        mutate: loginMutate,
        // isPending: addLoading,
        data: loginData
    } = useMutation({
        mutationFn: login,
        ...createFarmerMutationOptions,
    });
    console.log("loginData<<<<", loginData)

    return (
        <>
            <HeaderSec theme={"light"} />
            <Container className='ml-0 mr-0 w-[100%] max-w-[100%] p-0'>
                <section className='LoginPageBack p-[20px] max-md:p-[10px]'>
                    <Row className='w-[100%] max-sm:ml-0'>
                        <Col lg={6} className='max-md:hidden h-auto flex flex-col items-center justify-center'>
                            <div className='LoginPageBackDiSBox '>
                                <ParagraphComp text='Organization’s full address and contact information Up to three years of Forms 99 0Revenue and expense data for the current fiscal year CEO, Board Chair, and Board of Directors information This does not create a profile for you' />
                            </div>
                        </Col>
                        <Col className='h-[100%] flex flex-col items-center justify-center'>
                            <div className='LoginPageMainSec p-[20px] max-md:p-[10px] max-md:w-[100%] w-[80%] gap-y-4'>
                                <HeaderCompo text='Login' className='text-4xl text-black font-bold font-serif' tagType='h6' />
                                <div className='LoginPageInputSec'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex flex-col'>
                                                <label htmlFor="username">User name or email *</label>
                                                <input
                                                    required
                                                    className='border-2 h-[40px] rounded-lg px-3'
                                                    type="text"
                                                    {...register("username")}
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="password">Password *</label>
                                                <input
                                                    required
                                                    className='border-2 h-[40px] rounded-lg px-3'
                                                    type="password"
                                                    {...register("password")}
                                                />
                                            </div>
                                            <button className='LoginButtonComp' type='submit'>Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section >
            </Container>
            <FooterComp theme={"light"} />


        </>
    );
}

export default LoginPage;
