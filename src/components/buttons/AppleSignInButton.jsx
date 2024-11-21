import React from 'react';
import { Button } from '@mui/material';
import { FaApple } from "react-icons/fa";

function AppleSignInButton() {
  return (
    <Button
      variant="contained"
      startIcon={<FaApple />}
      fullWidth
      sx={{
        mt: 2,
        color: 'white',             
        backgroundColor: 'black', 
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#333333',
        },
      }}
    >
      Sign in with Apple
    </Button>
  );
}

export default AppleSignInButton;
