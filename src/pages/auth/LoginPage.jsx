import React from 'react';
import { Grid, Box } from '@mui/material';
import LoginForm from '../../components/forms/auth/LoginForm';

function LoginPage() {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f5f1 0%, #f1ebe4 50%, #e8e2db 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
            width: '100%',
            maxWidth: 420,
            p: 4,
            backgroundColor: 'white',
            borderRadius: 3,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            mx: 2,
            my: 5
        }}
    >
        <LoginForm />
      </Box>
    </Grid>
  );
}

export default LoginPage;
