import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthTitleText from "../../texts/AuthTitleText";
import OTPInput from "react-otp-input";
import { checkIsOtpCorrect, sendOtp } from "../../../service/UserService";
import { useNavigate } from "react-router-dom";

function OtpForm() {
    const [otp, setOtp] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const email = localStorage.getItem('email');
    const navigate = useNavigate();

    const checkOtp = async () => {
        if (otp.length < 4) {
            setErrorMsg("모든 OTP 필드를 입력해주세요.");
            return;
        }

        const isOtpCorrect = await checkIsOtpCorrect(email, otp);
        if (isOtpCorrect) {
            setErrorMsg('');
            navigate("/home")
        } else {
            setErrorMsg("잘못된 OTP입니다. 다시 시도해주세요.");
        }
    };

    const handleResendOtp = () => {
        sendOtp(email);
    };

    return (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <AuthTitleText title="OTP 입력" subtitle="이메일로 전송된 OTP를 입력해주세요" />

            <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                        width: '55px',
                        height: '55px',
                        margin: '0 8px',
                        fontSize: '20px',
                        borderRadius: '8px',
                        border: '2px solid #ccc',
                        textAlign: 'center'
                    }}
                />
            </Box>

            {errorMsg && (
                <Typography color="error" sx={{ mb: 2 }}>
                    {errorMsg}
                </Typography>
            )}

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
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            backgroundColor: '#1565c0',
                            transform: 'scale(1.02)',
                            transition: '0.2s',
                        },
                    }}
                    onClick={checkOtp}
                >
                    확인
                </Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                    OTP를 받지 못하셨나요?
                </Typography>
                <Button
                    onClick={handleResendOtp}
                    sx={{
                        color: '#1976d2',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    OTP 다시 받기
                </Button>
            </Box>
        </Box>
    );
}

export default OtpForm;