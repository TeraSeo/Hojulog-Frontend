import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from '@mui/material'; 

function GoogleSignInButton() {
    return (
        <Button
            variant="outlined"
            startIcon={<FcGoogle />}
            fullWidth
            sx={{
                mt: 2,
                color: 'black',
                borderColor: 'grey.400',
                backgroundColor: 'white',
                textTransform: 'none',
                '&:hover': {
                backgroundColor: '#f5f5f5',
                borderColor: 'grey.500',
                },
            }}
            href="http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect"
        >
            Sign in with Google
        </Button>
    );
}

export default GoogleSignInButton;