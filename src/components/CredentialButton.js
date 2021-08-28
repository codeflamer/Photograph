import React from 'react'
import styled from 'styled-components';

const CredentialButton = ({text}) => {
    return (
        <div>
            <Button type='submit'>
                {text}
            </Button>
        </div>
    )
}

export default CredentialButton;

const Button = styled.button`
    border:0;
    outline:none;
    font-size: 14px;
    border-radius: 100px;
    background: linear-gradient(269.89deg, #0F758B 1.82%, rgba(25, 211, 236, 0.82) 102.06%);
    color:white;
    line-height: 18px;
    padding:10px 10px;
    width:100%;
    margin-top: 30px;
    cursor:pointer;
`
