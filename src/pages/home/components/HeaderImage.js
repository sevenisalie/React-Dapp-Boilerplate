import React from 'react';
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const HeaderImageContainer = styled(Container)`
    height: 220px;
    margin-top: 78px;
    width: auto;
    justify-content: center;
`
const HeaderPicture = styled.img`
    height: 13vh;
    width: auto;
    align-items: center;
`

const HeaderImage = () => {
    return (
        <>
            <HeaderImageContainer>
                
                <HeaderPicture src="/assets/images/cornlogo.jpg" alt="Logo"></HeaderPicture>
            </HeaderImageContainer>
        </>
    )
}

export default HeaderImage
