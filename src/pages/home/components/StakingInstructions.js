import React from 'react'
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card";
import {colors} from "../../../utils/colors";

const InstructionsCard = styled(Card)`
    background-color: ${colors.green};
    height: auto;
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 9px;
    border-width: 3px;
    border-radius: 12px;
    border-color: ${colors.khaki};
`

const TextContainer = styled(Container)`
    height: 700px;
    width: 500px;
    justify-content: center;
`
const InstructionsHeading = styled.h2`
    font-weight: 900;
    font-size: 44px;
    color: ${colors.lightgreen};
    border-bottom: 5px solid ${colors.lightgreen};
    margin-bottom: 18px;
`
const InstructionsText = styled.p`
    font-family: Futara, Arial, Sans-Serif;
    font-weight: 600;
    font-size: 22px;
    color: ${colors.lightgreen};
`
const InstructionsList = styled.ul`
    line-height: 160%;

`
const StakingInstructions = () => {
    return (
        <>
        <TextContainer>
            <InstructionsCard>
            <InstructionsHeading>Stake Cob for up to 1200% APY</InstructionsHeading>
            <InstructionsList>
                <InstructionsText>2% deposit fee</InstructionsText>
                <InstructionsText>0% deposit fee on native pools</InstructionsText>
                <InstructionsText>5% performance fee for Cob buy-back</InstructionsText>
            </InstructionsList>
            </InstructionsCard>
        </TextContainer>
        </>
    )
}

export default StakingInstructions
