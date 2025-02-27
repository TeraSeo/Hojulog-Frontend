import React, { useState } from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import DividerWithText from '../../texts/DividerWithText';
import AuthTitleText from '../../texts/AuthTitleText';
import GoogleSignInButton from '../../buttons/GoogleSignInButton';
import AuthTextField from '../../textfields/AuthTextField';
import { Email, Lock, Person } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { register as registerUser } from '../../../service/UserService';
import { useNavigate } from 'react-router-dom';
import KakaoSignInButton from '../../buttons/KakaoSignInButton';

function RegisterForm() {
  const navigate = useNavigate();
  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
  const onSubmit = (data) => {
        registerUser(data).then((response) => {
            const { success, message } = response;
            if (success) {
                navigate("/register/succeeded");
            }
            else {
                setErrorMsg(message);
            }
        }).catch((error) => {
            setErrorMsg("계정 등록에 실패했습니다");
        });
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
        label="이름"
        placeholder="이름을 입력하세요"
        startIcon={<Person />}
        required
        {...register("username", {
            required: "이름을 입력해야 합니다",
            minLength: {
              value: 1,
              message: "이름은 최소 1자 이상이어야 합니다",
            },
        })}
        error={!!errors.username}
        helperText={errors.username ? errors.username.message : ''}
      />

      <AuthTextField
        label="이메일"
        placeholder="이메일 주소를 입력하세요"
        startIcon={<Email />}
        required
        {...register("email", {
            required: "이메일을 입력해야 합니다",
            pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "올바른 이메일 주소를 입력하세요",
            }
        })}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
      />

      <AuthTextField
        label="비밀번호"
        placeholder="비밀번호를 입력하세요"
        type="password"
        startIcon={<Lock />}
        required
        {...register("password", {
            required: "비밀번호를 입력해야 합니다",
            minLength: {
              value: 6,
              message: "비밀번호는 최소 6자 이상이어야 합니다",
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
            type='submit'
        >
            회원가입
        </Button>
      </Box>

      <DividerWithText text="또는 다른 방법으로 로그인" />

      <GoogleSignInButton sx={{ my: 1 }} />
      <KakaoSignInButton />

      <Box mt={2} textAlign="center">
        <Typography variant="body2">
          이미 계정이 있으신가요? <Link href="login" underline="hover" sx={{ color: '#1976d2', fontWeight: 'bold' }}>로그인</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default RegisterForm;