import React, { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = ({ email, onBackToLogin }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add your password reset logic here
    console.log(`Password reset for ${email}`);
    onBackToLogin();
  };

  return (
    <div className="form-container">
      <h1>Reset Password</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-field">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <span 
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        
        <div className="input-group">
          <div className="input-field">
            <FaLock className="input-icon" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span 
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        
        <button type="submit" className="auth-primary-btn">
          Save Password
        </button>
      </form>
      
      <button 
        onClick={onBackToLogin} 
        className="auth-secondary-btn"
      >
        Back to login
      </button>
    </div>
  );
};

export default ResetPassword;