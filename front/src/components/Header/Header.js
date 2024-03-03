import React from 'react';
import {HeaderStyle, LineStyle, LogoStyle, LowerHeaderStyle, UpperHeaderStyle} from "./Header.style";
import Logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";

const Header = ({isGetAll, isGetById, isCreate, updateState}) => {
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
                <Navbar isGetAll={isGetAll} isGetById={isGetById} isCreate={isCreate} updateAppState={updateState}/>
            </LowerHeaderStyle>
            <LineStyle>
                <svg width="100%" height="1vh">
                    <line x1="0" y1="0" x2="100%" y2="0"></line>
                </svg>
            </LineStyle>
        </HeaderStyle>
    );
};

export default Header;