import React from 'react';
import { TextField, InputAdornment, Box, Typography } from '@mui/material';

const AuthTextField = React.forwardRef(function AuthTextField(
  { label, placeholder, type = 'text', startIcon, required = false, error, helperText, ...props },
  ref
) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: '500',
          color: '#333',
          mb: 0.5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {label} {required && <span style={{ color: 'red', marginLeft: '4px' }}>*</span>}
      </Typography>
      <TextField
        placeholder={placeholder}
        type={type}
        variant="outlined"
        fullWidth
        inputRef={ref} // Forward ref here for react-hook-form
        error={error}
        helperText={helperText}
        InputProps={{
          startAdornment: startIcon ? (
            <InputAdornment position="start">
              {startIcon}
            </InputAdornment>
          ) : null,
          sx: {
            padding: '9px 10px',
            fontSize: '0.875rem',
            borderRadius: '8px',
            minHeight: '36px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: error ? 'red' : '#ddd', // Show red border on error
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-input': {
            backgroundColor: '#fafafa',
            padding: '4px 0',
          },
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#fafafa',
            '& fieldset': {
              borderColor: error ? 'red' : '#e0e0e0',
            },
            '&:hover fieldset': {
              borderColor: error ? 'red' : '#b0b0b0',
            },
            '&.Mui-focused fieldset': {
              borderColor: error ? 'red' : '#1976d2',
            },
          },
        }}
        {...props}
      />
    </Box>
  );
});

export default AuthTextField;
