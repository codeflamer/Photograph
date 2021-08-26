import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CredentialButton from '../components/CredentialButton';
import CredentialHeader from '../components/CredentialHeader'
import CredentialPasswordInput from '../components/CredentialPasswordInput';
import CredentialsInput from '../components/CredentialsInput';

const RegistrationPage = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert('Hey James')
    }

    return (
        <RegistrationContainer>
            <RegistrationContent>
                <RegistrationLeft>
                    <CredentialHeader header='Register' welcomeMessage='Join now and make the world of photography market'/>
                    <form>
                        <CredentialsInput type='email' label='Email' placeholder='Enter your email here'/>
                        <CredentialsInput type='text' label='Username' placeholder='Enter your username here'/>
                        <CredentialPasswordInput label='Password' placeholder='Enter your password here'/>
                        <CredentialPasswordInput  label='Confirm Password' placeholder='Enter your password here'/>
                    </form>
                    <Redirect>
                        <CredentialButton text='Register' submit={handleSubmit}/>
                        <p>You have registered? <Link to='/login'>Login Now</Link></p>
                    </Redirect>
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
