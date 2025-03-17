import React from "react";
import { Dialog, DialogTitle, DialogContent, CircularProgress, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, LinearProgress, useMediaQuery } from "@mui/material";

const RankingDialog = ({ candidateDtoList, loading, onClose }) => {
    const isSmallScreen = useMediaQuery("(max-width: 600px)");
    const isMediumScreen = useMediaQuery("(max-width: 900px)");

    const sortedCandidates = [...candidateDtoList].sort((a, b) => b.victoryCount - a.victoryCount);
    const totalGames = sortedCandidates.reduce((sum, candidate) => sum + candidate.victoryCount, 0);

    return (
        <Dialog open onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle
                sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: isSmallScreen ? "16px" : "20px", // Adjust title size
                    padding: isSmallScreen ? "10px" : "16px"
                }}
            >
                World Cup Rankings
            </DialogTitle>
            <DialogContent>
                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box sx={{ mt: 2, maxWidth: "100%", mx: "auto", px: isSmallScreen ? 1 : 2 }}>
                        <TableContainer>
                            <Table size={isSmallScreen ? "small" : "medium"}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", fontWeight: "bold" }}>순위</TableCell>
                                        <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", fontWeight: "bold" }}>이미지</TableCell>
                                        <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", fontWeight: "bold" }}>이름</TableCell>
                                        <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px", fontWeight: "bold" }}>
                                            우승비율 <br /> (우승 횟수 / 전체 게임수)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sortedCandidates.length > 0 ? (
                                        sortedCandidates.map((candidate, index) => {
                                            const winRate = totalGames > 0 ? ((candidate.victoryCount / totalGames) * 100).toFixed(2) : "0.00";
                                            return (
                                                <TableRow key={candidate.id}>
                                                    <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
                                                        {index + 1}
                                                    </TableCell>
                                                    <TableCell align="center" sx={{ py: isSmallScreen ? 0.5 : 1 }}>
                                                        <img 
                                                            src={candidate.imageUrl} 
                                                            alt={candidate.title} 
                                                            width={isSmallScreen ? 40 : isMediumScreen ? 60 : 80} 
                                                            height={isSmallScreen ? 40 : isMediumScreen ? 60 : 80} 
                                                            style={{ borderRadius: 8 }} 
                                                        />
                                                    </TableCell>
                                                    <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
                                                        {candidate.title}
                                                    </TableCell>
                                                    <TableCell align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
                                                        <Typography sx={{ fontSize: isSmallScreen ? "12px" : "14px" }}>{winRate}%</Typography>
                                                        <LinearProgress 
                                                            variant="determinate" 
                                                            value={totalGames > 0 ? (candidate.victoryCount / totalGames) * 100 : 0} 
                                                            sx={{ 
                                                                width: isSmallScreen ? "50%" : "80%", 
                                                                mx: "auto", 
                                                                height: isSmallScreen ? 4 : 6, 
                                                                backgroundColor: "#f0f0f0" 
                                                            }}
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={4} align="center" sx={{ fontSize: isSmallScreen ? "12px" : "14px" }}>
                                                No ranking data available.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default RankingDialog;
