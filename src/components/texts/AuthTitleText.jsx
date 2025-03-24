import React from "react";
import { Typography, Box } from '@mui/material';
import iconImg from "../../assets/images/alog.JPEG";
import { useNavigate } from "react-router-dom";

function AuthTitleText() {
    const navigate = useNavigate();

    return (
        <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: '700', mb: 1, color: '#333', display: 'flex', alignItems: "center", fontSize: '30px' }}>
                <Box
                    onClick={() => {navigate("/")}}
                    sx={{
                        width: { xs: 80, sm: 85, md: 90 }, 
                        height: { xs: 60, sm: 65, md: 70 }, 
                        backgroundImage: `url(${iconImg})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                />
                호주로그
            </Typography>
        </Box>
    );
}

export default AuthTitleText;
