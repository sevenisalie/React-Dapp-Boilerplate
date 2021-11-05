import styled from "styled-components";
import React, {useEffect, useState} from "react"
import NavBar from "./pages/home/components/NavigationBar";
import Home from "./pages/home"
import ConnectButton from "./pages/home/components/ConnectButton";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import {useWeb3React} from "@web3-react/core";
import {NavLogo, NavLink} from "./pages/home/components/NavigationBar";









function App() {
  const { active, account, library, connector, provider} = useWeb3React();


  

  //console.log(contract)
  if (!account) {
    return (
      <>
        <NavBar>
        
        <NavLogo>Corn Finance</NavLogo>
          <NavLink>Hello</NavLink>
          <NavLink>About</NavLink>
          <ConnectButton></ConnectButton>
        </NavBar>
      <Home/>
      </>
    )
  }

  if (account) {
    return (
      <>
        
  
        <NavBar>
          
          <NavLogo>Corn Finance</NavLogo>
            <NavLink>Hello</NavLink>
            <NavLink>About</NavLink>
           
            <ConnectButton></ConnectButton>
          </NavBar>
        <Home/>
        
        
        
     
  
      
      </>
    );
  }
  

}

export default App;
