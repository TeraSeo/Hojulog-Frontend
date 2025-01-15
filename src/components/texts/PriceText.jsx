import React from "react";
import { Typography } from "@mui/material";
import { SubTitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const PriceText = ({ price }) => {
  return (
    <Typography variant="body2"
        sx={{
            fontWeight: "bold",
            fontSize: SubTitleResponsiveFontSize1,
            textAlign: "start",
            pl: 0.3
        }}>
      ${price || ""}
    </Typography>
  );
};

export default PriceText;
