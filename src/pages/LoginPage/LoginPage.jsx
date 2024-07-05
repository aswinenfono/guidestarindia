import FooterComp from '../../Components/MainComponents/FooterComp/FooterComp';
import HeaderSec from '../../Components/MainComponents/HeaderSec/HeaderSec';
import './LoginPage.css';
import * as yup from 'yup';

import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from './QueryFungtion';
import { ParagraphComp } from '../../Components/MainComponents/ParagraphComp/ParagraphComp';
import HeaderCompo from '../../Components/MainComponents/HeaderComp/HeaderCompo';

const LoginPage = () => {
    const schema = yup.object({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
    });

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const loginEndPoint = 'api/method/guidestar.api.user.login';

    const { mutate, isLoading, error, data } = useLoginMutation();
    console.log(isLoading, error, data)
    const onSubmit = (formData) => {
        mutate({ EndPoint: loginEndPoint, postData: formData, method: 'post' });
    };

    return (
        <>
            <HeaderSec theme={"light"} />
            <section className='LoginPageBack'>
                <Container>
                    <Row>
                        <Col lg={6} className='h-auto flex flex-col items-center max-sm:object-none justify-center'>
                            <div className='LoginPageBackDiSBox '>
                                <ParagraphComp Data={{ text: 'Organization’s full address and contact information Up to three years of Forms 99 0Revenue and expense data for the current fiscal year CEO, Board Chair, and Board of Directors information This does not create a profile for you' }} />
                            </div>
                        </Col>
                        <Col className='h-[100%] flex flex-col  items-center justify-center'>
                            <div className='LoginPageMainSec gap-y-4'>
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
                </Container>
            </section>
            <FooterComp />
        </>
    );
}

export default LoginPage;
