import React, {useState, useEffect } from 'react';
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/CardHeader";
import Container from "react-bootstrap/Container";
import {colors} from "../../../utils/colors";

import {injected} from "../../../utils/connectors";
import { ethers } from "ethers";
import {useWeb3React} from "@web3-react/core";

import {useContract, useSigner} from "../../../config/chef"
import {MasterChefV2} from "../../../config/artifacts/MasterChefV2"
import {CobToken} from "../../../config/artifacts/CobToken"
import {ERC20Abi} from "../../../config/abi"
import { contractAddresses } from "../../../config/addresses";
import {readCobTokenData} from "../../../utils/ethersScripts"

const TokenCardContainer = styled(Container)`
    display: flex;
    height: 800px;
    width: auto;
    
`

const TokenCard = styled(Card)`
    align-items: center;
    height: 300px;
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

    const { active, account, library, connector} = useWeb3React();
    const [cobToken, setCobToken] =  useState(0)

    //const contract = useContract(contractAddresses.CobToken, ERC20Abi, library.getSigner())
    useEffect( async () => {
        if (active) {
          const cobData = readCobTokenData(active, library.getSigner(), account)
          .then( value => setCobToken(value))
          console.log(cobData)
        } else {
          const noCobData = setCobToken(0)
        }
        
        
      }, [account])




    if (active) {
        return (
            <>
            <TokenCardContainer>
               <TokenCard>
                <TokenCardTitle>Cob Token Statistics</TokenCardTitle>
                <TokenCardBodyContentContainer>
                    <TokenCardBody>
                        <Information>Max Supply:  {cobToken[1]}</Information>
                        <Information>Circulating Supply: {cobToken[1]}</Information>
                        <Information>Current Balance: {cobToken[0]} </Information>
                        <Information>Emission Rate: 2 COB/block</Information>
                    </TokenCardBody>
                </TokenCardBodyContentContainer>
               </TokenCard>
            </TokenCardContainer>
            </>
        )
    }

    if (!active) {
        return (
            <>
            <TokenCardContainer>
               <TokenCard>
                <TokenCardTitle>Cob Token Statistics</TokenCardTitle>
                <TokenCardBodyContentContainer>
                    <TokenCardBody>
                        <Information>Max Supply:  </Information>
                        <Information>Circulating Supply: </Information>
                        <Information>Current Balance:  </Information>
                        <Information>Emission Rate:</Information>
                        <Information>Please Connect Wallet for Data</Information>
                    </TokenCardBody>
                </TokenCardBodyContentContainer>
               </TokenCard>
            </TokenCardContainer>
            </>
        )
    }

}

export default TokenStatCard
