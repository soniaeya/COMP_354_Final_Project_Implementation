import React, {useState} from 'react';
import styled from "styled-components";
import Button from "@mui/material/Button";
import {Box, Container, Modal, TextField, Typography} from "@mui/material";

const Admin = () => {
    const [open, setOpen] = React.useState(false);
    const [newBasketText, setNewBasketText] = useState('');
    const handleNewBasketTextChange = (event) => {
        setNewBasketText(event.target.value);
    };
    const nameCustomBasket = (event) => {
        if (event.key === 'Enter') {
           alert("You have added item no."+event.target.value+" as a suggestion. ")


        }
    };

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

    return (
        <div>
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
                                        Add Suggestion
                                    </Typography>

                                        <StyledTextfield value={newBasketText} onChange={handleNewBasketTextChange} onKeyDown={nameCustomBasket} id="standard-basic" label="Enter item ID" variant="outlined" />



                                </Box>
                            </Container>


                        </div>
                    </Typography>
                </Box>
            </Modal>
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
                <Element><img style={{marginLeft: "20px"}} src="/images/burger.png" alt="Burger Image" width="45px" height="45px"/>
                </Element>
                <Element>1</Element>
                <Element>4,00$</Element>
                <Element>3lb</Element>
                <Element>Outstanding!</Element>
                <Element>Pizza</Element>
                <Element><AddButton onClick={handleOpen}>Add</AddButton></Element>
                <Element><BuyButton>Buy</BuyButton></Element>
            </Item>
            <Item>
                <Element>14</Element>
                <Element>Pizza</Element>
                <Element>Meal</Element>
                <Element><img src="/images/pizza.jpg" alt="Pizza Image" width="45px" height="45px"/>
                </Element>
                <Element>1</Element>
                <Element>3,55$</Element>
                <Element>1lb</Element>
                <Element>It's okay...</Element>
                <Element>Burger</Element>
                <Element><AddButton>Add</AddButton></Element>
                <Element><BuyButton>Buy</BuyButton></Element>
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
  background-color: #FA8072;
  z-index: 911;
  order: 999;
  color: white;
  &:hover {
    background-color: #FA8072;
`

const BuyButton = styled(Button)`
  background-color: #40E0D0;
  order: 999;
  z-index: 911;
  color: white;

  &:hover {
    background-color: #40E0D0;;
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