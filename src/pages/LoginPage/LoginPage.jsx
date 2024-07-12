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
import { userLogin } from '../../Store/login';

const LoginPage = () => {
    const schema = yup.object({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    });
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (formData) => {
        loginMutate(formData);
    };

    const handleCreateSuccess = () => {
        enqueueSnackbar('Create success!', { variant: 'success' });
    };

    const handleCreateError = (error) => {
        enqueueSnackbar(error.message, { variant: 'error' });
    };

    const createFarmerMutationOptions = {
        onSuccess: handleCreateSuccess,
        onError: handleCreateError,
    };

    //getting mutation alerts

    const {
        mutate: loginMutate,
        isPending: addLoading,
        data: loginData
    } = useMutation({
        mutationFn: userLogin,
        ...createFarmerMutationOptions,

    });
    console.log("loginData<<<<", loginData)

    return (
        <>
            <Container className='ml-0 mr-0 w-[100%] max-w-[100%] p-0'>
                <HeaderSec theme={"light"} />
                <section className='LoginPageBack'>
                    <Row>
                        <Col lg={6} className='  max-md:hidden h-auto flex flex-col items-center justify-center'>
                            <div className='LoginPageBackDiSBox '>
                                <ParagraphComp Data={{ text: 'Organization’s full address and contact information Up to three years of Forms 99 0Revenue and expense data for the current fiscal year CEO, Board Chair, and Board of Directors information This does not create a profile for you' }} />
                            </div>
                        </Col>
                        <Col className='h-[100%] flex flex-col  items-center justify-center'>
                            <div className='LoginPageMainSec w-[80%] gap-y-4'>
                                <HeaderCompo Data={{ text: 'Login', className: 'text-4xl text-black font-bold font-serif', tagType: 'h6' }} />
                                <div className='LoginPageInputSec'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='flex flex-col gap-4'>
                                            <div className='flex flex-col'>
                                                <label htmlFor="username">User name or email *</label>
                                                <input
                                                    required={true}
                                                    className='border-2 h-[40px] rounded-lg px-3'
                                                    type="text"
                                                    {...register("username")}
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="password">Password *</label>
                                                <input
                                                    required={true}
                                                    className='border-2 h-[40px] rounded-lg px-3'
                                                    type="password"
                                                    {...register("password")}
                                                />
                                            </div>
                                            <button className='LoginButtonComp' type='submit'>Login</button>
                                            {/* <ButtonComp Data={{ onClick: LoginBtnClick, text: "Login", className: 'LoginButtonComp' }} /> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section >
                <FooterComp theme={"light"} />

            </Container>

        </>
    );
}

export default LoginPage;
