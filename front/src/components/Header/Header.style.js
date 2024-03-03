import styled from "styled-components";

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

const LineStyle = styled.div`
    display: flex;
    fill: #7e7e7e;
    stroke: #7e7e7e;
    stroke-width: 5px;
    opacity: 0.2;
`;

export {
    HeaderStyle,
    UpperHeaderStyle,
    LowerHeaderStyle,
    LogoStyle,
    LineStyle
};