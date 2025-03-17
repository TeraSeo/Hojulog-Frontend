import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, LinearProgress, useMediaQuery } from "@mui/material";
import React from "react";

const WorldCupRankingHistoryBox = ({ candidateDtoList, winnerId }) => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");

    const updatedCandidates = candidateDtoList.map(candidate => ({
        ...candidate,
        victoryCount: candidate.id === winnerId ? candidate.victoryCount + 1 : candidate.victoryCount
    }));

    const sortedCandidates = updatedCandidates.sort((a, b) => b.victoryCount - a.victoryCount);

    const totalGames = sortedCandidates.reduce((sum, candidate) => sum + candidate.victoryCount, 0);

    return (
        <Box sx={{ mt: 2, maxWidth: isSmallScreen ? "100%" : 800, mx: "auto", px: isSmallScreen ? 1 : 2 }}>
            <TableContainer>
                <Table size={isSmallScreen ? "small" : "medium"}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", py: isSmallScreen ? 0.5 : 1 }}>순위</TableCell>
                            <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", py: isSmallScreen ? 0.5 : 1 }}>이미지</TableCell>
                            <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", py: isSmallScreen ? 0.5 : 1 }}>이름</TableCell>
                            <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", py: isSmallScreen ? 0.5 : 1 }}>
                                우승비율 <br /> (우승 횟수 / 전체 게임수)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedCandidates.map((candidate, index) => {
                            const winRate = totalGames > 0 ? ((candidate.victoryCount / totalGames) * 100).toFixed(2) : "0.00";
                            return (
                                <TableRow key={candidate.id}>
                                    <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", py: isSmallScreen ? 0.5 : 1 }}>
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center" sx={{ py: isSmallScreen ? 0.5 : 1 }}>
                                        <img 
                                            src={candidate.imageUrl} 
                                            alt={candidate.title} 
                                            width={isSmallScreen ? 50 : 80} 
                                            height={isSmallScreen ? 50 : 80} 
                                            style={{ borderRadius: 8 }} 
                                        />
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", py: isSmallScreen ? 0.5 : 1 }}>
                                        {candidate.title}
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", py: isSmallScreen ? 0.5 : 1 }}>
                                        <Typography sx={{ fontSize: isSmallScreen ? "12px" : "14px" }}>{winRate}%</Typography>
                                        <LinearProgress 
                                            variant="determinate" 
                                            value={totalGames > 0 ? (candidate.victoryCount / totalGames) * 100 : 0} 
                                            sx={{ 
                                                width: isSmallScreen ? "60%" : "80%", 
                                                mx: "auto", 
                                                height: isSmallScreen ? 5 : 8, 
                                                backgroundColor: "#f0f0f0" 
                                            }}
                                        />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default WorldCupRankingHistoryBox;
