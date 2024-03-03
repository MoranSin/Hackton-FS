import TextField from '@mui/material/TextField';
import { styled as muiStyled } from '@mui/system';
import styled from 'styled-components';

export const TextFieldStyle = muiStyled(TextField)(({ width  }) => ({
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
    width: width || '200px',}));

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 2%;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
`;