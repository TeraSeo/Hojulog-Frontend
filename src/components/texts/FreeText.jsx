import React from "react";
import { Typography } from "@mui/material";
import { SubTitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const FreeText = () => {
  return (
    <Typography variant="body2"
        sx={{
            fontWeight: "bold",
            fontSize: SubTitleResponsiveFontSize1,
            textAlign: "start",
            pl: 0.3
        }}>
      무료
    </Typography>
  );
};

export default FreeText;
