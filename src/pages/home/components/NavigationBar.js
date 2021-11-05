import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import NavBrand from "react-bootstrap/NavbarBrand"
import ConnectButton from "./ConnectButton";
import React from 'react'
import {colors} from "../../../utils/colors";

import {injected} from "../../../utils/connectors";
import {useWeb3React} from "@web3-react/core";
import {ethers} from "ethers"
import { Web3ReactProvider } from "@web3-react/core";


const NavigationBar = styled(Navbar)`

  height: 64px;
  width: auto;
  padding-left: 8px;
  padding-right: 6px;

  background-color: ${colors.green};
`
const NavigationContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  margin: 10px;

`

export const NavLogo = styled(NavBrand)`

  color: ${colors.gold} !important;
  font-weight: 900;
  align-self: flex-start;
  

`
export const NavLink = styled(NavItem)`

  color: ${colors.lightgreen} !important;
  font-weight: 700;
  align-self: flex-end;
  padding-bottom: 6px;
  padding-left: 3px;
  padding-right: 3px;
`

const NavBar = (props) => {


    return (
        <>
        <NavigationBar>
            <NavigationContainer>
                {props.children}

                
                
            </NavigationContainer>
        
        </NavigationBar>
        </>
    )
}

export default NavBar
