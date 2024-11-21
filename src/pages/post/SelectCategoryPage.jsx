import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, MenuItem, Button, Paper } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

const categories = {
  Technology: ["AI Application", "Blockchain Application", "IoT (Internet of Things) Solutions", "Cloud Computing Services", "Cybersecurity Tools", "AR/VR Applications", "Data Analytics Platforms", "E-Commerce Solutions", "DevOps Tools", "Machine Learning Models", "Game Development", "SaaS Platforms", "Robotics Solutions", "3D Printing Solutions", "Big Data Applications", "Networking Tools", "Quantum Computing Applications", "Digital Twins", "Etc"],
  Restaurant: ["Italian", "French", "Japanese", "Chinese", "Indian", "Mexican", "American", "Korean", "Thai", "Spanish", "Fast Food", "Desserts", "Café", "Etc"],
  Education: ["Online Courses", "Learning Management System", "Tutoring Services", "Etc"],
  Lifestyle: ["Fitness and Wellness", "Travel and Tourism", "Personal Finance", "Etc"],
  Entertainment: ["Movie", "Drama", "Music", "Concerts and Live Events", "Video Streaming Services", "Stand-up Comedy", "YouTube Channels", "Museums and Exhibits", "Sports Events", "Art Exhibitions", "Etc"],
};

function SelectCategoryPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleConfirm = () => {
    if (selectedCategory && selectedSubcategory) {
      const categoryPath = selectedCategory.toLowerCase().replace(/\s+/g, "-");
      const subcategoryPath = selectedSubcategory.toLowerCase().replace(/\s+/g, "-");
      navigate(`/launch/${categoryPath}/${subcategoryPath}`);
    } else {
      alert("Please select both category and subcategory.");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f9f9f9" }}>
      <Paper elevation={4} sx={{ padding: "30px", borderRadius: "16px", maxWidth: "600px", width: "100%" }}>

        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={2}>
          Launch
        </Typography>
        <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
          Select the category and subcategory that best represents your content.
        </Typography>

        <Box mb={3}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            <CategoryIcon fontSize="small" sx={{ mr: 1 }} />
            Select Category
          </Typography>
          <TextField
            select
            fullWidth
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedSubcategory("");
            }}
          >
            {Object.keys(categories).map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box mb={3}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            <SubdirectoryArrowRightIcon fontSize="small" sx={{ mr: 1 }} />
            Select Subcategory
          </Typography>
          <TextField
            select
            fullWidth
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            disabled={!selectedCategory}
          >
            {(categories[selectedCategory] || []).map((subcategory) => (
              <MenuItem key={subcategory} value={subcategory}>
                {subcategory}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleConfirm}
          disabled={!selectedCategory || !selectedSubcategory}
          sx={{ padding: "10px 0", fontSize: "16px", fontWeight: "bold" }}
        >
          Confirm Selection
        </Button>
      </Paper>
    </Box>
  );
}

export default SelectCategoryPage;