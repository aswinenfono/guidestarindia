import { Box, TextField } from '@mui/material'
import React from 'react'

const CustomInput = ({ value, onChange, label, type }) => {
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
                <TextField
                    InputProps={{
                        style: {
                            borderRadius: "8px 8px 00px 00px",
                            borderColor: '#004878'
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: '#004878', // Change this to your desired color
                        },
                    }}

                    id="filled-basic" value={value} onChange={onChange} type={type} label={label} variant="filled" />
            </Box>


        </>
    )
}

export default CustomInput