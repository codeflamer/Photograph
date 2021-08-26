import React, { useState } from 'react'
import styled from 'styled-components';

const CredentialPasswordInput = ({label,placeholder}) => {
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [pwd, setPwd] = useState('');
    return (
        <CredentialInputContainer>
            <h3>{label}</h3>
            <input 
                type={isRevealPwd ? "text" : "password"} 
                placeholder={placeholder} required value={pwd}
                onChange={e => setPwd(e.target.value)}/>
            
                 <i 
                className={isRevealPwd ? "fas fa-eye" : "fas fa-eye-slash"} 
                onClick={() => setIsRevealPwd(prevState => !prevState)}></i>
            
            
        </CredentialInputContainer>
    )
}

export default CredentialPasswordInput;

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
    i{
        /* border:1px solid red; */
        position: absolute;
        font-size: 20px;
        right:15px;
        top:45px;
        color:var(--textPrimary);
        cursor: pointer;
    }
`
