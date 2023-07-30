
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import Dashboard from "@/components/Dashboard";

import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import Basket from "@/components/Basket";
import BuyButton from "@/components/BuyButton";
import Coupons from "@/components/Coupons";
export default function Home() {
    const [showBasket, setShowBasket] = useState(false);
    const [showCoupons, setShowCoupons] = useState(false);

    const changeCoupons = () =>{
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
        {showBasket && <Basket/>}
        <ResponsiveAppBar changeCoupons={changeCoupons} style={{zIndex: -1}}></ResponsiveAppBar>
        {showCoupons && <Coupons/>}
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