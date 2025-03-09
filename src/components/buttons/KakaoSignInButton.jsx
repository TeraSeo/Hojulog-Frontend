import React from 'react';
import { Button } from '@mui/material';
import { SiKakao } from "react-icons/si";
import { serverDomain, clientDomain } from '../../constant/Route';

function KakaoSignInButton() {
  const url = `${serverDomain}/oauth2/authorize/kakao?redirect_uri=${clientDomain}/oauth2/redirect`;
  
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
      href={url}
    >
      카카오로 로그인
    </Button>
  );
}

export default KakaoSignInButton;
