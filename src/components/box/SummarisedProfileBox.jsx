import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Link, Divider } from "@mui/material";
import { getSpecificSummarisedUser } from "../../service/UserService";

const SummarisedProfileBox = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const userData = await getSpecificSummarisedUser(userId);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <Typography variant="body1">Loading user data...</Typography>;
  }

  if (!user) {
    return <Typography variant="body1">User data not available.</Typography>;
  }

  const profilePicture = user.profilePicture || "";

  const getTruncatedDescription = (description) => {
    if (!description || description.length <= 150) {
      return description || "No description provided";
    }
    return (
      <>
        {description.slice(0, 150)}...{" "}
        <Link
          href={`/profile/${userId}`}
          underline="hover"
          sx={{ fontSize: "12px", color: "#007bff" }}
        >
          visit profile
        </Link>
      </>
    );
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          paddingBottom: 1,
          paddingX: 2,
          paddingY: 1,
        }}
      >
        Publisher
      </Typography>

      <Box
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: 3,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <Avatar
            src={profilePicture}
            alt={user.username || "User"}
            sx={{
              width: 48,
              height: 48,
            }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#333",
              }}
            >
              {user.username || "Unknown User"}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              User Profile
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#444",
              marginBottom: 0.5,
            }}
          >
            Email
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#666",
            }}
          >
            {user.email || "No email provided"}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              color: "#444",
              marginBottom: 0.5,
            }}
          >
            Description
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#666",
              lineHeight: 1.5,
            }}
          >
            {getTruncatedDescription(user.description)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SummarisedProfileBox;
