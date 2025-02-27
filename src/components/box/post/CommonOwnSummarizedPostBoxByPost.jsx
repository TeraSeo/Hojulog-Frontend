import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import CreatedAtText from "../../texts/CreatedAtText";
import SummarizedOwnPostTitleText from "../../texts/SummarizedOwnPostTitleText";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PushPinIcon from "@mui/icons-material/PushPin";
import { PostEditButtonResponsiveSize1, PostRemoveButtonResponsiveSize1 } from "../../../constant/ComponentSizeResponsive";
import { PostEditIconResponsiveSize1, PostRemoveIconResponsiveSize1 } from "../../../constant/IconSizeResponsive";
import { useNavigate } from "react-router-dom";
import { deletePostById, pinPost } from "../../../service/PostService";
import PinDialog from "../../dialog/PinDialog";

const CommonOwnSummarizedPostBoxByPost = ({ post }) => {
    const navigate = useNavigate();

    const [openPinDialog, setOpenPinDialog] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);

    const handleDelete = async (postId) => {
        if (window.confirm("게시물을 삭제하시겠습니까?")) {
            const isDeleted = await deletePostById(postId);
            if (isDeleted) {
                window.location.reload();
            }
        }
    };

    const handlePinClick = (postId) => {
        setSelectedPostId(postId);
        setOpenPinDialog(true);
    };

    const handleConfirmPin = async () => {
        setOpenPinDialog(false);
        setSelectedPostId(null);
        const isPinned = await pinPost(selectedPostId);
        if (isPinned) {
            window.location.reload();
        }
    };

    const handleCancelPin = () => {
        setOpenPinDialog(false);
        setSelectedPostId(null);
    };

    return (
        <Box
            sx={{
                mt: 1.5,
                overflow: "hidden",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                pl: 1.5,
                pr: 2.5,
                py: 2
            }}
        >
            <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flex: 1,
                        overflow: "hidden",
                    }}
                >
                    <Box>
                        <Box sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            <SummarizedOwnPostTitleText title={post.title} postId={post.id} category={post.category} />
                        </Box>

                        <Box>
                            <CreatedAtText createdAt={post.createdAt} />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IconButton
                            onClick={() => handlePinClick(post.id)}
                            sx={{
                                color: post.isPinnedAd ? "#1976d2" : "#555",
                                borderRadius: "8px",
                                width: PostEditButtonResponsiveSize1,
                                height: PostEditButtonResponsiveSize1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "1px solid #ddd",
                                "&:hover": {
                                    backgroundColor: "#f0f0f0"
                                }
                            }}
                        >
                            <PushPinIcon sx={{ fontSize: PostEditIconResponsiveSize1 }} />
                        </IconButton>

                        {/* ✏️ Edit Button */}
                        <IconButton
                            onClick={() => { navigate(`/update/${post.category}/${post.subCategory}/${post.id}`) }}
                            sx={{
                                color: "white",
                                backgroundColor: "#1976d2",
                                "&:hover": { backgroundColor: "#115293" },
                                borderRadius: "8px",
                                width: PostEditButtonResponsiveSize1,
                                height: PostEditButtonResponsiveSize1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <EditIcon sx={{ fontSize: PostEditIconResponsiveSize1 }} />
                        </IconButton>

                        {/* 🗑️ Delete Button */}
                        <IconButton
                            onClick={() => handleDelete(post.id)}
                            sx={{
                                color: "white",
                                backgroundColor: "#d32f2f",
                                "&:hover": { backgroundColor: "#9a0007" },
                                borderRadius: "8px",
                                width: PostRemoveButtonResponsiveSize1,
                                height: PostRemoveButtonResponsiveSize1,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <DeleteIcon sx={{ fontSize: PostRemoveIconResponsiveSize1 }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>

            <PinDialog openPinDialog={openPinDialog} handleCancelPin={handleCancelPin} handleConfirmPin={handleConfirmPin} />
        </Box>
    );
};

export default CommonOwnSummarizedPostBoxByPost;