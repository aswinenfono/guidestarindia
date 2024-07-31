import React from 'react'
import { Box, styled, TextField } from '@mui/material';

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
                // onChange={handleFileChange}
                />
                <TextField
                    InputProps={{

                        style: {
                            borderRadius: "8px 8px 0 0",
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
                        <CustomInputLabel>
                            <div className='flex gap-[20px]'>
                                <i class="fa-solid fa-paperclip text-xl "></i>
                                {label}
                            </div>

                        </CustomInputLabel>
                    }
                    id="custom-file-input"
                    variant="filled"
                    // value={fileName}
                    onClick={handleIconClick}
                />
            </Box>

        </>
    )
}

export default CustomFileInput