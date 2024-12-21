import React from "react";
import { Typography } from "@mui/material";

const PropertyTypeText = ({ propertyType }) => {
    return <Typography
        variant="body2"
        sx={{
            pt: 1,
            pl: 1,
            fontWeight: "600",
            textAlign: "start",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            transition: "color 0.3s, transform 0.3s",
            "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
                transform: "scale(1.02)",
                cursor: "pointer",
            },
        }}
    >
        {propertyType + " | " || ""}
    </Typography>;
}

export default PropertyTypeText;