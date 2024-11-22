import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, Typography } from "@mui/material";
import { logoPrimaryColor } from "../../constant/Color";

const LikeCountButton = ({ count }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<FavoriteBorderIcon />}
      sx={{
        textTransform: 'none',
        color: logoPrimaryColor,
        borderColor: logoPrimaryColor,
        padding: '6px 12px',
        borderRadius: '8px',
        height: '40px', // Consistent height with location button
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'bold', color: logoPrimaryColor }}>
        {count}
      </Typography>
    </Button>
  );
};

export default LikeCountButton;
