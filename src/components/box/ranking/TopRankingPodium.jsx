import { Box, Avatar, Typography } from "@mui/material";
import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; 
import FavoriteIcon from "@mui/icons-material/Favorite"; 
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"; 
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; 

const rankColors = {
    1: { color: "#FFD700", label: "🥇" }, 
    2: { color: "#C0C0C0", label: "🥈" }, 
    3: { color: "#CD7F32", label: "🥉" }, 
};

const TopRankingPodium = ({ users }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" gap={4} mt={4}>
            {users.map((user, index) => {
                const rank = index + 1;
                return (
                    <Box
                        key={user.username}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        textAlign="center"
                        position="relative"
                    >
                        {/* Rank Number with Arrow Indicator */}
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6" fontWeight="bold">
                                {rank}
                            </Typography>
                            {rank === 1 ? (
                                <EmojiEventsIcon sx={{ color: "#FFD700", ml: 0.5 }} />
                            ) : rank === 2 ? (
                                <ArrowDropUpIcon sx={{ color: "green", ml: 0.5 }} />
                            ) : (
                                <ArrowDropDownIcon sx={{ color: "red", ml: 0.5 }} />
                            )}
                        </Box>

                        {/* Profile Avatar with Crown for 1st Place */}
                        <Box position="relative">
                            {rank === 1 && (
                                <EmojiEventsIcon
                                    sx={{
                                        position: "absolute",
                                        top: -15,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        color: "#FFD700",
                                        fontSize: 30,
                                    }}
                                />
                            )}
                            <Avatar
                                src={user.userProfileUrl}
                                sx={{
                                    width: rank === 1 ? 90 : 75,
                                    height: rank === 1 ? 90 : 75,
                                    border: rank === 1 ? "4px solid #FFD700" : "2px solid #ddd",
                                    mb: 1,
                                }}
                            />
                        </Box>

                        {/* Username */}
                        <Typography variant="subtitle1" fontWeight="bold">
                            {user.username}
                        </Typography>

                        {/* Handle (username ID) */}
                        <Typography variant="body2" color="textSecondary">
                            @{user.handle}
                        </Typography>

                        {/* Like Count with Heart Icon */}
                        <Box display="flex" alignItems="center">
                            <FavoriteIcon sx={{ color: "red", fontSize: 18, mr: 0.5 }} />
                            <Typography variant="body2" fontWeight="bold">
                                {user.likeCounts}
                            </Typography>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};

export default TopRankingPodium;
