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
import MyProfilePage from './pages/profile/MyProfilePage';
import UpdateProfilePage from './pages/profile/UpdateProfilePage';
import OwnPropertyPostDetailPage from './pages/post/property/OwnPropertyPostDetailPage';
import OwnJobPostDetailPage from './pages/post/job/OwnJobPostDetailPage';
import OwnTransactionPostDetailPage from './pages/post/transaction/OwnTransactionPostDetailPage';
import OwnSocietyPostDetailPage from './pages/post/society/OwnSocietyPostDetailPage';
import OwnTravelPostDetailedPage from './pages/post/travel/OwnTravelPostDetailedPage';
import OwnStudyPostDetailPage from './pages/post/study/OwnStudyPostDetailPage';
import UploadedPostPage from './pages/post/UploadedPostPage';
import LikedPostPage from './pages/post/LikedPostPage';
import WholeRentPostPage from './pages/post/property/WholeRentPostPage';
import WholeSharePostPage from './pages/post/property/WholeSharePostPage';
import WholePropertyTransactionPostPage from './pages/post/property/WholePropertyTransactionPostPage';
import WholeRecruitmentPostPage from './pages/post/job/WholeRecruitmentPostPage';
import WholeJobSeekingPostPage from './pages/post/job/WholeJobSeekingPostPage';
import WholeTutoringPostPage from './pages/post/job/WholeTutoringPostPage';
import WholeCarPostPage from './pages/post/transaction/WholeCarPostPage';
import WholeNecessitiesPostPage from './pages/post/transaction/WholeNecessitiesPostPage';
import WholeTransactionEtcPostPage from './pages/post/transaction/WholeTransactionEtcPostPage';
import WholeClubPostPage from './pages/post/society/WholeClubPostPage';
import WholeLifeStylePostPage from './pages/post/society/WholeLifeStylePostPage';
import WholeFriendshipPostPage from './pages/post/society/WholeFriendshipPostPage';
import WholeRestaurantPostPage from './pages/post/travel/WholeRestaurantPostPage';
import WholePlacePostPage from './pages/post/travel/WholePlacePostPage';
import WholeCoursePostPage from './pages/post/travel/WholeCoursePostPage';
import WholeSchoolPostPage from './pages/post/study/WholeSchoolPostPage';
import WholeWorkingHolidayPostPage from './pages/post/study/WholeWorkingHolidayPostPage';
import WholeLanguageStudyPostPage from './pages/post/study/WholeLanguageStudyPostPage';
import WholeJobReviewPostPage from './pages/post/study/WholeJobReviewPostPage';
import OtherProfilePage from './pages/profile/OtherProfilePage';
import OthersUploadedPostPage from './pages/post/OthersUploadedPostPage';
import CustomerCenterPage from './pages/customer_center/CustomerCenterPage';

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
            <Route path="mypage" element={<MyProfilePage />} />
            <Route path="customer/center" element={<CustomerCenterPage />} />
            <Route path="otherpage/:userId" element={<OtherProfilePage />} />
            <Route path="update/mypage/:userId" element={<UpdateProfilePage />} />

            <Route path="부동산" element={<WholePropertyPostPage />} />
            <Route path="구인구직" element={<WholeJobPostPage />} />
            <Route path="사고팔기" element={<WholeTransactionPostPage />} />
            <Route path="생활" element={<WholeSocietyPostPage />} />
            <Route path="여행" element={<WholeTravelPostPage />} />
            <Route path="유학" element={<WholeStudyPostPage />} />

            <Route path="쉐어" element={<WholeSharePostPage />} />
            <Route path="렌트" element={<WholeRentPostPage />} />
            <Route path="매매" element={<WholePropertyTransactionPostPage />} />

            <Route path="구인" element={<WholeRecruitmentPostPage />} />
            <Route path="구직" element={<WholeJobSeekingPostPage />} />
            <Route path="과외" element={<WholeTutoringPostPage />} />

            <Route path="자동차" element={<WholeCarPostPage />} />
            <Route path="생활용품" element={<WholeNecessitiesPostPage />} />
            <Route path="기타" element={<WholeTransactionEtcPostPage />} />

            <Route path="대여" element={<WholeStudyPostPage />} />
            <Route path="동호회" element={<WholeClubPostPage />} />
            <Route path="라이프스타일" element={<WholeLifeStylePostPage />} />
            <Route path="친목" element={<WholeFriendshipPostPage />} />

            <Route path="레스토랑" element={<WholeRestaurantPostPage />} />
            <Route path="여행지" element={<WholePlacePostPage />} />
            <Route path="코스" element={<WholeCoursePostPage />} />

            <Route path="학교후기" element={<WholeSchoolPostPage />} />
            <Route path="워홀후기" element={<WholeWorkingHolidayPostPage />} />
            <Route path="어학연수후기" element={<WholeLanguageStudyPostPage />} />
            <Route path="취업후기" element={<WholeJobReviewPostPage />} />

            <Route path="launch" element={<SelectCategoryPage />} />
            <Route path="own/posts" element={<UploadedPostPage />} />
            <Route path="others/posts/:userId/:username" element={<OthersUploadedPostPage />} />
            <Route path="liked/posts" element={<LikedPostPage />} />

            {generateDynamicRoutes()}

            <Route path="post/부동산/detail/:postId" element={<PropertyPostDetailPage />} />
            <Route path="post/구인구직/detail/:postId" element={<JobPostDetailPage />} />
            <Route path="post/사고팔기/detail/:postId" element={<TransactionPostDetailPage />} />
            <Route path="post/생활/detail/:postId" element={<SocietyPostDetailPage />} />
            <Route path="post/여행/detail/:postId" element={<TravelPostDetailedPage />} />
            <Route path="post/유학/detail/:postId" element={<StudyPostDetailPage />} />

            <Route path="own/post/부동산/detail/:postId" element={<OwnPropertyPostDetailPage />} />
            <Route path="own/post/구인구직/detail/:postId" element={<OwnJobPostDetailPage />} />
            <Route path="own/post/사고팔기/detail/:postId" element={<OwnTransactionPostDetailPage />} />
            <Route path="own/post/생활/detail/:postId" element={<OwnSocietyPostDetailPage />} />
            <Route path="own/post/여행/detail/:postId" element={<OwnTravelPostDetailedPage />} />
            <Route path="own/post/유학/detail/:postId" element={<OwnStudyPostDetailPage />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;