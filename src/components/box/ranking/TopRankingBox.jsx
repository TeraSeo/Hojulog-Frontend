import { Box, Avatar, Typography } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star"; 
import { useNavigate } from "react-router-dom";

const TopRankingBox = ({ topRanks=[] }) => {
    const navigate = useNavigate();

    return (
        <Box 
            sx={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "flex-end", 
                gap: { md: "35px", sm: "25px", xs: "15px" },
                mt: { md: 3, sm: 2, xs: 1 },
                mb: { md: 5, sm: 3, xs: 1 },
            }}
        > 
            <Box 
                sx={{ 
                    textAlign: "center", 
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    padding: { md: "22px", sm: "18px", xs: "14px" },
                    boxShadow: "0 6px 15px rgba(192,192,192,0.3)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                    paddingTop: { md: "50px", sm: "40px", xs: "30px" }, 
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                onClick={() => navigate(`/otherpage/${topRanks[1].userId}`)}
            >
                <Typography sx={{ fontWeight: "bold", fontSize: { md: "24px", sm: "22px", xs: "20px" }, color: "silver" }}>
                    🥈
                </Typography>
                <Avatar
                    src={topRanks[1]?.profileUrl || ""}
                    sx={{ 
                        width: { md: "100px", sm: "80px", xs: "60px" }, 
                        height: { md: "100px", sm: "80px", xs: "60px" }, 
                    }}
                />
                <Typography sx={{ fontWeight: "500", mt: 1, fontSize: { md: "14px", sm: "12px", xs: "10px" } }}>
                    {topRanks[1].username}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 1 }}>
                    <FavoriteIcon sx={{ color: "red", fontSize: { md: "16px", sm: "14px", xs: "12px" }, mr: 0.5 }} />
                    <Typography sx={{ fontWeight: "bold", fontSize: { md: "14px", sm: "12px", xs: "10px" } }}>
                        {topRanks[1].likeCountThisWeek}
                    </Typography>
                </Box>
            </Box>

            <Box 
                sx={{ 
                    textAlign: "center", 
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    padding: { md: "25px", sm: "21px", xs: "17px" },
                    boxShadow: "0 8px 20px rgba(255,215,0,0.5)",
                    transform: "scale(1.1)", 
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.15)" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                onClick={() => navigate(`/otherpage/${topRanks[0].userId}`)}
            >
                <StarIcon 
                    sx={{ 
                        color: "gold", 
                        fontSize: { md: "34px", sm: "30px", xs: "26px" }, 
                        position: "absolute", 
                        top: "-20px", 
                        left: "50%", 
                        transform: "translateX(-50%)" 
                    }} 
                />
                <Typography sx={{ fontWeight: "bold", fontSize: { md: "28px", sm: "24px", xs: "22px" }, color: "gold" }}>
                    🥇
                </Typography>
                <Avatar
                    src={topRanks[0].profileUrl}
                    sx={{ 
                        width: { md: "110px", sm: "90px", xs: "70px" }, 
                        height: { md: "110px", sm: "90px", xs: "70px" }, 
                    }}
                />
                <Typography sx={{ fontWeight: "500", mt: 1, fontSize: { md: "15px", sm: "13px", xs: "11px" } }}>
                    {topRanks[0].username}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 1 }}>
                    <FavoriteIcon sx={{ color: "red", fontSize: { md: "17px", sm: "15px", xs: "13px" }, mr: 0.5 }} />
                    <Typography sx={{ fontWeight: "bold", fontSize: { md: "15px", sm: "13px", xs: "11px" } }}>
                        {topRanks[0].likeCountThisWeek}
                    </Typography>
                </Box>
            </Box>

            <Box 
                sx={{ 
                    textAlign: "center", 
                    backdropFilter: "blur(8px)",
                    borderRadius: "20px",
                    padding: { md: "22px", sm: "18px", xs: "14px" },
                    boxShadow: "0 6px 15px rgba(205,127,50,0.3)",
                    transition: "transform 0.3s",
                    paddingTop: { md: "50px", sm: "40px", xs: "30px" }, 
                    "&:hover": { transform: "scale(1.05)" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                onClick={() => navigate(`/otherpage/${topRanks[2].userId}`)}
            >
                <Typography sx={{ fontWeight: "bold", fontSize: { md: "24px", sm: "22px", xs: "20px" }, color: "#cd7f32" }}>
                    🥉
                </Typography>
                <Avatar
                    src={topRanks[2].profileUrl}
                    sx={{ 
                        width: { md: "100px", sm: "80px", xs: "60px" }, 
                        height: { md: "100px", sm: "80px", xs: "60px" }, 
                    }}
                />
                <Typography sx={{ fontWeight: "500", mt: 1, fontSize: { md: "14px", sm: "12px", xs: "10px" } }}>
                    {topRanks[2].username}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 1 }}>
                    <FavoriteIcon sx={{ color: "red", fontSize: { md: "16px", sm: "14px", xs: "12px" }, mr: 0.5 }} />
                    <Typography sx={{ fontWeight: "bold", fontSize: { md: "14px", sm: "12px", xs: "10px" } }}>
                        {topRanks[2].likeCountThisWeek}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TopRankingBox;
