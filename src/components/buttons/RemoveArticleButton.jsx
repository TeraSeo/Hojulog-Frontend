import { Button } from "@mui/material";
import React from "react";
import { ButtonWidthSize1 } from "../../constant/WidthHeightResponsive";
import { ButtonResponsiveFontSize1 } from "../../constant/FontSizeResponsive";
import { deletePostById } from "../../service/PostService";
import { useNavigate } from "react-router-dom";

const RemoveArticleButton = ({ postId }) => {
    const navigate = useNavigate();

    const handleDelete = async (postId) => {
        if (window.confirm("게시물을 삭제하시겠습니까?")) {
            const isDeleted = await deletePostById(postId);
            if (isDeleted) {
                navigate("/own/articles");
            }
        }
    };

    return (
        <Button
            onClick={() => handleDelete(postId)}
            variant="contained"
            color="error"
            sx={{
                width: ButtonWidthSize1,
                fontSize: ButtonResponsiveFontSize1,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                flexShrink: 0
            }}
        >
            삭제
        </Button>
    );
}

export default RemoveArticleButton;