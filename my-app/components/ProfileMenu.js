import React, {useState} from 'react';
import styled from "styled-components";
import Button from "@mui/material/Button";
import {Box, Checkbox, Container, FormControlLabel, Grid, Modal, TextField, Typography} from "@mui/material";
import Link from "next/link";

const ProfileMenu = ({isloggedin, changeLogin, changeUser}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        height: 450,
        overflowY: "auto",
        overflowX: "hidden",
        msOverflowY: "none",
    };

    const handleSubmit = (event) => {
        alert("You have signed in")
        handleClose();
        changeLogin(true);

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            user: data.get("user"),
            password: data.get("password"),
        });
        changeUser(data.get("user"));
    };

    const handleLogout = (event) => {
        changeUser("guest");
        changeLogin(false);
        alert("you have successfully logged out!")

    };
    return (
        <>
            <MyStyledComponent>
                Profile
            </MyStyledComponent>
            <ProfileInitialMenu>

                {isloggedin ?<LogoutButton onClick={handleLogout} variant="contained" >Logout</LogoutButton>:<LoginButton onClick={handleOpen}   variant="contained" >Login</LoginButton>}

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} >
                            <div>
                                <Container component="main" maxWidth="xs">
                                    <Box
                                        sx={{
                                            marginTop: 8,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography component="h1" variant="h5">
                                            Sign in
                                        </Typography>
                                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="user"
                                                label="Username"
                                                name="user"
                                                autoComplete="user"
                                                autoFocus
                                            />
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                            />

                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Sign In
                                            </Button>

                                        </Box>
                                    </Box>
                                </Container>


                            </div>
                        </Typography>
                    </Box>
                </Modal>



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
