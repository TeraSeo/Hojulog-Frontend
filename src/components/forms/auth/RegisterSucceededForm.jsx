import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthTitleText from "../../texts/AuthTitleText";

function RegisterSucceededForm() {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate("/login"); // 경로를 필요에 따라 조정하세요.
    };

    return (
        <Box>
            <AuthTitleText />

            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                회원가입 성공!
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                계정이 성공적으로 생성되었습니다. 이제 로그인하여 계정을 이용할 수 있습니다.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoToLogin}
                sx={{
                    padding: '10px 0',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                    fontWeight: 'bold',
                }}
            >
                로그인하러 가기
            </Button>
        </Box>
    );
}

export default RegisterSucceededForm;