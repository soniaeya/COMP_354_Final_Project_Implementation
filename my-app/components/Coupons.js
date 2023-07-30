import React from 'react';
import styled from "styled-components";

const Coupons = () => {
    return (
        <>
            <MyStyledComponent>
                Coupons
            </MyStyledComponent>
            <CouponsInitialMenu>
                <div style={{ position: "absolute", padding: "20px", top: "10px"}}>
                    You have purchased 7,10$ worth of food.
                </div>
                <div style={{ position: "absolute", padding: "5px", top: "107px", left: "18px"}}>
                    You have 0 coupon(s) worth 0,00$
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