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
import LaunchRestaurantPage from './pages/post/LaunchRestaurantPage';
import LaunchTechnologyPage from './pages/post/LaunchTechnologyPage';
import LaunchEducationPage from './pages/post/LaunchEducationPage';
import LaunchLifeStylePage from './pages/post/LaunchLifeStylePage';
import LaunchEntertainmentPage from './pages/post/LaunchEntertainmentPage';
import { DynamicDetailedPage } from './constant/Components';

const categories = {
  Technology: ["Mobile Application", "Web Application", "AI Application", "Blockchain Application", "IoT Solutions", "Cloud Computing Services", "Cybersecurity Tools", "AR/VR Applications", "Data Analytics Platforms", "E-Commerce Solutions", "DevOps Tools", "Machine Learning Models", "Game Development", "SaaS Platforms", "Robotics Solutions", "3D Printing Solutions", "Big Data Applications", "Networking Tools", "Quantum Computing Applications", "Digital Twins", "Etc"],
  Restaurant: ["Italian", "French", "Japanese", "Chinese", "Indian", "Mexican", "American", "Korean", "Thai", "Spanish", "Fast Food", "Desserts", "Café", "Etc"],
  Education: ["Online Courses", "Learning Management System", "Tutoring Services", "Etc"],
  Lifestyle: ["Fitness and Wellness", "Travel and Tourism", "Personal Finance", "Etc"],
  Entertainment: ["Movie", "Drama", "Music", "Concerts and Live Events", "Video Streaming Services", "Stand-up Comedy", "YouTube Channels", "Museums and Exhibits", "Sports Events", "Art Exhibitions", "Etc"],
};

const normalize = (str) => str.toLowerCase().replace(/\s+/g, '-');

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
    return (
      <div>Page not found</div>
    );
  }

  const Component = componentMap[category];
  return <Component />;
};

function App() {
  const generateDynamicRoutes = () => {
    return Object.keys(categories).map((category) => (
      <Route
        key={`launch-${category.toLowerCase()}`}
        path={`launch/${normalize(category)}/:subCategory`}
        element={
          <RouteValidator
            category={category}
            componentMap={{
              Technology: LaunchTechnologyPage,
              Restaurant: LaunchRestaurantPage,
              Education: LaunchEducationPage,
              Lifestyle: LaunchLifeStylePage,
              Entertainment: LaunchEntertainmentPage,
            }}
          />
        }
      />
    ));
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
            <Route path="launch" element={<SelectCategoryPage />} />
            <Route path=":category/:formattedTitle/details" element={<DynamicDetailedPage />} />

            {generateDynamicRoutes()}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;