import React from "react";
import { Typography } from "@mui/material";

const PriceText = ({ price }) => {
  return (
    <Typography variant="body2"
        sx={{
            fontWeight: "bold",
            fontSize: "15px",
            textAlign: "start",
            pl: 0.3
        }}>
      ${price || ""}
    </Typography>
  );
};

export default PriceText;
