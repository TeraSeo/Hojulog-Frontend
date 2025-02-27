import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import React from "react";

const PinDialog = ({ openPinDialog, handleCancelPin, handleConfirmPin }) => {
    return <Dialog open={openPinDialog} onClose={handleCancelPin}>
        <DialogTitle>게시물 상단 고정</DialogTitle>
        <DialogContent>
            <DialogContentText>
                게시물을 상단에 고정하시겠습니까? <br />
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                    ⚠️ 50 로그가 소모됩니다.
                </Typography>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCancelPin}>취소</Button>
            <Button onClick={handleConfirmPin} variant="contained" color="primary">
                고정하기
            </Button>
        </DialogActions>
    </Dialog>;
}

export default PinDialog;