import TextField from '@mui/material/TextField';
import { styled as muiStyled } from '@mui/system';
import styled from 'styled-components';

export const TextFieldStyle = muiStyled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        color: '#26293C',
        borderRadius: '25px',
        '&:hover $notchedOutline': {
            border: '1px solid #7793AE',
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #7793AE',
    },
    '& .MuiInputLabel-root': {
        color: '#7793AE',
    },
    margin: '11.5px 0',
    width: '100%',}));

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 2%;
    max-width: 400px;
`;

export const GetByIdContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;


