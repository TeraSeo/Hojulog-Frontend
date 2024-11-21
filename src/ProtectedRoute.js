import React from 'react';
import { Navigate } from 'react-router-dom';
import { sendOtp } from './service/UserService';

const ProtectedRoute = ({ children, requiresAuth = false}) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (requiresAuth && isAuthenticated) {
        const email = localStorage.getItem('email');
        sendOtp(email);
        return children;
    }

    return <Navigate to="/login" replace />;
};

export default ProtectedRoute;