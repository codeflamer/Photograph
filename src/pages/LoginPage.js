import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CredentialButton from '../components/CredentialButton';
import CredentialHeader from '../components/CredentialHeader'
import CredentialPasswordInput from '../components/CredentialPasswordInput';
import CredentialsInput from '../components/CredentialsInput';

const LoginPage = () => {
    return (
        <LoginContainer>
            <LoginContent>
                <LoginLeft>
                    <CredentialHeader header='Login' welcomeMessage='You are welcome back,customer'/>
                    <form>
                        <CredentialsInput type='email' label='Email' placeholder='Enter your email here'/>
                        <CredentialPasswordInput label='Password' placeholder='Enter your password here' />
                    </form>
                    <Redirect>
                        <CredentialButton text='login'/>
                        <p>Not yet registered? <Link to='/signup'>Register Now</Link></p>
                    </Redirect>
                </LoginLeft>
                <LoginRight>
                    {/* hello
                    sdsd */}
                </LoginRight>
            </LoginContent>
        </LoginContainer>
    )
}

export default LoginPage;

const LoginContainer = styled.section``
const LoginContent = styled.div`
   display: flex;
   flex-direction: row;
   height:100vh;
   /* border:1px solid red; */
   justify-content: space-between;
`
const LoginLeft = styled.div`
    /* border:1px solid red; */
    display: flex;
    flex-direction: column;
    width:100%;
    max-width:416px;
    height:100vh;
    margin:0px auto;
    padding-top:40px;
    padding:10vh 31px 0 31px;
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
const LoginRight = styled.div`
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
