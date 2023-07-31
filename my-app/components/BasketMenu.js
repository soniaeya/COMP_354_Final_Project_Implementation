import React, {useState} from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
const BasketMenu = ({username, hasBurger, removeBurger, hasPizza, removePizza, countBurger, countPizza}) => {
    //Menu
    const [showCustomMenu, setShowCustomMenu] = useState(false);
    const [showEmptyMenu, setShowEmptyMenu] = useState(false);
    const [showInitialMenu, setShowInitialMenu] = useState(true);
    const [showUserMenu, setShowUserMenu] = useState(false);

    //Basket Data {User:Basket name}
    const [basketDict, setBasketDict] = useState([{"guest": "basket1"}, {"sonia": "basket2"}])

    //Basket Prompts
    const [newBasketText, setNewBasketText] = useState('');
    const [loadBasketText, setLoadBasketText] = useState('');

    const originalFloat = 2.10;
    const numberOfDecimalPlaces = 3;
    const burgerPrice = countBurger * 4.00;
    const pizzaPrice = countPizza * 3.55;
    const totalPrice = burgerPrice + pizzaPrice;

    // Use toFixed to round to 2 decimal places, then parseFloat to convert back to a float
    const modifiedFloat = parseFloat(originalFloat.toFixed(numberOfDecimalPlaces));


    //Basket Content




    const objectExists = (key, value) => {
        return basketDict.some(item => item[key] === value);
    };

    //when press enter key
    //create new bakset
    const nameCustomBasket = (event) => {
        if (event.key === 'Enter') {

            if (objectExists(username, event.target.value)){
                alert("The account '" + username+ " already has a basket called: "+event.target.value+"\n\nPlease load the basket by choosing the appropriate option!")
            }
            else{
                const newBasket = {username:event.target.value}
                setBasketDict([...basketDict, newBasket]);
                alert("The account '" + username+ "' has successfully created the following basket: "+event.target.value+"\n\nHappy Shopping!")
                setShowUserMenu(true);
                setShowEmptyMenu(false);
                setShowInitialMenu(false);

            }

        }
    };
    const loadCustomBasket = (event) => {
        if (event.key === 'Enter') {
            if (objectExists(username, event.target.value)){
                alert("The account '" + username+ "' has successfully loaded the basket named: "+event.target.value)
            }
            else{
                alert("The account '" + username+ "' doesn't have a basket called '"+event.target.value+"'\n\nPlease try again!")
            }
        }
    };


    const handleLoadBasketTextChange = (event) => {
        setLoadBasketText(event.target.value);
    };
    const handleNewBasketTextChange = (event) => {
        setNewBasketText(event.target.value);
    };


    const handleEmptyClick = () => {
        if (showEmptyMenu == false){
            setShowEmptyMenu(true); // When clicked, set the state to true
        }
        else{
            setShowEmptyMenu(false); // When clicked, set the state to true
        }
    }
    const handleCustomClick = () => {
        if (showCustomMenu == false){
            setShowCustomMenu(true); // When clicked, set the state to true
        }
        else{
            setShowCustomMenu(false); // When clicked, set the state to true
        }
    }

    const handleInitialClick = () => {
        if (showInitialMenu == false){
            setShowInitialMenu(true); // When clicked, set the state to true
        }
        else{
            setShowInitialMenu(false); // When clicked, set the state to true
        }
    }



    return (
        <>
        <MyStyledComponent>
            Basket
        </MyStyledComponent>

        {showInitialMenu && <BasketInitialMenu>
            <div style={{ position: "absolute", padding: "5px", top: "10px"}}>
                I want to start from a ___ basket
            </div>

            <div>
                <CustomButton variant="contained" onClick={handleCustomClick}>Custom</CustomButton>
                &nbsp;&nbsp;
                <EmptyButton variant="contained" onClick={handleEmptyClick}>Empty</EmptyButton>
            </div>
        </BasketInitialMenu>
        }
            {showEmptyMenu &&
                <EmptyNameBasketMenu>
                    <div style={{ position: "absolute", padding: "5px", top: "10px"}}>
                        New custom basket name:
                    </div>
                    <StyledTextfield value={newBasketText} onChange={handleNewBasketTextChange} onKeyDown={nameCustomBasket} id="standard-basic" label="Enter Basket Name" variant="outlined" />


                </EmptyNameBasketMenu>
            }
            {showCustomMenu &&
                < LoadCustomBasketMenu>
                    <div style={{ position: "absolute", padding: "5px", top: "10px"}}>
                        Load from the following basket:
                    </div>
                    <StyledTextfield value={loadBasketText} onChange={handleLoadBasketTextChange} onKeyDown={loadCustomBasket} id="standard-basic" label="Enter Basket Name" variant="outlined" />

                </ LoadCustomBasketMenu>
            }
            {showUserMenu
                &&<InUseBasketMenu>
                    {hasBurger &&
                        <BasketBurgerDiv>

                            <img style={{marginLeft: "20px"}} src="/images/burger.png" alt="Burger Image" width="45px" height="45px"/>

                            <div style={{ marginLeft: "15px", width: "150px"}}>Burger</div>
                            <div style={{ marginLeft: "15px", width: "50px"}}>{countBurger}</div>
                            <div style={{ marginLeft: "15px", width: "50px"}}>{
                                burgerPrice.toFixed(2)
                            }$</div>


                            <ClearIcon style={{ marginLeft: "35px"}} onClick={removeBurger}></ClearIcon>
                        </BasketBurgerDiv>
                    }
                    {hasPizza &&
                        <BasketBurgerDiv>

                            <img style={{marginLeft: "20px"}} src="/images/pizza.jpg" alt="Pizza Image" width="45px" height="45px"/>

                            <div style={{ marginLeft: "15px", width: "150px"}}>Pizza</div>
                            <div style={{ marginLeft: "15px", width: "50px"}}>{countPizza}</div>
                            <div style={{ marginLeft: "27px", width: "50px"}}>{pizzaPrice.toFixed(2)}$</div>


                            <ClearIcon style={{ marginLeft: "23px"}} onClick={removePizza}></ClearIcon>
                        </BasketBurgerDiv>
                    }




                    <CheckoutDiv>
                        <CheckoutButton variant="contained">Checkout</CheckoutButton>
                        <div style={{ width: "250px", marginLeft: "35px"}}>Total: {totalPrice.toFixed(2)}$</div>
                    </CheckoutDiv>

                </InUseBasketMenu>
            }



        </>
    );
};

