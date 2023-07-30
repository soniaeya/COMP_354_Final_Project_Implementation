import React, {useState} from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";

const BasketMenu = ({username}) => {
    const [showCustomMenu, setShowCustomMenu] = useState(false);
    const [showEmptyMenu, setShowEmptyMenu] = useState(false);
    const [showInitialMenu, setShowInitialMenu] = useState(true);

    const [basketDict, setBasketDict] = useState([{"guest": "basket1"}, {"sonia": "basket2"}])
    const [newBasketText, setNewBasketText] = useState('');

    const [loadBasketText, setLoadBasketText] = useState('');

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
            }

        }
    };
    const loadCustomBasket = (event) => {

        const tryLoadDict = {username: event.target.value};

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



        </>
    );
};

export default BasketMenu;
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