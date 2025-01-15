import React from "react";
import { Typography } from "@mui/material";
import { ButtonResponsiveFontSize1 } from "../../constant/FontSizeResponsive";

const TransactionPriceText = ({ price }) => {
    return <>
        {price && (
            <Typography
            variant="h6"
            sx={{
                fontWeight: "bold",
                color: "#007AFF",
                backgroundColor: "#f0f8ff",
                padding: "4px 12px",
                borderRadius: "8px",
                fontSize: ButtonResponsiveFontSize1,
                ml: 2
            }}
            >
            ${price}
            </Typography>
        )}
    </>;
}

export default TransactionPriceText;