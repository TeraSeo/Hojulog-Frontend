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
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "400px",
            width: "90%",
            pointerEvents: "auto", 
            textAlign: "center",
            padding: "16px",
        },
        }}
    >
        <DialogTitle sx={{ fontWeight: "bold" }}>
        크레딧을 이용하시겠습니까?
        </DialogTitle>
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button onClick={handleUseCredit} variant="contained" color="primary">
            예 (크레딧 사용)
        </Button>
        <Button onClick={handleDenyAccess} variant="outlined" color="secondary">
            아니오 (나가기)
        </Button>
        </DialogActions>
    </Dialog>
}

export default SecretPostDialog;