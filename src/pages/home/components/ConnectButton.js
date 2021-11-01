import React from 'react'
import styled from "styled-components";
import StakingButton from "./PoolCard";
import Button from "react-bootstrap/Button"
import {colors} from "../../../utils/colors";
import TruncateAddress from "../../../utils/TruncateAddress";

import {injected} from "../../../utils/connectors";
import { ethers } from "ethers";
import {useWeb3React} from "@web3-react/core";

export const ConnectButtonNav = styled(Button)`
    border-radius: 50px;
    background-color: ${colors.darkgreen};
    color: ${colors.lightgreen};
    font-weight: 600;
    font-size: 14px;
    border-color: ${colors.lightgreen};

    &:hover {
        background-color: ${colors.green};
        font-size: 16px;
        border-width: 3px;
        border-color: ${colors.gold};

    }
`

const ConnectButton =  () => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    console.log(account)
    

    const shortie = TruncateAddress(account)
    
  
    const handleConnect = async () => {
      // read-only
      try {await activate(injected)} catch (err) {console.log(err)};
      
    }

    const handleDisconnect = async () => {
        try {
            deactivate(injected)
        } catch (err) {console.log(err)}
    }

    return (
        <>



        { !active ? 
        <ConnectButtonNav onClick={() => handleConnect()} >Connect</ConnectButtonNav>
        :
        <ConnectButtonNav onClick={() => handleDisconnect()} >{shortie}</ConnectButtonNav>

        }


        </>
    )
}

export default ConnectButton
