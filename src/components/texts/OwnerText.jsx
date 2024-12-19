import React from "react";
import { Box, Typography } from "@mui/material";
import Email from "@mui/icons-material/Email";
import { primaryColor } from "../../constant/Color";

const OwnerText = ({ownerEmail}) => {
    return (
        <>
            {ownerEmail && (
            <Box sx={{ marginTop: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            <Email sx={{ color: primaryColor }} />
            <Typography variant="body2" sx={{ color: primaryColor }}>
                {ownerEmail}
            </Typography>
            </Box>
        )}
        </>
    );
}

export default OwnerText;