import styled from 'styled-components'

const FormStyle = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 80%;
    
`;

const SubTitle = styled.h5`
    font-size: 1.1rem;
    color: #4f4f4f;
    margin: 22px 0 15px 0;
    align-self: flex-start;
    font-weight: 500;
`;

const RowContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 70%;

`;

export { FormStyle, SubTitle, RowContainer, ColumnContainer  }
