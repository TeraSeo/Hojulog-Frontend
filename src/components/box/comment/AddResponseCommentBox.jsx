import React from "react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

const AddResponseCommentBox = ({ comment, setComment, resonseCommentUsername, handleCommentSubmit, setIsResponseCommentOn, setParentCommentId, setParentCommentUsername }) => {
  const cancelResponseCommet = () => {
    setIsResponseCommentOn(false);
    setParentCommentId(null);
    setParentCommentUsername(null);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginTop: 2,
      }}
    >
      {resonseCommentUsername && (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
                variant="subtitle2"
                sx={{
                    fontWeight: "bold",
                    color: "#666",
                    fontSize: "13px",
                }}
                >
                {`${resonseCommentUsername}님에게 답글쓰기`}
            </Typography>

            <IconButton
                size="small"
                onClick={() => { cancelResponseCommet(); }}
                sx={{
                color: "#666",
                padding: "4px",
                }}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Box>
      )}

      <Typography variant="h7" sx={{ fontWeight: "bold" }}>
        답글 쓰기
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          borderRadius: "24px",
          padding: "6px 12px",
          border: "1px solid #ddd",
        }}
      >
        <InputBase
          placeholder="여기에 댓글을 입력하세요..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{
            flex: 1,
            fontSize: "14px",
            color: "#333",
          }}
        />
        <IconButton
          onClick={handleCommentSubmit}
          sx={{
            backgroundColor: "#fff",
            color: "#555",
            border: "1px solid #ddd",
            borderRadius: "50%",
            padding: "6px",
            marginLeft: "8px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              backgroundColor: "#f9f9f9",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <SendIcon fontSize="small" sx={{ color: "#555" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AddResponseCommentBox;
