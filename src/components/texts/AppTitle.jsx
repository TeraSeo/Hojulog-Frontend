import React, { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import iconImg from "../../assets/images/icon_img.png";
import SearchDialog from "../dialog/SearchDialog";
import { useNavigate } from "react-router-dom";

function AppTitle() {
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
                onClick={() => navigate("/")}
                sx={{
                    height: '36px',
                    width: '18px',
                    backgroundImage: `url(${iconImg})`,
                    backgroundSize: 'cover',
                    mr: '10px',
                    cursor: "pointer"
                }}
            />

            <TextField
                variant="outlined"
                placeholder="Search..."
                onClick={handleOpenDialog}
                fullWidth
                sx={{
                    maxWidth: "300px",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "50px",
                        backgroundColor: "#f0f0f0",
                        height: "36px",
                        padding: "0 12px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "& .MuiInputBase-input": {
                        cursor: "pointer",
                    },
                }}
                InputProps={{
                    readOnly: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: "#888" }} />
                        </InputAdornment>
                    ),
                }}
            />

            <SearchDialog open={openDialog} onClose={handleCloseDialog} />
        </Box>
    );
}

export default AppTitle;
