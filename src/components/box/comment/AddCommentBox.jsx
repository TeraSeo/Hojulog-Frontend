import React from "react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const AddCommentBox = ({ comment, setComment, handleCommentSubmit }) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginTop: 2,
      }}
    >
      <Typography variant="h7" sx={{ fontWeight: "bold" }}>
        댓글 쓰기
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

export default AddCommentBox;
