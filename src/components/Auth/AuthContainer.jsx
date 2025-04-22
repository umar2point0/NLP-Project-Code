import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import './Auth.css';

const AuthContainer = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [email, setEmail] = useState('');

  const switchToHeroSection = () => setActiveForm('herosection');
  const switchToSignup = () => setActiveForm('signup');
  const switchToLogin = () => setActiveForm('login');
  const switchToForgotPassword = () => setActiveForm('forgot');
  const switchToResetPassword = (email) => {
    setEmail(email);
    setActiveForm('reset');
  };

  return (
    <div className="auth-container">
      {/* Left Side - Slogan */}
      <div className="auth-slogan">
          <div className="slogan-image">
        <img 
          src="/images/learning-platform.png" 
          alt="Modern learning platform with AI technology"
          className="slogan-img"
        />
      </div>

      <div className="slogan-content">
          <h2>Welcome to Our Platform</h2>
          <p>Revolutionizing learning with the "power of voice and Artificial Intelligence."</p>
        </div>
      </div>
      
      {/* Right Side - Forms */}
      <div className="auth-forms">
        {activeForm === 'login' && (
          <LoginForm 
            onSignupClick={switchToSignup} 
            onForgotPasswordClick={switchToForgotPassword}
            onLoginClick={switchToHeroSection}
          />
        )}
        
        {activeForm === 'signup' && (
          <SignupForm onLoginClick={switchToLogin} />
        )}
        
        {activeForm === 'forgot' && (
          <ForgotPassword 
            onBackToLogin={switchToLogin}
            onEmailSubmitted={switchToResetPassword}
          />
        )}
        
        {activeForm === 'reset' && (
          <ResetPassword email={email} onBackToLogin={switchToLogin} />
        )}

        {activeForm === 'herosection' &&(
          <LoginForm onLogin={switchToHeroSection} />
        )}
      </div>
    </div>
  );
};

export default AuthContainer;