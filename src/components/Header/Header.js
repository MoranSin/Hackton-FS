import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'
import Navbar from "../Navbar/Navbar";

const HeaderStyle = styled.header`
    display: flex;
    flex-flow: column;
`;

const UpperHeaderStyle = styled.div`
    display: flex;
    height: 50%;
    justify-content: left;
    position: relative;
    margin: 2% 0 1.5% 2.75%;
`;

const LowerHeaderStyle = styled.div`
    width: 98%;
    justify-content: space-between;
    position: relative;
    margin-bottom: 0.5%;
`;

const LogoStyle = styled.img`
    width: 150px;
    height: 20px;
    display: block;
    position: relative;
`;

const LineStyle: any = styled.div`
    display: flex;
    fill: #E5EAEF;
    stroke: #E5EAEF;
    stroke-width: 5px;
`;

const Header = () => {
    return (
        <HeaderStyle>
            <UpperHeaderStyle>
                <LogoStyle src={Logo} alt="logo"/>
            </UpperHeaderStyle>
            <LineStyle>
                <svg width="100%" height="1vh">
                    <line x1="0" y1="0" x2="100%" y2="0"></line>
                </svg>
            </LineStyle>
            <LowerHeaderStyle>
                <Navbar/>
            </LowerHeaderStyle>
            <LineStyle>
                <svg width="100%" height="1vh">
                    <line x1="0" y1="0" x2="100%" y2="0"></line>
                </svg>
            </LineStyle>
        </HeaderStyle>
    )
}

export default Header;
