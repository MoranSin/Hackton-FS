import React from 'react'
import styled from 'styled-components'

const NavStyle = styled.nav`
    display: flex;
    position: relative;
    justify-content: center;    
    flex-flow: row;
    align-items: center;
    width: 100%;
`;

const UlStyle = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    align-content: center;
    margin: 5px;
    width: 70%;
`;
const LiStyle = styled.li`
    list-style: none;
    border: 1px solid #7793AE;
    border-radius: 25px;
    padding: 8px 15px;
    color: #5A7490;
    margin: 7px;
    font-size: 1em;
`;

const Navbar = () => {
    return (
        <NavStyle>
            <UlStyle>
                <LiStyle>Get All Reports</LiStyle>
                <LiStyle>Get Report By id</LiStyle>
                <LiStyle>Create Report</LiStyle>
            </UlStyle>
        </NavStyle>
    )
}

export default Navbar;
