import styled from "styled-components";

const NavigateStyle = styled.div`
    display: flex;
    position: relative;
    justify-content: center;    
    flex-flow: row;
    align-items: center;
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    align-content: center;
    margin: 5px;
    width: 70%;
`;


export { NavigateStyle, ButtonContainer };