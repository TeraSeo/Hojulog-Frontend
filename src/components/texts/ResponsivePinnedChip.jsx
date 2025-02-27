import { Chip, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const ResponsivePinnedChip = ({ isPinned }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {isPinned && (
                <Chip
                    label={isSmallScreen ? "📌" : "📌 고정됨"}
                    color="warning"
                    size={"small"}
                    sx={{
                        fontSize: isSmallScreen ? "0.75rem" : "0.8rem",
                        padding: isSmallScreen ? "2px" : "2px",
                        my: 0.3
                    }}
                />
            )}
        </>
    );
};

export default ResponsivePinnedChip;