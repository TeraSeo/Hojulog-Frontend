import React, { useState, useEffect } from "react";
import { Paper, Typography, Grid, Box, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import SingleWorldCupForm from "../../../components/forms/post/world-cup/SingleWorldCupForm";
import { primaryColor } from "../../../constant/Color";
import TitleField from "../../../components/textfields/TitleField";
import WorldCupKeyWordField from "../../../components/textfields/WorldCupKeyWorldField";
import { jobKeyWords, propertyKeyWords, societyKeyWords, studyKeyWords, transactionKeyWords, travelKeyWords } from "../../../constant/Keywords";
import { postWorldCup } from "../../../service/PostService";
import CommentAvailabilityField from "../../../components/textfields/CommentAvailabilityField";
import { useNavigate } from "react-router-dom";

const categoryOptions = ["부동산", "구인구직", "사고팔기", "생활", "여행", "유학"];

const categoryKeywords = {
  부동산: propertyKeyWords,
  구인구직: jobKeyWords,
  사고팔기: transactionKeyWords,
  생활: societyKeyWords,
  여행: travelKeyWords,
  유학: studyKeyWords,
};

const LaunchIdealTypeWorldCupPage4 = () => {
  const navigate = useNavigate();
  
  const [groups, setGroups] = useState([
    { title: "", image: null, imageUrl: "" },
    { title: "", image: null, imageUrl: "" },
    { title: "", image: null, imageUrl: "" },
    { title: "", image: null, imageUrl: "" }
  ]);
  const [mainTitle, setMainTitle] = useState("");
  const [isCommentAllowed, setIsCommentAllowed] = useState(true);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [category, setCategory] = useState("부동산");
  const [mainTitleError, setMainTitleError] = useState("이상형 월드컵의 제목을 입력해주세요.");
  const [groupErrors, setGroupErrors] = useState(["각 조의 제목을 입력해주세요.", "각 조의 제목을 입력해주세요.", "각 조의 제목을 입력해주세요.", "각 조의 제목을 입력해주세요."]);
  const [keywordError, setKeywordError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const isMainTitleValid = mainTitle.trim() !== "";
    const areGroupTitlesValid = groups.every((group) => (group?.title ?? "").toString().trim() !== "");
    const areKeywordsValid = selectedKeywords.length <= 12;

    setMainTitleError(isMainTitleValid ? "" : "이상형 월드컵의 제목을 입력해주세요.");
    setGroupErrors(groups.map((group) => ((group?.title ?? "").toString().trim() ? "" : "각 조의 제목을 입력해주세요.")));
    setKeywordError(areKeywordsValid ? "" : "키워드는 최대 12개까지 입력할 수 있습니다.");

    setIsValid(isMainTitleValid && areGroupTitlesValid && areKeywordsValid);
  }, [mainTitle, groups, selectedKeywords]);

  const handleMainTitleChange = (value) => {
    setMainTitle(value);
  };

  const handleIsCommentAllowed = (value) => {
    setIsCommentAllowed(value);
  };

  const handleTitleChange = (index, value) => {
    const updatedGroups = [...groups];
    updatedGroups[index].title = value;
    setGroups(updatedGroups);
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedGroups = [...groups];
      updatedGroups[index].image = file;
      updatedGroups[index].imageUrl = URL.createObjectURL(file);
      setGroups(updatedGroups);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSelectedKeywords([]);
  };

  const handleSubmit = async () => {
    if (!isValid) return;
    setIsLoading(true);

    const userId = localStorage.getItem('userId') || "";
    const worldCupPostDto = {
      worldCupTitle: mainTitle,
      userId: userId,
      isCommentAllowed: isCommentAllowed,
      subCategory: "4강",
      selectedKeywords: selectedKeywords,
      candidateTitleList: groups.map((group) => group.title),
      imageUrlList: groups.map((group) => group.image === null ? "" : "exists"),
    };

    const formData = new FormData();
    formData.append(
      "worldCupPostDto",
      new Blob([JSON.stringify(worldCupPostDto)], { type: "application/json" })
    );

    groups.forEach((group) => {
      if (group.image) {
        formData.append("images", group.image);
      }
    });

    const isCreated = await postWorldCup(formData);
    if (isCreated) {
      navigate("/");
    } else {
      setError("제출에 실패했습니다. 다시 제출 해주세요.");
      setIsLoading(false);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, margin: 4, maxWidth: 800, mx: "auto", backgroundColor: "#f7f9fc" }}
    >
      <Typography variant="h4" gutterBottom align="center" sx={{ color: primaryColor }}>
        이상형 월드컵 (4강) 조 만들기
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ marginBottom: 4 }}>
        제목을 입력하고 각 후보의 제목을 추가하세요. 키워드를 선택하면 검색이 용이합니다.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TitleField value={mainTitle} error={mainTitleError} onChange={handleMainTitleChange} />

        <CommentAvailabilityField value={isCommentAllowed} onChange={handleIsCommentAllowed} />

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>카테고리 선택</InputLabel>
          <Select value={category} onChange={handleCategoryChange}>
            {categoryOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <WorldCupKeyWordField
          selectedKeywords={selectedKeywords}
          error={keywordError}
          onChange={setSelectedKeywords}
          availableKeywords={categoryKeywords[category]}
        />

        <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
          {groups.map((group, index) => (
            <Grid item xs={6} key={index}>
              <SingleWorldCupForm
                index={index}
                data={group}
                onTitleChange={handleTitleChange}
                onImageChange={handleImageUpload}
              />
              {groupErrors[index] && (
                <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                  {groupErrors[index]}
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box textAlign="center" sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!isValid || isLoading}
          sx={{ padding: "10px 20px", fontSize: "16px", fontWeight: "bold" }}
        >
          {isLoading ? "제출중..." : "제출"}
        </Button>
      </Box>

      {error && (
        <Typography color="error" align="center" sx={{ my: 2 }}>
          {error}
        </Typography>
      )}
    </Paper>
  );
};

export default LaunchIdealTypeWorldCupPage4;