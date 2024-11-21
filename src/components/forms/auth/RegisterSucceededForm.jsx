import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthTitleText from "../../texts/AuthTitleText";

function RegisterSucceededForm() {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate("/login"); // Adjust this path as needed
    };

    return (
        <Box>
            <AuthTitleText />

            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                Registration Successful!
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                Your account has been successfully created. You can now log in to access your account.
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
                Go to Login
            </Button>
        </Box>
    );
}

export default RegisterSucceededForm;
