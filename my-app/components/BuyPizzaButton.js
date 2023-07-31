import React, {useState} from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import {Box, Container, Modal, TextField, Typography} from "@mui/material";
import BuyBurgerButton from "@/components/BuyBurgerButton";
import SuggestedBuyBurgerButton from "@/components/SuggestedBuyBurgerButton";
const BuyPizzaButton = ({setHasPizza}) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setHasPizza(true);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        height: 650,
        overflowY: "auto",
        overflowX: "hidden",
        msOverflowY: "none",
    };
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{zIndex: "99px"}}>
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
                                    <Typography component="h1" variant="h3">
                                        Thank you for buying the Pizza!
                                    </Typography>
                                    <br/>
                                    <Typography component="h3" variant="h5">
                                        These items might interest you:
                                    </Typography>
                                    <br/>
                                    <img src="/images/burger.png" alt="Description of the image" width="250px" height="250px"/>
                                    <br/>
                                    <div style={{fontWeight: "bold", fontSize: 20, position: "relative"}}>C. Pizza - 3,55$</div>
                                    <br/>
                                    <SuggestedBuyBurgerButton>Buy Now</SuggestedBuyBurgerButton>
                                </Box>
                            </Container>


                        </div>
                    </Typography>
                </Box>
            </Modal>
            <StyledButton onClick={handleOpen}  variant="contained">
                Buy Now
            </StyledButton>
        </>

    );
};

export default BuyPizzaButton;

const StyledButton = styled(Button)`
  background-color: #F77D54;
  display: inline-block;
  postition: absolute;
  z-index: 999999999;
  order: 9999999;

  &:hover {
    background-color: #F77D54;
`

