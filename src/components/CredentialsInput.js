import React from 'react'
import styled from 'styled-components';
import { useField } from 'formik';

const CredentialsInput = ({name,label,placeholder,type,handleChange,value,touched,error}) => {

    // console.log(touched,label);
    
    // console.log(fields)

    return (
        <CredentialInputContainer>
            <label htmlFor={name}>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                id={name}
                name={name}
                onChange={handleChange}
                value={value}
                required
                />
                {touched && error ? (
                    <span>{error}</span>
                ) : null}
            
        </CredentialInputContainer>
    )
}

export default CredentialsInput;

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
    span{
        color:red;
        font-size: 13px;
    }
`