export default BasketMenu;

const BasketBurgerDiv = styled.div`
  height: 50px;
  width: 450px;
  display: flex;
  align-items: center; /* Aligns children vertically in the middle */
  outline-color: black;
  outline-style: solid;
  outline-width: 1px;
`
const CheckoutDiv = styled.div`
  height: 50px;
  width: 450px;
  display: flex;
  align-items: center; /* Aligns children vertically in the middle */
  outline-color: black;
  outline-style: solid;
  outline-width: 1px;
`

const InUseBasketMenu = styled.div`
  color: black;
  font-size: 28px;
  //justify-content: center;
  //display: flex;
  
  background-color: white;
  z-index: 999;
  width: 450px;
  left: 1125px;
  top: 180px;
  position: absolute;
  outline-color: black;
  outline-style: solid;
  outline-width: 2px;
`
const CheckoutButton = styled(Button)`
  background-color: #F77D54;
  display: inline-block;
  postition: absolute;
  z-index: 9;
  order: 9999999;
  left: 20px;
  &:hover {
    background-color: #F77D54;
`
const MyStyledComponent = styled.div`
  color: black;
  font-size: 28px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
  z-index: 999;
  width: 450px;
  height: 70px;
  left: 1125px;
  top: 110px;
  position: absolute;
  outline-color: black;
  outline-style: solid;
  outline-width: 2px;
`;

const BasketInitialMenu = styled.div`
  color: black;
  font-size: 28px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
  z-index: 999;
  width: 450px;
  height: 170px;
  left: 1125px;
  top: 180px;
  position: absolute;
  outline-color: black;
  outline-style: solid;
  outline-width: 2px;
  
`

const EmptyNameBasketMenu = styled.div`
  color: black;
  font-size: 28px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
  z-index: 999;
  width: 450px;
  height: 170px;
  left: 1125px;
  top: 180px;
  position: absolute;
  outline-color: black;
  outline-style: solid;
  outline-width: 2px;
`

const LoadCustomBasketMenu = styled.div`
  color: black;
  font-size: 28px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
  z-index: 999;
  width: 450px;
  height: 170px;
  left: 1125px;
  top: 180px;
  position: absolute;
  outline-color: black;
  outline-style: solid;
  outline-width: 2px;
`




const EmptyButton = styled(Button)`
  background-color: #F77D54;
  display: inline-block;
  postition: relative;
  height: 66px;
  width: 159px;
  font-size: 22px;
  top: 20px;
  &:hover {
    background-color: #F77D54;

`
const CustomButton = styled(Button)`
  background-color: #F77D54;
  display: inline-block;
  postition: relative;
  height: 66px;
  width: 159px;
  font-size: 22px;
  top: 20px;
  &:hover {
    background-color: #F77D54;
`



const StyledTextfield = styled(TextField)`
  top: 10px;
    width: 400px;
  heigh: 100px;
  label.Mui-focused {
    color:  #F77D54; // Change this to your desired label color when focused
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color:  #F77D54; // Change this to your desired focus border color
    }
  }


`