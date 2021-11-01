import React from 'react'
import styled from "styled-components";
import {colors} from "../../../utils/colors";

const Text = styled.h1`
    font-weight: 900;
    font-size: 100px;
    color: ${colors.green} !important;
    text-align: center;
    
`

const HeadingText = () => {
    return (
        <>
        <Text>Staking Pools</Text>
        </>
    )
}

export default HeadingText
