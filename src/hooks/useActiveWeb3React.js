import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'
import {ethers} from "ethers";
import {injected} from "../utils/connectors";



const useContract = (address, abi) => {
  const { active, account, library, connector, activate }  = useWeb3React();
  const [contract, setContract] = useState('');

  try{  
    const ctr = new ethers.Contract(address, abi, library.getSigner());
    setContract(ctr);
    console.log("connected contract")
  } catch(err) {    const handleConnect = async () => {
    // read-only
    await activate(injected);
    
  }}

  return contract;
}

export default useContract
