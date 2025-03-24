import React from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function TransactionNonOptionPostAddButton({ subCategory }) {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: { xs: 12, sm: 24 },
                right: { xs: 12, sm: 24 },
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 1,
            }}
        >
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => {navigate(`/launch/사고팔기/${subCategory}`);}}
                sx={{
                    width: { xs: 40, sm: 56 },
                    height: { xs: 40, sm: 56 },
                    minHeight: "unset",
                }}
            >
                <AddIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
            </Fab>
        </Box>
    );
}

export default TransactionNonOptionPostAddButton;