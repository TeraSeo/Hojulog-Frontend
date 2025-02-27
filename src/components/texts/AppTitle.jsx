import React, { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import iconImg from "../../assets/images/alog.JPEG";
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 1.5, sm: 1, xs: 0.5 }, width: '100%' }}>
            <Box
                onClick={() => navigate("/")}
                sx={{
                    width: { xs: 70, sm: 75, md: 80 }, 
                    height: { xs: 45, sm: 47, md: 50 }, 
                    backgroundImage: `url(${iconImg})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                }}
            />

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    onClick={handleOpenDialog}
                    sx={{
                        maxWidth: "600px", 
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                            backgroundColor: "#ffffff",
                            height: { xs: 35, sm: 40, md: 45 }, 
                            padding: "0 16px",
                            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                            transition: "box-shadow 0.3s ease-in-out",
                            '&:hover': {
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)"
                            }
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "& .MuiInputBase-input": {
                            cursor: "pointer",
                            color: "#333",
                            fontSize: { xs: "12px", sm: "14px", md: "16px" },
                        },
                    }}
                    InputProps={{
                        readOnly: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ 
                                    color: "#666", 
                                    width: { xs: 17, sm: 20, md: 23 }, 
                                    height: { xs: 17, sm: 20, md: 23 } 
                                }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            <SearchDialog open={openDialog} onClose={handleCloseDialog} />
        </Box>
    );
}

export default AppTitle;
