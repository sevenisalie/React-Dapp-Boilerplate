import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

import NavBar from "./pages/home/components/NavigationBar";
import Home from "./pages/home"

import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

const getLibrary = (provider, connector) => {
  return new ethers.providers.Web3Provider(provider)
};




function App() {

  
  return (
    <>
    <Web3ReactProvider getLibrary={getLibrary}>
      <NavBar></NavBar>
      <Home></Home>
    </Web3ReactProvider>

    
    </>
  );
}

export default App;
