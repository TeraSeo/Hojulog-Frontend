import { Box, IconButton } from "@mui/material";
import React from "react";
import CreatedAtText from "../../texts/CreatedAtText";
import SummarizedOwnPostTitleText from "../../texts/SummarizedOwnPostTitleText";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PostEditButtonResponsiveSize1, PostRemoveButtonResponsiveSize1 } from "../../../constant/ComponentSizeResponsive";
import { PostEditIconResponsiveSize1, PostRemoveIconResponsiveSize1 } from "../../../constant/IconSizeResponsive";
import { useNavigate } from "react-router-dom";
import { deletePostById } from "../../../service/PostService";

const CommonOwnSummarizedArticleBoxByPost = ({ post }) => {
    const navigate = useNavigate();

    const handleDelete = async (postId) => {
        if (window.confirm("게시물을 삭제하시겠습니까?")) {
            const isDeleted = await deletePostById(postId);
            if (isDeleted) {
                window.location.reload();
            }
        }
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
                            <SummarizedOwnPostTitleText title={post.title} postId={post.postId} category={"게시글"} />
                        </Box>

                        <Box>
                            <CreatedAtText createdAt={post.createdAt} />
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IconButton
                            onClick={() => { navigate(`/update/게시글/${post.postId}`) }}
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

                        <IconButton
                            onClick={() => handleDelete(post.postId)}
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
        </Box>
    );
};

export default CommonOwnSummarizedArticleBoxByPost;