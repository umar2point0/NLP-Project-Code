import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Homepage/Navbar';
import HeroSection from './components/Homepage/HeroSection';
import StateSection from './components/Homepage/StateSection';
import FeaturesSection from './components/Homepage/FeaturesSection';
import FeedbackSection from './components/Homepage/FeedbackSection';
import Footer from './components/Homepage/Footer';
import AuthContainer from './components/Auth/AuthContainer';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Authentication routes */}
          <Route 
            path="/Authentication/*" 
            element={
              !isAuthenticated ? (
                <AuthContainer setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          
          {/* Main application routes - protected */}
          <Route 
            path="/*" 
            element={
              isAuthenticated ? (
                <>
                  <Navbar setIsAuthenticated={setIsAuthenticated} />
                  <HeroSection />
                  <StateSection />
                  <FeaturesSection />
                  <FeedbackSection />
                  <Footer />
                </>
              ) : (
                <Navigate to="/Authentication" replace />
              )
            } 
          />
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to={isAuthenticated ? "/" : "/Authentication"} replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;