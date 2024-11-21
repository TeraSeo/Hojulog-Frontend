import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, TextField, Box, Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";

function SearchDialog({ open, onClose }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    const handleSearch = () => {
        console.log("Searching for:", searchQuery, selectedCategories, selectedTags);
        onClose();
    };

    const categories = ["Web App", "Mobile App", "E-commerce", "Portfolio"];
    const tags = ["React", "JavaScript", "Beginner", "Open Source", "E-commerce"];

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Advanced Search</DialogTitle>
            <DialogContent>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Search Query"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1">Filter by Categories</Typography>
                    <Grid container spacing={1}>
                        {categories.map((category) => (
                            <Grid item xs={6} key={category}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={selectedCategories.includes(category)}
                                            onChange={(e) => {
                                                const newCategories = e.target.checked
                                                    ? [...selectedCategories, category]
                                                    : selectedCategories.filter((c) => c !== category);
                                                setSelectedCategories(newCategories);
                                            }}
                                        />
                                    }
                                    label={category}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle1">Filter by Tags</Typography>
                    <Grid container spacing={1}>
                        {tags.map((tag) => (
                            <Grid item xs={6} key={tag}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={selectedTags.includes(tag)}
                                            onChange={(e) => {
                                                const newTags = e.target.checked
                                                    ? [...selectedTags, tag]
                                                    : selectedTags.filter((t) => t !== tag);
                                                setSelectedTags(newTags);
                                            }}
                                        />
                                    }
                                    label={tag}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                    <Button onClick={onClose} sx={{ mr: 1 }}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default SearchDialog;
