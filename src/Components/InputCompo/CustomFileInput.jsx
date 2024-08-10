


import React from 'react';
import { Box, styled, TextField, InputAdornment } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
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

const CustomFileInput = ({ value, onChange, label, name, required, ...props }) => {
    const fileInputRef = React.createRef();
    const handleIconClick = () => {
        fileInputRef.current.click();
    };




    return (
        <>

            <input
                ref={fileInputRef}
                type="file"
                style={{ display: 'none' }}
                onChange={onChange}
                name={name}
                required={required}
                {...props}
            />
            <CustomTextField
                className='w-[100%] cursor-pointer'
                label={label}
                required={required}
                {...props}
                InputProps={{
                    style: {
                        borderColor: 'gray',
                        cursor: 'pointer',
                    },
                    // readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end" onClick={handleIconClick} style={{ cursor: 'pointer' }}>
                            <AttachFileIcon className='text-3xl text-[#004878]' />
                        </InputAdornment>
                    ),
                }}
                id="outlined-file-input"
                variant="outlined"
                value={value ? value : ''}
                onClick={handleIconClick}
            />
        </>

    );
};

export default CustomFileInput;
