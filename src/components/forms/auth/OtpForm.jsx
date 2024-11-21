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
            setErrorMsg("Please fill in all OTP fields.");
            return;
        }

        const isOtpCorrect = await checkIsOtpCorrect(email, otp);
        if (isOtpCorrect) {
            setErrorMsg('');
            navigate("/home")
        } else {
            setErrorMsg("Invalid OTP. Please try again.");
        }
    };

    const handleResendOtp = () => {
        sendOtp(email);
    };

    return (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <AuthTitleText title="Enter OTP" subtitle="Please enter the OTP sent to your email" />

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
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
                        '&:hover': {
                            backgroundColor: '#1565c0',
                            transform: 'scale(1.02)',
                            transition: '0.2s',
                        },
                    }}
                    onClick={checkOtp}
                >
                    Verify
                </Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                    Didn’t receive the OTP?
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
                    Resend OTP
                </Button>
            </Box>
        </Box>
    );
}

export default OtpForm;