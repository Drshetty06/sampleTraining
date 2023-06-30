import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import SideDrawerComponent from './components/SideDrawerComponent/SideDrawerComponent';
import LoginForm from './components/LoginForm/LoginForm';
import Users from './container/UserContainer/UserContainer';
import HomePage from './container/HomePage/HomePage';
import BatchProcess from './container/BatchProcess/BatchProcess';
import CreateRole from './container/CreateRole/CreateRole';
import './App.css';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  console.log(isAuthenticated);

  const ProtectedRoute = ({ element: Component, ...props }) => {
    return isAuthenticated ? <Component {...props} /> : <Navigate to="/" replace={true} />;
  };

  return (
    <div className="app-container">
      {isAuthenticated && (
        <>
          <HeaderComponent />
          <SideDrawerComponent />
        </>
      )}
      <div className="content-container">
        <div className="main-content">
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path="/Users" element={<ProtectedRoute element={Users} />} />
                <Route path="/HomePage" element={<ProtectedRoute element={HomePage} />} />
                <Route path="/BatchProcess" element={<ProtectedRoute element={BatchProcess} />} />
                <Route path="/CreateRole" element={<ProtectedRoute element={CreateRole} />} />
              </>
            ) : (
              <Route path="/" element={<LoginForm />} />
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
