import React from 'react';
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/CardHeader";
import Container from "react-bootstrap/Container";
import {colors} from "../../../utils/colors";

const TokenCardContainer = styled(Container)`
    display: flex;
    height: 800px;
    width: auto;
    
`

const TokenCard = styled(Card)`
    align-items: center;
    height: 200px;
    width: 489px;
    background-color: ${colors.green} !important;
    padding: 12px;
    border-width: 3px;
    border-radius: 12px;
    border-color: ${colors.khaki};

`
const TokenCardTitle = styled.h2`
    font-weight: 900;
    text-align: center;
    color: ${colors.lightgreen} !important;
    margin-botton: 6px;
    border-bottom: 5px solid ${colors.lightgreen};


`
const TokenCardBody = styled.div`
    color: white !important;
    font-weight: 400;
    font-size: lg;

`
const TokenCardBodyContentContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    column-gap: 8px;
    align-content: center;
`

const Information = styled.p`
    font-weight: 600;
    font-family: Futara, Arial, Sans-Serif;

`

const TokenStatCard = () => {
    return (
        <>
        <TokenCardContainer>
           <TokenCard>
            <TokenCardTitle>Cob Token Statistics</TokenCardTitle>
            <TokenCardBodyContentContainer>
                <TokenCardBody>
                    <Information>23535</Information>
                    <Information>435345435</Information>
                    <Information>4354545</Information>
                </TokenCardBody>
            </TokenCardBodyContentContainer>
           </TokenCard>
        </TokenCardContainer>
        </>
    )
}

export default TokenStatCard
