import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';

const pages = ['About', 'Contact Us', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import Link from 'next/link';
import styled from "styled-components";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ResponsiveAppBar({changeCoupons}) {

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Coupons', path: '/' },
        { name: 'Logout', path: '/' },

    ];
    const handleCouponsClick = () => {
        changeCoupons(1);
    }
    const handleLogoutClick = () => {
            alert("You have successfully logged out!");
    }

    return (
        <AppBar position = "absolute"  style = {{background: "#FFFFFF", boxShadow: "none", alignItems: "center", top: "10px", left: "10px", right: "10px", zIndex: 1}}>

            <nav>
                <StyledButton>Home</StyledButton>
                <StyledButton onClick={handleCouponsClick}>Profile</StyledButton>
                <StyledButton onClick={handleLogoutClick}>Logout</StyledButton></nav>
        </AppBar>


    );
}



const StyledButton = styled(Button)`
  background-color: White;
  postition: absolute;
  height: 66px;
  width: 159px;
  font-size: 22px;
  top: 0px;
  color: grey;
`
