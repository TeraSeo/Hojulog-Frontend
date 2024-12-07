import React from "react";
import { Tabs, Tab } from "@mui/material";

function PostTab({ currentTab, setCurrentTab }) {

    const handleTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <Tabs
            value={currentTab}
            onChange={handleTabChange}
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
                    fontSize: {
                        xs: '10px', 
                        sm: '14px', 
                    },
                    minWidth: {
                        xs: 60, 
                        sm: 90, 
                    },
                    padding: {
                        xs: '4px 4px',
                        sm: '4px 8px',
                    },
                    color: '#6c6c6c', 
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

export default PostTab;