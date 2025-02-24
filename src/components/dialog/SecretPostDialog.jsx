import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";

const SecretPostDialog = ({ dialogOpen, handleUseCredit, handleDenyAccess }) => {
    return <Dialog
        open={dialogOpen}
        disableEscapeKeyDown
        disableScrollLock 
        sx={{
        pointerEvents: "none", 
        }}
        PaperProps={{
        style: {
            pointerEvents: "auto", 
            textAlign: "center",
            padding: "30px",
        },
        }}
    >
        <DialogTitle sx={{ fontWeight: "bold" }}>
        비공개글을 보시겠습니까?
        </DialogTitle>
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button onClick={handleUseCredit} variant="contained" color="primary">
            예 (10로그 사용)
        </Button>
        <Button onClick={handleDenyAccess} variant="outlined" color="secondary">
            아니오 (나가기)
        </Button>
        </DialogActions>
    </Dialog>
}

export default SecretPostDialog;