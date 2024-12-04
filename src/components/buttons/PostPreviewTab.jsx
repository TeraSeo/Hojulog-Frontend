import React from "react";
import { Tabs, Tab } from "@mui/material";

function PostPreviewTab() {
    return (
        <Tabs 
              value={0}
              aria-label="product navigation tabs"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                marginBottom: 2,
                backgroundColor: '#f9f9f9',
                borderRadius: '12px',
                minHeight: 32,
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 400, 
                    fontSize: '14px', 
                    minWidth: 90, 
                    color: '#6c6c6c', 
                    padding: '4px 8px',
                    borderRadius: '8px',
                    margin: '4px',
                    minHeight: 32,
                    '&:hover': {
                        backgroundColor: '#ffffff', 
                        color: '#000000', 
                    },
                },
                '& .Mui-selected': {
                    color: '#000000 !important', 
                    fontWeight: 500, 
                    backgroundColor: '#ffffff', 
                    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)', 
                },
                '& .MuiTabs-indicator': {
                    display: 'none', 
                },
              }}
            >
              <Tab label="Overview" disableRipple />
              <Tab label="Comments" disableRipple />
              <Tab label="Launches" disableRipple />
              <Tab label="Publisher" disableRipple />
            </Tabs>
    );
}

export default PostPreviewTab;