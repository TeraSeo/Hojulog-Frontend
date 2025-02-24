import { Box, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Switch, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../service/AdminService";

const AdminUserEditBox = ({ userData }) => {
    const navigate = useNavigate();
    const [formData, setFormState] = useState({
        log: userData.log,
        likeCountThisWeek: userData.likeCountThisWeek,
        role: userData.role,
        isLocked: userData.isLocked
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formData, [name]: value });
    };

    const handleSwitchChange = (e) => {
        setFormState({ ...formData, isLocked: e.target.checked });
    };

    const handleSave = async () => {
        const { log, likeCountThisWeek, role } = formData;
        if (log === "" || !role || likeCountThisWeek === "") {
            alert("빈칸을 모두 채워주세요");
            return;
        }

        try {
            const isUpdated = await updateUser(userData.id, formData)
            if (isUpdated) {
                navigate("/admin");
            }
        } catch (error) {
            console.error("Error updating user:", error);
            alert("Failed to update user");
        }
    }
    
    return (
        <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: "8px", maxWidth: "600px", mx: "auto" }}>
            <Typography variant="h5" gutterBottom>유저 수정</Typography>

            <TextField
                label="유저네임"
                value={userData.username}
                fullWidth
                margin="normal"
                InputProps={{ readOnly: true }}
            />

            <TextField
                label="로그"
                name="log"
                type="number"
                value={formData.log}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />

            <TextField
                label="이주의 좋아요 수"
                name="likeCountThisWeek"
                type="number"
                value={formData.likeCountThisWeek}
                fullWidth
                margin="normal"
                InputProps={{ readOnly: true }}

            />

            <FormControl fullWidth margin="normal" required>
                <InputLabel>역할</InputLabel>
                <Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <MenuItem value="USER">USER</MenuItem>
                    <MenuItem value="ADMIN">ADMIN</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography>계정 잠김</Typography>
                <Switch
                    checked={formData.isLocked}
                    onChange={handleSwitchChange}
                />
            </FormControl>

            <Button variant="contained" color="primary" onClick={handleSave}>저장</Button>
        </Box>
    );
};

export default AdminUserEditBox;
