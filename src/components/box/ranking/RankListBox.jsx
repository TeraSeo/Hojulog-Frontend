import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { RankLikeCountResponsiveFontSize1, RankResponsiveFontSize1, RankUsernameResponsiveFontSize1 } from "../../../constant/FontSizeResponsive";
import { useNavigate } from "react-router-dom";

const RankListBox = ({ otherRanks=[] }) => {
    const navigate = useNavigate();

    return (
        <Box 
            sx={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                padding: { md: "20px", sm: "15px", xs: "10px" }, 
            }}
        >
            {otherRanks.map((user, index) => (
                <Box 
                    key={user.rank} 
                    sx={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: { md: "20px", sm: "16px", xs: "12px" }, 
                        width: "95%", 
                        my: 2,
                    }}
                    onClick={() => navigate(`/otherpage/${user.userId}`)}
                >
                    <Typography 
                        sx={{ 
                            fontSize: RankResponsiveFontSize1, 
                            fontWeight: "700", 
                            textAlign: "center",
                            minWidth: "30px", 
                        }}
                    >
                        {index + 4}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "white",
                            borderRadius: "50px",
                            padding: { md: "16px", sm: "14px", xs: "12px" },
                            boxShadow: "0px 10px 20px rgba(0, 50, 120, 0.2)",
                            width: "100%",
                            flexWrap: "nowrap",
                            transition: "box-shadow 0.3s ease-in-out",
                            "&:hover": {
                                boxShadow: "0px 6px 16px rgba(0, 50, 120, 0.3)",
                            },
                        }}
                    >

                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexGrow: 1 }}>
                            <Avatar 
                                src={user.profileUrl} 
                                sx={{ 
                                    width: { md: "50px", sm: "45px", xs: "40px" }, 
                                    height: { md: "50px", sm: "45px", xs: "40px" },
                                }} 
                            />
                            <Typography 
                                sx={{ 
                                    fontSize: RankUsernameResponsiveFontSize1, 
                                    fontWeight: "500" 
                                }}
                            >
                                {user.username}
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mr: 1 }}>
                            <FavoriteIcon 
                                sx={{ 
                                    color: "red", 
                                    fontSize: { md: "18px", sm: "16px", xs: "14px" } 
                                }} 
                            />
                            <Typography 
                                sx={{ 
                                    fontWeight: "bold", 
                                    fontSize: RankLikeCountResponsiveFontSize1
                                }}
                            >
                                {user.likeCountThisWeek}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default RankListBox;
