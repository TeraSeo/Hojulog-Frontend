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
import AdminPage from './pages/admin/AdminPage';
import InquiriesPage from './pages/customer_center/InquiriesPage';
import RankingPage from './pages/ranking/RankingPage';
import EditCoursePostPage from './pages/post/travel/EditCoursePostPage';
import EditTravelPage from './pages/post/travel/EditTravelPage';
import EditRestaurantPostPage from './pages/post/travel/EditRestaurantPostPage';
import EditJobReviewPostPage from './pages/post/study/EditJobReviewPostPage';
import EditLanguageStudyPostPage from './pages/post/study/EditLanguageStudyPostPage';
import EditSchoolPostPage from './pages/post/study/EditSchoolPostPage';
import EditWorkingHolidayPostPage from './pages/post/study/EditWorkingHolidayPostPage';
import EditLifeStylePostPage from './pages/post/society/EditLifeStylePostPage';
import EditHobbyPostPage from './pages/post/society/EditHobbyPostPage';
import EditFreindshipPostPage from './pages/post/society/EditFreindshipPostPage';
import EditSharePropertyPage from './pages/post/property/EditSharePropertyPage';
import EditRentPropertyPage from './pages/post/property/EditRentPropertyPage';
import EditTransactionPropertyPage from './pages/post/property/EditTransactionPropertyPage';
import EditRecruitmentPage from './pages/post/job/EditRecruitmentPage';
import EditJobSeekingPage from './pages/post/job/EditJobSeekingPage';
import EditTutoringPage from './pages/post/job/EditTutoringPage';
import EditCarTransactionPage from './pages/post/transaction/EditCarTransactionPage';
import EditNecessitiesTransactionPage from './pages/post/transaction/EditNecessitiesTransactionPage';
import EditEtcTransactionPage from './pages/post/transaction/EditEtcTransactionPage';
import PropertySearchPage from './pages/search/PropertySearchPage';
import JobSearchPage from './pages/search/JobSearchPage';
import SocietySearchPage from './pages/search/SocietySearchPage';
import TransactionSearchPage from './pages/search/TransactionSearchPage';
import TravelSearchPage from './pages/search/TravelSearchPage';
import StudySearchPage from './pages/search/StudySearchPage';
import AdminUserListPage from './pages/admin/AdminUserListPage';
import AdminInquiryListPage from './pages/admin/AdminInquiryListPage';
import AdminInquiryEditPage from './pages/admin/AdminInquiryEditPage';
import AdminUserEditPage from './pages/admin/AdminUserEditPage';
import InquiryDetailPage from './pages/customer_center/InquiryDetailPage';
import RegisterFailedPage from './pages/auth/RegisterFailedPage';
import BoardPage from './pages/board/BoardPage';
import LaunchBoardPage from './pages/board/LaunchBoardPage';
import WholeWorldCupPostPage from './pages/post/type-world-cup/WholeWorldCupPostPage';
import WorldCupDetailPage from './pages/post/type-world-cup/WorldCupDetailPage';
import LaunchPropertyIdealTypeWorldCupPage from './pages/post/type-world-cup/LaunchPropertyIdealTypeWorldCupPage';
import LaunchJobIdealTypeWroldCupPage from './pages/post/type-world-cup/LaunchJobIdealTypeWroldCupPage';
import LaunchSocietyIdealTypeWorldCupPage from './pages/post/type-world-cup/LaunchSocietyIdealTypeWorldCupPage';
import LaunchStudyIdealTypeWorldCupPage from './pages/post/type-world-cup/LaunchStudyIdealTypeWorldCupPage';
import LaunchTransactionIdealTypeWorldCupPage from './pages/post/type-world-cup/LaunchTransactionIdealTypeWorldCupPage';
import LaunchTravelIdealTypeWorldCupPage from './pages/post/type-world-cup/LaunchTravelIdealTypeWorldCupPage';
import LaunchEtcIdealTypeWorldCupPage from './pages/post/type-world-cup/LaunchEtcIdealTypeWorldCupPage';

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
                이상형월드컵: {
                  부동산: LaunchPropertyIdealTypeWorldCupPage,
                  구인구직: LaunchJobIdealTypeWroldCupPage,
                  사고팔기: LaunchTransactionIdealTypeWorldCupPage,
                  생활: LaunchSocietyIdealTypeWorldCupPage,
                  여행: LaunchTravelIdealTypeWorldCupPage,
                  유학: LaunchStudyIdealTypeWorldCupPage,
                  자유: LaunchEtcIdealTypeWorldCupPage,
                },
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
          <Route path="register/failed/" element={<RegisterFailedPage />} />
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
            <Route path="board" element={<BoardPage />} />
            <Route path="launch/board" element={<LaunchBoardPage />} />
            <Route path="admin" element={<AdminPage />} />
            <Route path="admin/userList" element={<AdminUserListPage />} />
            <Route path="admin/inquiryList" element={<AdminInquiryListPage />} />
            <Route path="ranking" element={<RankingPage />} />
            <Route path="customer/center" element={<CustomerCenterPage />} />
            <Route path="otherpage/:userId" element={<OtherProfilePage />} />
            <Route path="update/mypage/:userId" element={<UpdateProfilePage />} />
            <Route path="update/admin/user/:userId" element={<AdminUserEditPage />} />
            <Route path="update/admin/inquiry/:inquiryId" element={<AdminInquiryEditPage />} />

            <Route path="update/여행/여행지/:postId" element={<EditTravelPage />} />
            <Route path="update/여행/코스/:postId" element={<EditCoursePostPage />} />
            <Route path="update/여행/레스토랑/:postId" element={<EditRestaurantPostPage />} />

            <Route path="update/유학/취업후기/:postId" element={<EditJobReviewPostPage />} />
            <Route path="update/유학/어학연수후기/:postId" element={<EditLanguageStudyPostPage />} />
            <Route path="update/유학/학교후기/:postId" element={<EditSchoolPostPage />} />
            <Route path="update/유학/워홀후기/:postId" element={<EditWorkingHolidayPostPage />} />

            <Route path="update/생활/라이프스타일/:postId" element={<EditLifeStylePostPage />} />
            <Route path="update/생활/동호회/:postId" element={<EditHobbyPostPage />} />
            <Route path="update/생활/친목/:postId" element={<EditFreindshipPostPage />} />

            <Route path="update/부동산/쉐어/:postId" element={<EditSharePropertyPage/>} />
            <Route path="update/부동산/렌트/:postId" element={<EditRentPropertyPage />} />
            <Route path="update/부동산/매매/:postId" element={<EditTransactionPropertyPage />} />

            <Route path="update/구인구직/구인/:postId" element={<EditRecruitmentPage/>} />
            <Route path="update/구인구직/구직/:postId" element={<EditJobSeekingPage />} />
            <Route path="update/구인구직/과외/:postId" element={<EditTutoringPage />} />

            <Route path="update/사고팔기/자동차/:postId" element={<EditCarTransactionPage/>} />
            <Route path="update/사고팔기/생활용품/:postId" element={<EditNecessitiesTransactionPage/>} />
            <Route path="update/사고팔기/기타/:postId" element={<EditEtcTransactionPage/>} />
            {/* <Route path="update/사고팔기/대여/:postId" element={<EditProductRentTransactionPage/>} /> */}

            <Route path="search/부동산/:title/:suburb/:subCategory/:keywords" element={<PropertySearchPage/>} />
            <Route path="search/구인구직/:title/:suburb/:subCategory/:keywords" element={<JobSearchPage/>} />
            <Route path="search/사고팔기/:title/:suburb/:subCategory/:keywords" element={<TransactionSearchPage/>} />
            <Route path="search/생활/:title/:suburb/:subCategory/:keywords" element={<SocietySearchPage/>} />
            <Route path="search/여행/:title/:suburb/:subCategory/:keywords" element={<TravelSearchPage/>} />
            <Route path="search/유학/:title/:suburb/:subCategory/:keywords" element={<StudySearchPage/>} />

            <Route path="이상형월드컵" element={<WholeWorldCupPostPage />} />

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
            <Route path="inquiries" element={<InquiriesPage />} />
            <Route path="inquiry/detail/:inquiryId" element={<InquiryDetailPage/>} />

            {generateDynamicRoutes()}

            <Route path="post/이상형월드컵/detail/:postId" element={<WorldCupDetailPage />} />
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