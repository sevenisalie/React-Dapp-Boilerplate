import React from 'react'
import styled from "styled-components"
import Card from "react-bootstrap/Card"
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container"
import {colors} from "../../../utils/colors";
import cornlogo from "../../../images/cornlogo.jpg"
import Button from "react-bootstrap/Button"

const LongCard = styled(Card)`
    height: 120px;
    width: 100%;
    background-color: ${colors.green};
    border-width: 3px;
    border-radius: 12px;
    border-color: ${colors.khaki};
`
const CardContentContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:  enter;
    gap: 12px;
    padding: 20px;
`
const ContentWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 80px;
    justify-content: center;
    align-items: center;
`
const StakingImage = styled(Image)`
    height: 50px;
    width: 50px;

`
const StakingImageHeader = styled.h2`
    margin-top: 5px;
    margin-left: 3px;
    font-weight: 600;
    font-size: 14px;
    color: ${colors.lightgreen};

`
const StakingImageContent = styled.p`
    font-weight: 800;
    font-size: 20px;
    color: ${colors.gold}

`

const StakingImageTVL = styled.p`
    font-weight: 800;
    font-size: 16px;
    color: ${colors.gold}

`

export const StakingButton = styled(Button)`
    border-radius: 50px;
    background-color: ${colors.darkgreen};
    color: ${colors.lightgreen};
    font-weight: 700;
    font-size: 18px;
    border-color: ${colors.lightgreen};

    &:hover {
        background-color: ${colors.green};
        font-size: 20px;
        border-width: 4px;
        border-color: ${colors.gold};

    }
`

const PoolCard = () => {
    return (
        <>
        <LongCard>
            <CardContentContainer>
                <ContentWrapper>
                    <StakingImage  src={cornlogo} thumbnail />
                    <StakingImageHeader>Stake COB</StakingImageHeader>
                </ContentWrapper>
                <ContentWrapper>
                    <StakingImage  src={cornlogo} thumbnail />
                    <StakingImageHeader>Earn COB</StakingImageHeader>
                </ContentWrapper>
                <ContentWrapper>
                    <StakingImageHeader>APR</StakingImageHeader>
                    <StakingImageContent>174.45%</StakingImageContent>
                </ContentWrapper>

                <ContentWrapper>
                    <StakingImageHeader>TVL</StakingImageHeader>
                    <StakingImageTVL>1,003,504.13</StakingImageTVL>
                </ContentWrapper>
                
                <ContentWrapper>
                    <StakingButton>Stake</StakingButton>
                </ContentWrapper>
            </CardContentContainer>
        </LongCard>
        </>
    )
}

export default PoolCard
