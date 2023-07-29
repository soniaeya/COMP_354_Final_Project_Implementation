import React from 'react';
import styled from "styled-components";

const SuggestionsPopup = () => {
    return (
        <div>
            <Content>
                <div style={{fontWeight: "bold", fontSize: 40}}>These items might interest you:</div>
                <Pizza></Pizza>
                <div style={{fontWeight: "bold", fontSize: 20, position: "relative"}}>C. Pizza</div>
            </Content>
        </div>
    );
};

export default SuggestionsPopup;

const Content = styled.div`
  padding: 20px;
  background-color: sandybrown;
  height: 700px;
  width: 1500px;
  margin-left: 200px;
  postition: absolute;
  display: inline-block;
  z-index: 2999;
  order: 999;
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
`;