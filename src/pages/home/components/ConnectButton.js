import React from 'react'
import styled from "styled-components";
import StakingButton from "./PoolCard";
import Button from "react-bootstrap/Button"
import {colors} from "../../../utils/colors";
import TruncateAddress from "../../../utils/TruncateAddress";

import {injected} from "../../../utils/connectors";
import { ethers, getSigner } from "ethers";
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
    const { active, account, library, connector, provider, activate, deactivate } = useWeb3React();
    

    const shortie = TruncateAddress(account);
    
  
    const handleConnect = async (connector) => {
      // read-only https://rpc-mainnet.maticvigil.com/v1/4b331c188697971af1cd6f05bb7065bc358b7e89

      try {
          let ethersProvider = new ethers.providers.JsonRpcProvider("https://rpc-mainnet.maticvigil.com/v1/4b331c188697971af1cd6f05bb7065bc358b7e89");
          await activate(connector);
          
        } catch (err) {console.log(err)};
      
    }

    const handleDisconnect = async () => {
        try {
            deactivate(injected);
        } catch (err) {console.log(err)}
    }

    return (
        <>



        { !active ? 
        <ConnectButtonNav onClick={() => handleConnect(injected)} >Connect</ConnectButtonNav>
        :
        <ConnectButtonNav library={library} onClick={() => handleDisconnect()} >{shortie}</ConnectButtonNav>

        }


        </>
    )
}

export default ConnectButton
