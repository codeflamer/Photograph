import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CredentialButton from '../components/CredentialButton';
import CredentialHeader from '../components/CredentialHeader'
import CredentialPasswordInput from '../components/CredentialPasswordInput';
import CredentialsInput from '../components/CredentialsInput';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const RegistrationPage = () => {

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    //     alert('Hey James')
    // }

    const formik = useFormik({
        initialValues: {
          email: '',
          userName: '',
          passWord1:'',
          passWord2:'',
        },
        
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            userName: Yup.string().max(10,'less than 10 characters').required('Required'),
            passWord1: Yup.string().min(5,'Password too short!').required('Required'),
            passWord2: Yup.string().min(5,'Password too short!').required('Required'),
          }),
      });

    return (
        <RegistrationContainer>
            <RegistrationContent>
                <RegistrationLeft>
                    <CredentialHeader header='Register' welcomeMessage='Join now and make the world of photography market'/>
                    <form onSubmit={formik.handleSubmit}>
                        <CredentialsInput 
                            type='email' 
                            label='Email'
                            name='email' 
                            touched={formik.touched.email}
                            error={formik.errors.email}
                            placeholder='Enter your email here' 
                            handleChange={formik.handleChange}
                            value={formik.values.email}
                            />

                        <CredentialsInput 
                            type='text' 
                            label='Username'
                            name='userName' 
                            placeholder='Enter your username here'
                            touched={formik.touched.userName}
                            error={formik.errors.userName}
                            handleChange={formik.handleChange}
                            value={formik.values.userName}
                            />
                        <CredentialPasswordInput 
                            label='Password'
                            name='passWord1' 
                            placeholder='Enter your password here'
                            touched={formik.touched.passWord1}
                            error={formik.errors.passWord1}
                            handleChange={formik.handleChange}
                            value={formik.values.passWord1}
                            />
                        <CredentialPasswordInput
                            label='Confirm Password' 
                            name='passWord2' 
                            placeholder='Enter your password here'
                            touched={formik.touched.passWord2}
                            error={formik.errors.passWord2}
                            handleChange={formik.handleChange}
                            value={formik.values.passWord2}
                            />

                        <Redirect>
                            <CredentialButton text='Register'/>
                            <p>You have registered? <Link to='/login'>Login Now</Link></p>
                        </Redirect>
                    </form>
                    
                </RegistrationLeft>
                <RegistrationRight>
                    {/* hello
                    sdsd */}
                </RegistrationRight>
            </RegistrationContent>
        </RegistrationContainer>
    )
}

export default RegistrationPage;

const RegistrationContainer = styled.section``
const RegistrationContent = styled.div`
   display: flex;
   flex-direction: row;
   height:100vh;
   /* border:1px solid red; */
   justify-content: space-between;
`
const RegistrationLeft = styled.div`
    /* border:1px solid red; */
    display: flex;
    flex-direction: column;
    width:100%;
    max-width:416px;
    height:100vh;
    margin:0px auto;
    padding-top:40px;
    padding:12vh 31px 0 31px;
    @media(min-width:600px){
        max-width: 730px;
        /* display: block; */
    }
`
const Redirect = styled.div`
    margin-top: 10px;
    font-weight: 500;
    a{
        text-decoration: none;
    }
    p{
        margin-top: 5px;
    }
`
const RegistrationRight = styled.div`
    background:url('https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80') no-repeat;
    width:100%;
    height: 100vh;
    display: none;
    /* border:1px solid red; */
    background-size: cover;
    background-position: center;
    @media(min-width:700px){
        display: block;
    }
`
