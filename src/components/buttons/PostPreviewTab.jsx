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
                backgroundColor: '#f1f1f1',
                borderRadius: '8px',
                minHeight: 36,
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontWeight: 500,
                  minWidth: 100,
                  color: '#424242',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  margin: '4px',
                  minHeight: 36,
                },
                '& .Mui-selected': {
                  color: "#001f5b",
                  backgroundColor: '#ffffff',
                },
                '& .MuiTabs-indicator': {
                  display: 'none',
                },
              }}
            >
              <Tab label="Overview" disableRipple />
              <Tab label="Reviews" disableRipple />
              <Tab label="Launches" disableRipple />
            </Tabs>
    );
}

export default PostPreviewTab;