import React from "react";
import { Typography } from "@mui/material";
import { SubTitleResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const PeriodText = ({ period }) => {
  return (
    <Typography variant="body2"
        sx={{
            fontWeight: "bold",
            fontSize: SubTitleResponsiveFontSize1,
            textAlign: "start",
        }}>
          { (period === null || period === "" || period === undefined) ? "" : period + "/" }
    </Typography>
  );
};

export default PeriodText;
