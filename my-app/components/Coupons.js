import React from 'react';
import styled from "styled-components";

const Coupons = ({username}) => {
    return (
        <>
            <MyStyledComponent>
                Coupons
            </MyStyledComponent>
            <CouponsInitialMenu>
                <div style={{ position: "absolute", padding: "20px", top: "10px"}}>
                    Hi {username}!
                </div>
                <div style={{ position: "absolute", padding: "20px", top: "58px", fontSize: "22px"}}>
                    You have purchased 7,10$ worth of food,
                    <br/>
                    and 0 coupon(s) worth 0,00$
                </div>

            </CouponsInitialMenu>

        </>
    );
};

export default Coupons;
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
  left: 900px;
  top: 110px;
  position: absolute;
  outline-color: black;
  outline-style: solid;
  outline-width: 2px;
`;

const CouponsInitialMenu = styled.div`
  color: black;
  font-size: 28px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
  z-index: 999;
  width: 450px;
  height: 170px;
  left: 900px;
  top: 180px;
  position: absolute;
  outline-color: black;
  outline-style: solid;
  outline-width: 2px;
  
`