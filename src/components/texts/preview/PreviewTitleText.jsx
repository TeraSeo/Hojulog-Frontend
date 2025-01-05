import React from "react";
import { Typography } from "@mui/material";

const PreviewTitleText = ({ title, pl = 1 }) => {
    return (
        <Typography
            variant="body2"
            sx={{
                pt: 1,
                pl: pl,
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
            {title || "No Title Available"}
        </Typography>
    );
};

export default PreviewTitleText;
