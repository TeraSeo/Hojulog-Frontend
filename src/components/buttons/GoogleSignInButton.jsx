import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from '@mui/material'; 
import { clientDomain, serverDomain } from "../../constant/Route";

function GoogleSignInButton() {
    const url = `${serverDomain}/oauth2/authorize/google?redirect_uri=${clientDomain}/oauth2/redirect`;

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
            href={url}
        >
            구글 계정으로 로그인
        </Button>
    );
}

export default GoogleSignInButton;