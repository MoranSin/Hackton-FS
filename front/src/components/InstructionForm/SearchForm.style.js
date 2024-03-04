import TextField from '@mui/material/TextField';
import { styled as muiStyled } from '@mui/system';
import styled from 'styled-components';

export const TextFieldStyle = muiStyled(TextField)(({ width  }) => ({
    '& .MuiOutlinedInput-root': {
        color: '#8e8e8e',
        borderRadius: '25px',
        '&:hover $notchedOutline': {
            border: '1px solid #7e7e7e',
        },
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid #7e7e7e',
    },
    '& .MuiInputLabel-root': {
        color: '#7e7e7e',
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
