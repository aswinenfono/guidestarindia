import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CustomTextField = styled(TextField)(({ theme, type }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '8px',
      borderColor: 'gray',
    },
    '&:hover fieldset': {
      borderColor: 'gray',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'gray',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'gray',
    transform: type === 'date' && 'translate(14px, -7px) scale(0.75)',
    backgroundColor: type === 'date' && 'white',
    padding: type === 'date' && '00px 10px ',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'gray',
  },
}));

const CustomInput = ({
  value,
  onChange,
  label,
  type,
  name,
  required,
  error,
  disabled,
  endLabel,
}) => {
  return (
    <div className="w-[100%]">
      <CustomTextField
        className="w-[100%]"
        required={required}
        disabled={disabled}
        InputProps={{
          style: {
            borderColor: '[gray]',
          },
          endAdornment: (
            <InputAdornment position="end" style={{ cursor: 'pointer' }}>
              {endLabel}
            </InputAdornment>
          ),
        }}
        InputLabelProps={{
          style: {
            color: '[gray]',
          },
        }}
        id="outlined-basic"
        value={value || ''}
        onChange={onChange}
        type={type}
        label={label}
        variant="outlined"
        name={name}
      />
    </div>
  );
};

export default CustomInput;
