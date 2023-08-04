
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Dashboard from "../components/Dashboard";

import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import BasketMenu from "../components/BasketMenu";
import BuyBurgerButton from "../components/BuyBurgerButton";
import Coupons from "../components/Coupons";
import ProfileMenu from "../components/ProfileMenu";
export default function Home() {
    const [showBasket, setShowBasket] = useState(false);
    const [showCoupons, setShowCoupons] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [isloggedin, setisloggedin] = useState(false);
    const [username, setUsername] = useState("guest")
    const [totalPrice, setTotalPrice] = useState(0)
    const [numCoupons, setNumCoupons] = useState(0);
    const [showInitialMenu, setShowInitialMenu] = useState(true);
    const [showUserMenu, setShowUserMenu] = useState(false);


    const changeNumCoupons = (totalPrice) => {
        if (totalPrice < 1){
            setNumCoupons(0)
        }
        else {
            setNumCoupons(Math.floor(totalPrice / 10))
        }


    }



    //Burger Basket Handler
    const [hasBurger, setHasBurger] = useState((false));
    const [hasPizza, setHasPizza] = useState((false));
    const [countPizza, setCountPizza] = useState(0);
    const [countBurger, setCountBurger] = useState(0);

    const addBurger = ()=>{
        setCountBurger(countBurger+1);
    }

    const addPizza = ()=>{
        setCountPizza(countPizza+1);
    }


    const removeBurger = ()=>{
        setCountBurger(0);
        if(hasBurger){
            setHasBurger(false);
            alert("you have removed the burger(s)")
        }

    }

    const removePizza = ()=>{
        setCountPizza(0);
        if(hasPizza){
            setHasPizza(false);
            alert("you have removed the pizza(s)")
        }

    }


    const changeUser = (newUsername) =>{
        setUsername(newUsername);
    }

    const changeLogin = () =>{
        if (isloggedin == false){
            setisloggedin(true); // When clicked, set the state to true

        }
        else{
            setisloggedin(false); // When clicked, set the state to true
            setTotalPrice(0);
            setNumCoupons(0);
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
            //change coupon state
            changeNumCoupons(totalPrice);





        }
        else{
            setShowCoupons(false); // When clicked, set the state to true
        }
    }

    // Define a function to handle click events
    const handleClick = () => {
        if (showBasket == false){
            setShowBasket(true);
            // When clicked, set the state to true
            if(showUserMenu){
                setShowInitialMenu(false);
            }
            else{
                setShowInitialMenu(true);
            }
        }
        else{
                setShowBasket(false); // When clicked, set the state to true


        }
    }

  return (
    <>
        <BuyBurgerButton countPizza={countPizza} countBurger={countBurger} setHasPizza={setHasPizza} setHasBurger={setHasBurger} setCountBurger={setCountBurger} setCountPizza={setCountPizza}></BuyBurgerButton>
        <ShoppingCartIcon  onClick={handleClick} style={{zIndex: 999, position: "absolute", top: 30, left: 1280}}/>
        {showBasket && <BasketMenu setCountBurger={setCountBurger} setHasBurger={setHasBurger} showUserMenu={showUserMenu} setShowUserMenu={setShowUserMenu} showInitialMenu={showInitialMenu} setShowInitialMenu={setShowInitialMenu} setTotalPrice={setTotalPrice} countPizza={countPizza} countBurger={countBurger} hasPizza={hasPizza} hasBurger={hasBurger} removePizza={removePizza} removeBurger={removeBurger} username={username}/>}
        <ResponsiveAppBar showCouponMenu={showCouponMenu} changeProfileMenu={changeProfileMenu} style={{zIndex: -1}}></ResponsiveAppBar>

        {showCoupons && <Coupons numCoupons={numCoupons} totalPrice={totalPrice} username={username}/>}
        {showProfileMenu && <ProfileMenu setTotalPrice={setTotalPrice} setCountBurger={setCountBurger} setHasBurger={setHasBurger}  setShowUserMenu={setShowUserMenu} setShowInitialMenu={setShowInitialMenu} isloggedin={isloggedin} changeLogin={changeLogin} changeUser={changeUser}/>}
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