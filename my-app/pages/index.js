
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import Dashboard from "@/components/Dashboard";

import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import BasketMenu from "@/components/BasketMenu";
import BuyButton from "@/components/BuyButton";
import Coupons from "@/components/Coupons";
import ProfileMenu from "@/components/ProfileMenu";
export default function Home() {
    const [showBasket, setShowBasket] = useState(false);
    const [showCoupons, setShowCoupons] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [isloggedin, setisloggedin] = useState(false);
    const [username, setUsername] = useState("guest")

    const changeUser = (newUsername) =>{
        setUsername(newUsername);
    }

    const changeLogin = () =>{
        if (isloggedin == false){
            setisloggedin(true); // When clicked, set the state to true
        }
        else{
            setisloggedin(false); // When clicked, set the state to true
        }

    }
    const changeProfileMenu = () =>{
        if (showProfileMenu == false){
            setShowProfileMenu(true); // When clicked, set the state to true
        }
        else{
            setShowProfileMenu(false); // When clicked, set the state to true
        }
    }
    const showCouponMenu = () =>{
        if (showCoupons == false){
            setShowCoupons(true); // When clicked, set the state to true
        }
        else{
            setShowCoupons(false); // When clicked, set the state to true
        }
    }

    // Define a function to handle click events
    const handleClick = () => {
        if (showBasket == false){
            setShowBasket(true); // When clicked, set the state to true
        }
        else{
            setShowBasket(false); // When clicked, set the state to true
        }
    }

  return (
    <>
        <BuyButton></BuyButton>
        <ShoppingCartIcon  onClick={handleClick} style={{zIndex: 999, position: "absolute", top: 30, left: 1280}}/>
        {showBasket && <BasketMenu username={username}/>}
        <ResponsiveAppBar showCouponMenu={showCouponMenu} changeProfileMenu={changeProfileMenu} style={{zIndex: -1}}></ResponsiveAppBar>

        {showCoupons && <Coupons/>}
        {showProfileMenu && <ProfileMenu isloggedin={isloggedin} changeLogin={changeLogin} changeUser={changeUser}/>}
        <Dashboard style={{zIndex: 10, position: "absolute"}}></Dashboard>
        <Background></Background>



    </>
  )
}
const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  margin-left: 0px;
  background-image: url('/images/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  objectFit: 'cover';
  z-index: -1;
`;