import React from "react";
import { Typography, Box } from '@mui/material';
import iconImg from '../../assets/images/icon_img.png';

function AuthTitleText() {
    return (
        <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: '700', mb: 1, color: '#333', display: 'flex', fontSize: '30px' }}>
                <Box
                    sx={
                        {
                        height: '50px',
                        width: '25px',
                        backgroundColor: '#3A0CA3',
                        backgroundImage: `url(${iconImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mr: '15px'
                    }
                }/>
                BeginnersHub
            </Typography>
        </Box>
    );
}

export default AuthTitleText;
