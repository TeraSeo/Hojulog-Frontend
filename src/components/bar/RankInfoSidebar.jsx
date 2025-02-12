import { Box, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";

const rankData = [
    { rank: 1, points: 100 },
    { rank: 2, points: 90 },
    { rank: 3, points: 80 },
    { rank: 4, points: 30 },
    { rank: 5, points: 30 },
    { rank: 6, points: 30 },
    { rank: 7, points: 30 },
    { rank: 8, points: 30 },
    { rank: 9, points: 20 },
    { rank: 10, points: 10 },
];

const RankInfoSidebar = () => {
    return (
        <Paper elevation={4} sx={{ padding: 2, backgroundColor: "#ffffff", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
            <Typography sx={{ fontWeight: "bold", textAlign: "center", color: "#333", marginBottom: 2, fontSize: "13px" }}>
                🏆 순위별 로그 지급
            </Typography>
            <List>
                {rankData.map((item) => (
                    <ListItem key={item.rank} sx={{ display: "flex", justifyContent: "space-between", padding: "8px 10px", borderBottom: "1px solid #eee" }}>
                        <Typography sx={{ fontWeight: "bold", color: item.rank <= 3 ? "#D32F2F" : "#444", fontSize: "11px" }}>Top {item.rank}</Typography>
                        <Typography sx={{ fontWeight: "bold", color: item.rank <= 3 ? "#D32F2F" : "#444", fontSize: "11px" }}>{item.points} 로그</Typography>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default RankInfoSidebar;