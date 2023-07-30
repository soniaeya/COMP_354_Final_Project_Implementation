import React from 'react';
import styled from "styled-components";
import Button from "@mui/material/Button";

const Admin = () => {
    return (
        <div>
            <Title>
                <nav>
                    <Value>Serial No.</Value>
                    <Value>Name</Value>
                    <Value>Category</Value>
                    <Value>Preview</Value>
                    <Value>Quantity</Value>
                    <Value>Price</Value>
                    <Value>Weight</Value>
                    <Value>Descr.</Value>
                    <Value>Suggested</Value>
                    <Value>Add</Value>
                    <Value>Buy</Value>
                </nav>
            </Title>
            <Item>
                <Element>14</Element>
                <Element>Burger</Element>
                <Element>Meal</Element>
                <Element>Preview</Element>
                <Element>1</Element>
                <Element>3,55$</Element>
                <Element>3lb</Element>
                <Element>Outstanding!</Element>
                <Element>Pizza</Element>
                <Element>Add</Element>
                <Element>Buy</Element>




            </Item>
        </div>
    );
};

export default Admin;

const Title = styled.div`
  width: 100vw;
  height: 60px;
  padding: 10px;
    `

const Value = styled(Button)`
  display: inline-block;
  background-color: White;
  postition: absolute;
  height: 66px;
  width: 159px;
  font-size: 22px;
  top: 0px;
  color: black !important;
  &:hover {
    background-color: white !important;
  }
`
const Element = styled.div`
  display: inline-block;
  background-color: White;
  postition: absolute;
  height: 66px;
  width: 159px;
  font-size: 22px;
  top: 0px;
  color: black !important;
  &:hover {
    background-color: white !important;
  }
`
const Item = styled.div`
  width: 100vw;
  height: 90px;
  padding: 30px;
    `


const AddButton = styled(Button)`
    color: #FA8072;
    
`
const BuyButton = styled(Button)`
    color: #40E0D0;
    
`