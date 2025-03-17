import { Box, Grid, Typography, Paper } from "@mui/material";
import React, { useEffect, useRef } from "react";
import noImageAvailable from "../../../../assets/images/no_image_available.jpeg";
import WorldCupRankingHistoryBox from "./WorldCupRankingHistoryBox";
import WorldCupPostCommentsBox from "../../comment/WorldCupPostCommentsBox";
import LikeCountsText from "../../../texts/LikeCountsText";
import CommentsCountsText from "../../../texts/CommentsCountsText";
import ViewCountsText from "../../../texts/ViewCountsText";
import { DetailedPostIconResponsiveSize2 } from "../../../../constant/IconSizeResponsive";
import { PostResponsiveFontSize2 } from "../../../../constant/FontSizeResponsive";
import { updateWorldCupVictory } from "../../../../service/PostService";

const WorldCupWinnerBox = ({ winner, worldCupPostData }) => {
    useEffect(() => {
        updateWorldCupVictory(winner.id);
    }, []);

    const commentBoxRef = useRef(null);
    
    const handleScrollToComments = () => {
        commentBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={5}>
                <Paper 
                    elevation={3} 
                    sx={{ 
                        p: 3, 
                        borderRadius: 3, 
                        backgroundColor: "#fafafa"
                    }}
                >
                    <Typography 
                        variant="h5" 
                        sx={{ fontWeight: "bold", mb: 2, color: "#333", textAlign: "center" }}
                    >
                        🏆 최종 우승 🏆
                    </Typography>

                    <Box sx={{ position: "relative", width: "100%" }}>
                        <img
                            src={winner.imageUrl || noImageAvailable}
                            alt={winner.title}
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
                            {winner.title}
                        </Typography>
                    </Box>

                    <Box sx={{ mt: 5, display: "flex", justifyContent: "end" }}>
                        <LikeCountsText initialLikes={worldCupPostData.likeCounts} initialIsLiked={worldCupPostData.isUserLiked} pl={0} postId={worldCupPostData.postId} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
                        <Box sx={{ cursor: "pointer" }} onClick={handleScrollToComments}>
                            <CommentsCountsText isCommentAllowed={worldCupPostData.isCommentAllowed} commentsCounts={worldCupPostData.commentCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
                        </Box>
                        <ViewCountsText viewCounts={worldCupPostData.viewCounts} width={DetailedPostIconResponsiveSize2} height={DetailedPostIconResponsiveSize2} fontSize={PostResponsiveFontSize2} />
                    </Box>

                    {worldCupPostData.isCommentAllowed && (
                        <Box sx={{ mt: 4 }} ref={commentBoxRef}>
                            <WorldCupPostCommentsBox postId={worldCupPostData.postId} winnerTitle={winner.title} />
                        </Box>
                    )}
                </Paper>
            </Grid>

            <Grid item xs={12} sm={7}>
                <Paper 
                    elevation={3} 
                    sx={{ 
                        p: 3, 
                        borderRadius: 3, 
                        backgroundColor: "#fafafa"
                    }}
                >
                    <Typography 
                        variant="h5" 
                        sx={{ fontWeight: "bold", mb: 2, textAlign: "center", color: "#333" }}
                    >
                        📊 이때까지의 순위 📊
                    </Typography>

                    <WorldCupRankingHistoryBox candidateDtoList={worldCupPostData.candidateDtoList} winnerId={winner.id} />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default WorldCupWinnerBox;
