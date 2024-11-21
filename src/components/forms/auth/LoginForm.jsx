import React, { useState } from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import DividerWithText from '../../texts/DividerWithText';
import AuthTitleText from '../../texts/AuthTitleText';
import GoogleSignInButton from '../../buttons/GoogleSignInButton';
import AppleSignInButton from '../../buttons/AppleSignInButton';
import AuthTextField from '../../textfields/AuthTextField';
import { Email, Lock } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { login } from '../../../service/UserService';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    const isLoggedin = await login(data);
    if (isLoggedin) {
      navigate("/otp");
    }
    else {
      setErrorMsg("Wrong email or password");
    }
  };

  const [ errorMsg, setErrorMsg ] = useState(null);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%' }}>
      <AuthTitleText />

      {errorMsg && (
        <Typography variant="body2" color="error" sx={{ mb: 2, textAlign: 'center' }}>
          {errorMsg}
        </Typography>
      )}

      <AuthTextField
        label="Email"
        placeholder="Enter your email address"
        startIcon={<Email />}
        required
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Enter a valid email address",
          }
        })}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
      />

      <AuthTextField
        label="Password"
        placeholder="Enter your password"
        type="password"
        startIcon={<Lock />}
        required
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        error={!!errors.password}
        helperText={errors.password ? errors.password.message : ''}
      />

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
            variant="contained"
            fullWidth
            sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                fontWeight: 'bold',
                padding: '10px 0',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
                '&:hover': {
                    backgroundColor: '#1565c0',
                    transform: 'scale(1.02)',
                    transition: '0.2s',
                },
            }}
            type="submit"
        >
          Log In
        </Button>
      </Box>

      <DividerWithText text="Or, Login with" />

      <GoogleSignInButton sx={{ my: 1 }} />
      <AppleSignInButton />

      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          Don't have an account? <Link href="register" underline="hover" sx={{ color: '#1976d2', fontWeight: 'bold' }}>Register here</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginForm;
