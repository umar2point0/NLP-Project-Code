import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaTwitter, FaInstagram, FaUser, FaEnvelope, FaLock, FaGlobe } from 'react-icons/fa';

const SignupForm = ({ onLoginClick }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signup submitted:', { firstName, lastName, email, password, country });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Signing up with ${provider}`);
    // Add social signup logic here
  };

  return (
    <div className="form-container">
      <h1>Start For Free</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-field">
            <FaUser className="input-icon" />
            <input 
              type="text" 
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          
          <div className="input-field">
            <FaUser className="input-icon" />
            <input 
              type="text" 
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="input-field">
          <FaEnvelope className="input-icon" />
          <input 
            type="email" 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-field">
          <FaGlobe className="input-icon" />
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="country-select"
          >
            <option value="">Select Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        
        <div className="input-field">
          <FaLock className="input-icon" />
          <input 
            type="password"
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Sign Up</button>
      </form>

      <div className="social-login">
        <p className="divider">Or sign up with</p>
        <div className="social-icons">
          <button 
            className="social-btn google" 
            onClick={() => handleSocialLogin('Google')}
            aria-label="Sign up with Google"
          >
            <FcGoogle />
          </button>
          <button 
            className="social-btn facebook" 
            onClick={() => handleSocialLogin('Facebook')}
            aria-label="Sign up with Facebook"
          >
            <FaFacebook />
          </button>
          <button 
            className="social-btn twitter" 
            onClick={() => handleSocialLogin('Twitter')}
            aria-label="Sign up with Twitter"
          >
            <FaTwitter />
          </button>
          <button 
            className="social-btn instagram" 
            onClick={() => handleSocialLogin('Instagram')}
            aria-label="Sign up with Instagram"
          >
            <FaInstagram />
          </button>
        </div>
      </div>
      
      <p className="switch-form">
        Already have account? <button onClick={onLoginClick} className="link-btn">Login</button>
      </p>
    </div>
  );
};

export default SignupForm;