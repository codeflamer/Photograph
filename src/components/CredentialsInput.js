import React from 'react'
import styled from 'styled-components';

const CredentialsInput = ({label,placeholder,type,password}) => {

    return (
        <CredentialInputContainer>
            <h3>{label}</h3>
            <input 
                type={type} 
                placeholder={placeholder} required
                />
            
        </CredentialInputContainer>
    )
}

export default CredentialsInput;

const CredentialInputContainer = styled.div`
    margin-top: 20px;
    position: relative;
    h3{
        margin-bottom: 12px;
        font-size: 18px;
        line-height: 24px;
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
`

