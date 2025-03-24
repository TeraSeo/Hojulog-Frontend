import React from "react";
import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import BaseImage from "../../../../assets/images/alog.JPEG";

const RoundBox = ({ candidate1, candidate2, onSelectWinner, selectedWinner, losingCandidate }) => {
    const isSmallScreen = useMediaQuery("(max-width:600px)"); // 600px 이하일 때 세로 배치

    return (
        <Box sx={{ backgroundColor: "#f4f4f4", p: 3, borderRadius: 2, position: "relative" }}>
            <Grid 
                container 
                spacing={2} 
                justifyContent="center" 
                alignItems="center" 
                direction={isSmallScreen ? "column" : "row"} // 반응형 적용
            >
                {/* Candidate 1 */}
                <Grid item xs={isSmallScreen ? 12 : 5.5}>
                    <motion.div
                        initial={{ x: 0, opacity: 1 }}
                        animate={
                            selectedWinner === candidate1
                                ? { scale: 1.2 }
                                : losingCandidate === candidate1
                                ? { x: ["0%", "50%", "0%"], opacity: [1, 0.8, 0.5] }
                                : {}
                        }
                        transition={{ duration: 1 }}
                    >
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                p: 0,
                                backgroundColor: "transparent",
                                "&:hover": { backgroundColor: "transparent" },
                            }}
                            onClick={() => onSelectWinner(candidate1)}
                        >
                            <Box sx={{ position: "relative", width: "100%" }}>
                                <img
                                    src={candidate1.imageUrl || BaseImage}
                                    alt={candidate1.title}
                                    style={{ width: "100%", height: "auto", borderRadius: 8 }}
                                />
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        bottom: 10,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        color: "white",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        backgroundColor: "rgba(0,0,0,0.7)",
                                        p: 1,
                                        borderRadius: 2,
                                    }}
                                >
                                    {candidate1.title}
                                </Typography>
                            </Box>
                        </Button>
                    </motion.div>
                </Grid>

                {/* VS Box */}
                <Grid item xs={isSmallScreen ? 12 : 1} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography
                        sx={{
                            fontSize: "32px",
                            fontWeight: "bold",
                            color: "#FF8C00",
                            textShadow: "2px 2px 2px rgba(0,0,0,0.6)",
                            textAlign: "center",
                            whiteSpace: isSmallScreen ? "pre-line" : "nowrap", // 줄바꿈
                        }}
                    >
                        {isSmallScreen ? "VS" : "VS"}
                    </Typography>
                </Grid>

                {/* Candidate 2 */}
                <Grid item xs={isSmallScreen ? 12 : 5.5}>
                    <motion.div
                        initial={{ x: 0, opacity: 1 }}
                        animate={
                            selectedWinner === candidate2
                                ? { scale: 1.2 }
                                : losingCandidate === candidate2
                                ? { x: ["0%", "-50%", "0%"], opacity: [1, 0.8, 0.5] }
                                : {}
                        }
                        transition={{ duration: 1 }}
                    >
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                p: 0,
                                backgroundColor: "transparent",
                                "&:hover": { backgroundColor: "transparent" },
                            }}
                            onClick={() => onSelectWinner(candidate2)}
                        >
                            <Box sx={{ position: "relative", width: "100%" }}>
                                <img
                                    src={candidate2.imageUrl || BaseImage}
                                    alt={candidate2.title}
                                    style={{ width: "100%", height: "auto", borderRadius: 8 }}
                                />
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        bottom: 10,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        color: "white",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        backgroundColor: "rgba(0,0,0,0.7)",
                                        p: 1,
                                        borderRadius: 2,
                                    }}
                                >
                                    {candidate2.title}
                                </Typography>
                            </Box>
                        </Button>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RoundBox;
