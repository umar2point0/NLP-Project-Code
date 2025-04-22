import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSignupClick, onForgotPasswordClick, onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
        alert('Please fill in both email and password');
        return;
    }
    try {
        const response = await fetch('../Auth/LoginForm.jsx', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }
         // Store the authentication token (adjust based on your auth system)
        localStorage.setItem('authToken', data.token);
        // Optional: Store user data
        localStorage.setItem('user', JSON.stringify(data.user));
        console.log('Login successful:', data);
        // Redirect to home page
        navigate('../Homepage/HeroSection.jsx');
        
    } catch (error) {
        console.error('Login error:', error);
        alert(error.message || 'An error occurred during login');
    }
};

const handleSocialLogin = async (provider, response) => {
  try {
    console.log(`${provider} login response:`, response);
    
    // Send the token to your backend for verification
    const res = await fetch(`/api/auth/${provider.toLowerCase()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: response.accessToken || response.credential,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || `${provider} login failed`);
    }

    // Store the authentication token
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    console.log(`${provider} login successful`);
    navigate('../HomePage/HeroSection');
    
  } catch (error) {
    console.error(`${provider} login error:`, error);
    alert(error.message || `Error logging in with ${provider}`);
  }
};

  return (
    <div className="form-container">
      <h1>Welcome Back</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-with-icon">
            <FaEnvelope className="input-icons" />
            <input 
              type="email" 
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <div className="input-with-icon">
            <FaLock className="input-icons" />
            <input 
              type="password"
              placeholder='Password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={onForgotPasswordClick} className="links-btn">Forgotten Password?</button>
        </div>
        
        <button onClick={onLoginClick} type="submit" className="submit-btn">Login</button>
      </form>
      
      <div className="social-login">
        <p className="divider">Or continue with</p>
        <div className="social-icons">
          <button 
            className="social-btn google" 
            onClick={() => handleSocialLogin('Google')}
            aria-label="Login with Google"
          >
            <FcGoogle />
          </button>
          <button 
            className="social-btn facebook" 
            onClick={() => handleSocialLogin('Facebook')}
            aria-label="Login with Facebook"
          >
            <FaFacebook />
          </button>
          <button 
            className="social-btn twitter" 
            onClick={() => handleSocialLogin('Twitter')}
            aria-label="Login with Twitter"
          >
            <FaTwitter />
          </button>
          <button 
            className="social-btn instagram" 
            onClick={() => handleSocialLogin('Instagram')}
            aria-label="Login with Instagram"
          >
            <FaInstagram />
          </button>
        </div>
      </div>
      
      <p className="switch-form">
        Need an account? <button onClick={onSignupClick} className="link-btn">Sign-Up</button>
      </p>
    </div>
  );
};

export default LoginForm;