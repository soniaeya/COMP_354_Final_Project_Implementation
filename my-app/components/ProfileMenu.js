import React, {useState} from 'react';
import styled from "styled-components";
import Button from "@mui/material/Button";
import {Box, Modal, TextField, Typography} from "@mui/material";

const ProfileMenu = ({isloggedin}) => {
    const value = isloggedin;
    return (
        <>
            <MyStyledComponent>
                Profile
            </MyStyledComponent>
            <ProfileInitialMenu>

                {value?<LogoutButton variant="contained" >Logout</LogoutButton>:<LoginButton  variant="contained" >Login</LoginButton>}




            </ProfileInitialMenu>

        </>
    );
};

export default ProfileMenu;
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
left: 950px;
top: 110px;
position: absolute;
outline-color: black;
outline-style: solid;
outline-width: 2px;
`;

const ProfileInitialMenu = styled.div`
color: black;
font-size: 28px;
align-items: center;
justify-content: center;
display: flex;
background-color: white;
z-index: 999;
width: 450px;
height: 170px;
left: 950px;
top: 180px;
position: absolute;
outline-color: black;
outline-style: solid;
outline-width: 2px;

`

const LoginButton = styled(Button)`
  background-color: #F77D54;
  display: inline-block;
  postition: relative;
  height: 66px;
  width: 159px;
  font-size: 22px;
  &:hover {
    background-color: #F77D54;

`
const LogoutButton = styled(Button)`
  background-color: #F77D54;
  display: inline-block;
  postition: relative;
  height: 66px;
  width: 159px;
  font-size: 22px;
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
