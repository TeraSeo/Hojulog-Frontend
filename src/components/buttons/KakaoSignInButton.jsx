import React from 'react';
import { Button } from '@mui/material';
import { SiKakao } from "react-icons/si";

function KakaoSignInButton() {
  return (
    <Button
      variant="contained"
      startIcon={<SiKakao />}
      fullWidth
      sx={{
        mt: 2,
        color: 'black', // Kakao branding (black text on yellow background)
        backgroundColor: '#FEE500', // Official Kakao yellow
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#FADA00', // Slightly darker Kakao yellow
        },
      }}
      href="http://localhost:8080/oauth2/authorize/kakao?redirect_uri=http://localhost:3000/oauth2/redirect"
    >
      카카오로 로그인
    </Button>
  );
}

export default KakaoSignInButton;
