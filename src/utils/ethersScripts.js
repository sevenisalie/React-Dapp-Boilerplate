import styled from "styled-components";
import React, {useEffect, useState} from "react"

import { Web3ReactProvider } from "@web3-react/core";

import { ethers } from "ethers";

import {ERC20Abi} from "../config/abi"
import { contractAddresses } from "../config/addresses";


export const readCobTokenData = async (active, _provider, _account) => {
    if (active) {
      try { const ctr = new ethers.Contract(contractAddresses.CobToken, ERC20Abi, _provider)
        console.log(ctr.address)
        let currentSupply = await ctr.totalSupply();
        const currentUserBalance = await ctr.balanceOf(_account)
        currentSupply = ethers.utils.formatUnits(currentSupply, "ether");
        let UserBalance = ethers.utils.formatUnits(currentUserBalance, "ether")
        currentSupply = Math.floor(currentSupply)
        UserBalance = Math.floor(UserBalance)
        return [UserBalance, currentSupply]} catch (err) {console.log(err)}
    } else {
      return null
    }
    
    
    }