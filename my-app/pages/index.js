
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import Second from "@/components/Second";
import First from "@/components/First";
import Third from "@/components/Third";
import Fourth from "@/components/Fourth";
import Banner from "@/components/Banner";
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import Basket from "@/components/Basket";
import BuyButton from "@/components/BuyButton";
export default function Home() {
    const [showBasket, setShowBasket] = useState(false);

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
        <ShoppingCartIcon  onClick={handleClick} style={{zIndex: 999, position: "absolute", top: 35, left: 1130}}/>
        {showBasket && <Basket/>}
        <ResponsiveAppBar style={{zIndex: -1}}></ResponsiveAppBar>
        <Second style={{zIndex: 10}}></Second>
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