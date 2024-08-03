import React from 'react'
import { Box, styled, TextField } from '@mui/material';
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
const CustomFileInput = ({ value, onChange, label }) => {
    const fileInputRef = React.createRef();
    const handleIconClick = () => {
        fileInputRef.current.click();
    };
    const CustomInputLabel = styled('div')({
        display: 'flex',
        alignItems: 'center',
        color: '#004878', // Set the color of the label
        fontSize: '1rem', // Set font size as per requirement
        '& svg': {
            marginRight: '8px', // Space between icon and label text
        },
    });
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {
                        width: '100%',
                    },
                }}
                noValidate
                autoComplete="off"
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: 'none' }}
                    onChange={onChange}
                />
                <CustomTextField
                    InputProps={{
                        style: {
                            borderColor: '#004878',
                            cursor: 'pointer',
                        },
                        readOnly: true,
                    }}
                    InputLabelProps={{
                        style: {
                            color: '#004878',
                        },
                    }}
                    label={
                        <CustomInputLabel className='w-fit'>
                            <div className='flex w-fit gap-[20px]'>
                                <i class="fa-solid fa-paperclip text-xl "></i>
                                {label}
                            </div>
                        </CustomInputLabel>
                    }
                    id="outlined-file-input"
                    variant="outlined"
                    value={value ? value : ''}
                    onClick={handleIconClick}
                />
            </Box>

        </>
    )
}

export default CustomFileInput