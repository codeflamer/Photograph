import React, { useState } from 'react'
import styled from 'styled-components';

const CredentialPasswordInput = ({name,label,placeholder,handleChange,value,touched,error}) => {
    
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return (
        <CredentialInputContainer>
            <label htmlFor={name}>{label}</label>
            <input 
                type={isRevealPwd ? 'text': 'password'}
                id={name}
                name={name}
                placeholder={placeholder} 
                required 
                value={value}
                onChange={handleChange}            
                />

                 <i 
                className={isRevealPwd ? "fas fa-eye" : "fas fa-eye-slash"} 
                onClick={() => setIsRevealPwd(prevState => !prevState)}></i>

                {touched && error ? (
                    <span>{error}</span>
                ) : null}
            
        </CredentialInputContainer>
    )
}

export default CredentialPasswordInput;

const CredentialInputContainer = styled.div`
    margin-top: 20px;
    position: relative;
    label{
        display: block;
        margin-bottom: 12px;
        font-size: 18px;
        line-height: 24px;
        font-weight: bold;
    }
    >input{
        border:0;
        border: 2px solid #0F758B;
        border-radius: 100px;
        outline:none;
        padding:10px 17px;
        width:100%;
        ::placeholder{
            color:var(--textPrimary);
            font-size: 14px;
        }
    }
    i{
        /* border:1px solid red; */
        position: absolute;
        font-size: 20px;
        right:15px;
        top:45px;
        color:var(--textPrimary);
        cursor: pointer;
    }
    span{
        color:red;
        font-size: 13px;
    }
`

