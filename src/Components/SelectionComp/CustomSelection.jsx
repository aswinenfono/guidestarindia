import { Box, TextField } from '@mui/material'
import React from 'react'

const CustomSelection = (props) => {
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
                    id="filled-select-currency-native"
                    label={props?.label}
                    select
                    SelectProps={{
                        native: true,
                        style: {
                            borderRadius: "8px 8px 00px 00px",
                        }
                    }}

                    InputLabelProps={{
                        style: {
                            color: '#004878', // Change this to your desired color
                        },
                    }}
                    variant="filled"
                    value={props?.value
                    }
                >
                    {props?.options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>

            </Box >
        </>

    )
}

export default CustomSelection