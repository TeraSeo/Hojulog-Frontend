import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

function SidebarNavigation({ sections = [], step, setStep }) {
  // Log sections for debugging
  console.log("SidebarNavigation sections:", sections);

  return (
    <List>
      {Array.isArray(sections) &&
        sections.map((section) => (
          <ListItem
            button
            key={section.id}
            onClick={() => setStep(section.id)}
            selected={step === section.id}
            sx={{
              borderRadius: "8px",
              bgcolor: step === section.id ? section.color : "transparent",
              mb: 1,
              "&:hover": { bgcolor: section.color },
            }}
          >
            <ListItemIcon sx={{ color: step === section.id ? "#3A0CA3" : "#666" }}>
              {section.icon}
            </ListItemIcon>
            <ListItemText
              primary={section.label}
              primaryTypographyProps={{
                fontWeight: step === section.id ? "bold" : "normal",
                color: step === section.id ? "#3A0CA3" : "#666",
              }}
            />
          </ListItem>
        ))}
    </List>
  );
}

// Add default props for sections
SidebarNavigation.defaultProps = {
  sections: [],
};

export default SidebarNavigation;