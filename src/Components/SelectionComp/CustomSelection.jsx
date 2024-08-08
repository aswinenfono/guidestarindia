import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: '8px',
            borderColor: 'gray', // Default border color
        },
        '&:hover fieldset': {
            borderColor: 'gray', // Border color when hovering
        },
        '&.Mui-focused fieldset': {
            borderColor: 'gray', // Border color when focused
        },
    },
    '& .MuiInputLabel-root': {
        color: 'gray', // Default label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'gray', // Label color when focused
    },
}));

const CustomSelection = ({ label, name, required, disabled, onChange, mappingKey, value, options, className }) => {
    return (
        <CustomTextField
            className={`w-[100%] ${className}`}
            id="outlined-select-currency-native"
            label={label}
            select
            required={required}
            name={name}
            onChange={onChange}

            SelectProps={{
                native: true,
            }}
            variant="outlined"
            value={value}
            disabled={disabled}
        >
            <option value=""></option>
            {options?.map((option, index) => (
                <option key={index + 1} value={option?.[mappingKey] || option.option}>
                    {option?.[mappingKey] || option.option}
                </option>
            ))}
        </CustomTextField>
    );
};

export default CustomSelection;
