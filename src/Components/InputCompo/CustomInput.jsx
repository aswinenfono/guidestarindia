import { Box, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
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
const CustomInput = ({ value, onChange, label, type, name, required, error, disabled }) => {
    console.log("disabled>>>>", disabled)
    return (
        <>
            <div className='w-[100%]'>
                <CustomTextField
                    className="w-[100%]"
                    required={required}
                    disabled={disabled ? true : false}
                    InputProps={{
                        style: {
                            borderColor: '#004878',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: '#004878',
                        },
                    }}
                    id="outlined-basic"
                    value={value ? value : ''}
                    onChange={onChange}
                    type={type}
                    label={label}
                    variant="outlined"
                    name={name}
                />
            </div>
        </>
    )
}

export default CustomInput