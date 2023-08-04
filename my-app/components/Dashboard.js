import React from 'react';
import styled from "styled-components";

const Dashboard = () => {
    return (
        <StyledPageContainer>
            <Burger></Burger>
            <Content style={{marginLeft: 95}}>
                <div style={{color: "black", fontSize: 28, alignItems: "center", justifyContent: "center", display: "flex"}}> Today's Deal</div>
            </Content>

            <Days style={{marginLeft: 125}}>
                <div style={{color: "white", fontSize: 20, alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <div style={{position: "relative", top: 10}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;2<br/>DAYS
                    </div>
                </div>
            </Days>

            <Hours style={{marginLeft: 5}}>
                <div style={{color: "white", fontSize: 20, alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <div style={{position: "relative", top: 10}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;20<br/>HOURS
                    </div>
                </div>
            </Hours>
            <Min style={{marginLeft: 5}}>
                <div style={{color: "white", fontSize: 20, alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <div style={{position: "relative", top: 10}}>
                        &nbsp;&nbsp;15<br/>MIN
                    </div>
                </div>
            </Min>
            <Sec style={{marginLeft: 5}}>
                <div style={{color: "white", fontSize: 20, alignItems: "center", justifyContent: "center", display: "flex"}}>
                    <div style={{position: "relative", top: 10}}>
                        &nbsp;&nbsp;&nbsp;2<br/>SEC
                    </div>
                </div>
            </Sec>
            <Text style={{color: "black", fontSize: 28, alignItems: "center", justifyContent: "center", display: "flex", top: 375, left: 995, position: "absolute"}}>
                Burger<br/>Tomato, green salad, pita, ketchup, mayo
            </Text>


        </StyledPageContainer>
    );
};
const Text = styled.div`
    z-index: 50;
  position: absolute;
  objectFit: cover;
`
const StyledPageContainer = styled.div`
  background-color: #E6D7FF;
  height: 650px;
  width: 1400px;
  postition: absolute;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  z-index: -1;
  order: 999;
  padding: 20px;
`
const Content = styled.div`
  background-color: white;
  height: 500px;
  width: 500px;
  postition: absolute;
  display: inline-block;
  z-index: -1;
  order: 999;
  margin-top: 100px;
`
const Days = styled.div`
  background-color: #F77D54;
  height: 82px;
  width: 107px;
  display: inline-block;
  postition: absolute;
  z-index: 50;
`
const Hours = styled.div`
  background-color: #F77D54;
  height: 82px;
  width: 107px;
  display: inline-block;
  postition: absolute;
  z-index: 50;
`
const Min = styled.div`
  background-color: #F77D54;
  height: 82px;
  width: 107px;
  display: inline-block;
  postition: relative;
  z-index: 50;
`
const Sec = styled.div`
  background-color: #F77D54;
  height: 82px;
  width: 107px;
  display: inline-block;
  postition: relative;
  z-index: 50;
`





const Burger = styled.div`
  position: absolute;
  
  top: 320px;
  left: 450px;
  width: 300px;
  height: 300px;
  margin-left: 0px;
  background-image: url('/images/burger.png');
  background-repeat: no-repeat;
  background-size: cover;
  objectFit: 'cover';
  z-index: 50;
`;
export default Dashboard;