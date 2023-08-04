import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';

const pages = ['About', 'Contact Us', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import styled from "styled-components";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function ResponsiveAppBar({showCouponMenu, changeProfileMenu}) {

    const handleCouponsClick = () => {
        showCouponMenu(1);
    }
    const handleLogoutClick = () => {
        changeProfileMenu(1);
    }

    return (
        <AppBar position = "absolute"  style = {{background: "#FFFFFF", boxShadow: "none", alignItems: "center", top: "10px", left: "10px", right: "10px", zIndex: 1}}>

            <nav>
                <StyledButton>Home</StyledButton>
                <StyledButton onClick={handleCouponsClick}>Coupons</StyledButton>
                <StyledButton onClick={handleLogoutClick}>Profile</StyledButton></nav>

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
