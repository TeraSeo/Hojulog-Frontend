import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import RegisterSuccededPage from './pages/auth/RegisterSuccededPage';
import OtpPage from './pages/auth/OtpPage';
import Oauth2RedirectPage from './pages/auth/Oauth2RedirectPage';
import HomePage from './pages/home/HomePage';
import ProtectedRoute from './ProtectedRoute';
import Layout from './components/layout/Layout';
import SelectCategoryPage from './pages/post/SelectCategoryPage';
import { categories } from './constant/Categories';
import LaunchSharePropertyPage from './pages/post/property/LaunchSharePropertyPage';
import LaunchRentPropertyPage from './pages/post/property/LaunchRentPropertyPage';
import LaunchTransactionPropertyPage from './pages/post/property/LaunchTransactionPropertyPage';
import LaunchJobSeekingPage from './pages/post/job/LaunchJobSeekingPage';
import LaunchRecruitmentPage from './pages/post/job/LaunchRecruitmentPage';
import LaunchTutoringPage from './pages/post/job/LaunchTutoringPage';
import LaunchCarTransactionPage from './pages/post/transaction/LaunchCarTransactionPage';
import LaunchEtcTransactionPage from './pages/post/transaction/LaunchEtcTransactionPage';
import LaunchNecessitiesTransactionPage from './pages/post/transaction/LaunchNecessitiesTransactionPage';
import LaunchProductRentTransactionPage from './pages/post/transaction/LaunchProductRentTransactionPage';
import LaunchHobbyPage from './pages/post/society/LaunchHobbyPage';
import LaunchFriendshipPage from './pages/post/society/LaunchFriendshipPage';
import LaunchShareInfoPage from './pages/post/society/LaunchShareInfoPage';
import LaunchCoursePage from './pages/post/travel/LaunchCoursePage';
import LaunchTravelPage from './pages/post/travel/LaunchTravelPage';
import LaunchRestaurantPage from './pages/post/travel/LaunchRestaurantPage';
import LaunchSchoolPage from './pages/post/study/LaunchSchoolPage';
import WholePropertyPostPage from './pages/post/property/WholePropertyPostPage';
import WholeJobPostPage from './pages/post/job/WholeJobPostPage';
import WholeTransactionPostPage from './pages/post/transaction/WholeTransactionPostPage';
import WholeSocietyPostPage from './pages/post/society/WholeSocietyPostPage';
import WholeTravelPostPage from './pages/post/travel/WholeTravelPostPage';
import WholeStudyPostPage from './pages/post/study/WholeStudyPostPage';
import LaunchJobReviewPage from './pages/post/study/LaunchJobReviewPage';
import LaunchLanguageStudyPage from './pages/post/study/LaunchLanguageStudyPage';
import LaunchWorkingHolidayPage from './pages/post/study/LaunchWorkingHolidayPage';
import PropertyPostDetailPage from './pages/post/property/PropertyPostDetailPage';
import JobPostDetailPage from './pages/post/job/JobPostDetailPage';
import TransactionPostDetailPage from './pages/post/transaction/TransactionPostDetailPage';
import SocietyPostDetailPage from './pages/post/society/SocietyPostDetailPage';
import TravelPostDetailedPage from './pages/post/travel/TravelPostDetailedPage';
import StudyPostDetailPage from './pages/post/study/StudyPostDetailPage';

const normalize = (str) => {
  if (str === "레스토랑(카페,펍)") {
    return "레스토랑";
  }
  return str.toLowerCase().replace(/\s+/g, '-');
};

const normalizedCategories = Object.keys(categories).reduce((acc, category) => {
  acc[normalize(category)] = categories[category].map((subCategory) => normalize(subCategory));
  return acc;
}, {});

const validateCategory = (category, subCategory) => {
  return normalizedCategories[category]?.includes(subCategory);
};

const RouteValidator = ({ category, componentMap }) => {
  const { subCategory } = useParams();
  const normalizedCategory = normalize(category);
  const normalizedSubCategory = normalize(subCategory);

  if (!validateCategory(normalizedCategory, normalizedSubCategory)) {
    return <div>Page not found</div>;
  }

  const Component = componentMap[normalizedCategory]?.[normalizedSubCategory];
  if (!Component) {
    return <div>Page not found</div>;
  }

  return <Component />;
};

function App() {
  const generateDynamicRoutes = () => {
    return Object.entries(categories).flatMap(([category, subCategories]) =>
      subCategories.map((subCategory) => (
        <Route
          key={`launch-${normalize(category)}-${normalize(subCategory)}`}
          path={`launch/${normalize(category)}/:subCategory`}
          element={
            <RouteValidator
              category={category}
              componentMap={{
                부동산: {
                  쉐어: LaunchSharePropertyPage,
                  렌트: LaunchRentPropertyPage,
                  매매: LaunchTransactionPropertyPage,
                },
                구인구직: {
                  구인: LaunchRecruitmentPage,
                  구직: LaunchJobSeekingPage,
                  과외: LaunchTutoringPage,
                },
                사고팔기: {
                  자동차: LaunchCarTransactionPage,
                  생활용품: LaunchNecessitiesTransactionPage,
                  기타: LaunchEtcTransactionPage,
                  대여: LaunchProductRentTransactionPage
                },
                생활: {
                  동호회: LaunchHobbyPage,
                  친목: LaunchFriendshipPage,
                  라이프스타일: LaunchShareInfoPage
                },
                여행: {
                  코스: LaunchCoursePage,
                  여행지: LaunchTravelPage,
                  레스토랑: LaunchRestaurantPage
                },
                유학: {
                  학교후기: LaunchSchoolPage,
                  워홀후기: LaunchWorkingHolidayPage,
                  어학연수후기: LaunchLanguageStudyPage,
                  취업후기: LaunchJobReviewPage
                }
              }}
            />
          }
        />
      ))
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="register/succeeded" element={<RegisterSuccededPage />} />
          <Route path="oauth2/redirect" element={<Oauth2RedirectPage />} />
          <Route
            path="otp"
            element={
              <ProtectedRoute requiresAuth>
                <OtpPage />
              </ProtectedRoute>
            }
          />

          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />

            <Route path="realestate" element={<WholePropertyPostPage />} />
            <Route path="jobs" element={<WholeJobPostPage />} />
            <Route path="marketplace" element={<WholeTransactionPostPage />} />
            <Route path="community" element={<WholeSocietyPostPage />} />
            <Route path="travel" element={<WholeTravelPostPage />} />
            <Route path="studyabroad" element={<WholeStudyPostPage />} />

            <Route path="launch" element={<SelectCategoryPage />} />

            {generateDynamicRoutes()}

            <Route path="post/property/detail/:postId" element={<PropertyPostDetailPage />} />
            <Route path="post/job/detail/:postId" element={<JobPostDetailPage />} />
            <Route path="post/transaction/detail/:postId" element={<TransactionPostDetailPage />} />
            <Route path="post/society/detail/:postId" element={<SocietyPostDetailPage />} />
            <Route path="post/travel/detail/:postId" element={<TravelPostDetailedPage />} />
            <Route path="post/study/detail/:postId" element={<StudyPostDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;