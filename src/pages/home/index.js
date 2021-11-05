import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import axios from "axios"
import {injected} from "../../utils/connectors";
import { ethers } from "ethers";
import {useWeb3React} from "@web3-react/core";

import {ERC20Abi} from "../../config/abi"
import {contractAddresses} from "../../config/addresses"

import Button from "react-bootstrap/Button";
import cornlogo from "../../images/cornlogo.jpg"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Page} from "../../components/layout/Page";
import HeaderImage from "./components/HeaderImage";
import HeadingText from "./components/HeadingText";
import TokenStatCard from "./components/TokenStatCard";
import StakingInstructions from "./components/StakingInstructions";
import PoolCard from "./components/PoolCard"

import {useSigner} from "../../config/chef"
import useContract from "../../hooks/useActiveWeb3React"


const FlexOne = styled.div`
    margin-top: 10px;
    display: flex;
    height: 300px;
    width: 100%;
    flex-direction: row;
    gap: 58px;
    justify-content: center;
    margin-bottom: 150px;
`
const FlexTwo = styled.div`
    
    display: flex;
    height: 200px;
    flex-direction: row;
    gap: 25px;
    justify-content: space-between;
    margin-bottom: 250px;
`

const FlexThree = styled.div`
    display: flex;
    height: auto;
    width; 100%;
    flex-direction: column;
    flex-wrap: nowrap;
`



const Home = () => {
    const { active, account, library, connector} = useWeb3React();
    //const cobContract = useContract(contractAddresses.CobToken, ERC20Abi)
    
    

    
    return (
        <>
        <Page>
            <FlexOne>
            <HeaderImage src={cornlogo} />
            <HeadingText></HeadingText>
            <HeaderImage src={cornlogo} />
            </FlexOne>
            
            <FlexTwo>
                <TokenStatCard></TokenStatCard>
                <StakingInstructions></StakingInstructions>
            </FlexTwo>

            <FlexThree>
                <h2>Active Cob Pools</h2>
                <PoolCard></PoolCard>
            </FlexThree>
        </Page>
        </>
    )
}

export default Home
