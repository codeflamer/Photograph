import React from 'react'
import styled from 'styled-components'

const CredentialHeader = ({header,welcomeMessage}) => {
    return (
        <CredentialHeaderContainer>
            <h1>{header}</h1>
            <p>{welcomeMessage}</p>
        </CredentialHeaderContainer>
    )
}

export default CredentialHeader

const CredentialHeaderContainer = styled.div`
    font-weight: bold;
    margin-bottom: 25px;
    h1{
        color: var(--textPrimary);
        font-size: 40px;
        font-weight: 700;
    }
`
