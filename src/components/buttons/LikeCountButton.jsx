import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Typography, Box } from "@mui/material";
import { logoPrimaryColor } from "../../constant/Color";

const LikeCountButton = ({count}) => {
    return (
        <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                color: logoPrimaryColor,
                border: '1px solid #001f5b',
                padding: '4px 8px',
                borderRadius: '4px',
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 'bold', color: logoPrimaryColor }}>
                {count} 
              </Typography>
              <FavoriteBorderIcon />
            </Box>
    );
}

export default LikeCountButton;