import React from "react";
import { Typography } from "@mui/material";

const PeriodText = ({ period }) => {
  return (
    <Typography variant="body2"
        sx={{
            fontWeight: "bold",
            fontSize: "15px",
            textAlign: "start",
        }}>
        {period || ""}/
    </Typography>
  );
};

export default PeriodText;
