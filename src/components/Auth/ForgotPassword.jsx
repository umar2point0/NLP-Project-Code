import React, { useState } from 'react';

const ForgotPassword = ({ onBackToLogin, onEmailSubmitted }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add forgot password logic here
    console.log('Forgot password submitted:', email);
    onEmailSubmitted(email);
  };

  return (
    <div className="form-container">
      <h1>Forgot Password</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="email" 
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Get Code</button>
      </form>
      
      <button onClick={onBackToLogin} className="back-btn">Back to login</button>
    </div>
  );
};

export default ForgotPassword;