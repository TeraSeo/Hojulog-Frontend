import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, Typography } from "@mui/material";
import { primaryColor } from "../../constant/Color";

const LikeCountButton = ({ count }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<FavoriteBorderIcon />}
      sx={{
        textTransform: 'none',
        color: primaryColor,
        borderColor: primaryColor,
        padding: '6px 12px',
        borderRadius: '8px',
        height: '40px',
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'bold', color: primaryColor }}>
        {count}
      </Typography>
    </Button>
  );
};

export default LikeCountButton;
