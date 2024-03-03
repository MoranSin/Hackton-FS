import styled from "styled-components";

const InstructionStyle = styled.div`
    border: 1px solid #E5EAEF;
    border-radius: 25px;
    margin: 2%;
    display: flex;
    flex-flow: column;
    position: relative;
    min-width: 50%;
    max-width: 50%;
    min-height: 60%;
    @media (max-width: 768px) {
        min-width: 80%;
        max-width: 80%;
    }
`;

const InstructionTitle = styled.h3`
    font-size: 1.3rem;
    margin: 22px 0 15px 0;
    align-self: center;
`;

const InstructionP = styled.p`
    font-size: 1rem;
    margin: 0px 45px 10px;
`;

const InstructionUl = styled.ul`
    display: flex;
    flex-flow: column;
    list-style: circle outside;
    margin-left: 45px;
    margin-bottom: 25px;
`;

const InstructionLi = styled.li`
    padding: 3px;
    margin:1px;
`;

const Buttons = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin-bottom: 22px;
`;

export { InstructionStyle, InstructionTitle, InstructionP, InstructionUl, InstructionLi, Buttons }