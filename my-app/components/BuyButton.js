import React, {useState} from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
const BuyButton = () => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const handleClick = () => {
        if (showSuggestions == false){
            setShowSuggestions(true); // When clicked, set the state to true
        }
        else{
            setShowSuggestions(false); // When clicked, set the state to true
        }
    }
    const handleBlur = () => {
        setShowSuggestions(false); // When clicked, set the state to true
    }


    return (
        <>
            {showSuggestions &&<Content>
                <ClearIcon style={{position: "relative", left: 1450}} onClick={handleBlur}></ClearIcon>
                <div style={{fontWeight: "bold", fontSize: 40}}>These items might interest you:</div>
                <Pizza></Pizza>
                <div style={{fontWeight: "bold", fontSize: 20, position: "relative"}}>C. Pizza</div>
            </Content>}
            <StyledButton onClick={handleClick}  variant="contained">
                Buy Now
            </StyledButton>
        </>

    );
};

export default BuyButton;

const StyledButton = styled(Button)`
  background-color: #F77D54;
  display: inline-block;
  postition: absolute;
  z-index: 1999;
  order: 999;
  top: 600px;
  left: 1200px;
  &:hover {
    background-color: #F77D54;
`

const Content = styled.div`
  padding: 20px;
  background-color: white;
  height: 700px;
  width: 1500px;
  margin-left: 200px;
  postition: absolute;
  display: inline-block;
  z-index: 999;
  margin-top: 100px;
  outline-color: black;
  outline-style: solid;
  outline-width: 2px;
`

const Pizza = styled.div`
  position: absolute;
  top: 320px;
  left: 450px;
  width: 300px;
  height: 300px;
  margin-left: 0px;
  background-image: url('/images/pizza.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  objectFit: 'cover';
  z-index: 1999;
`;