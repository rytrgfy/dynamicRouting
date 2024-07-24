import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log('Login successful, token:', response.data.token);
      // Store the token or handle login success
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data.msg : error.message);
      // Handle login failure
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Click here to submit</button>
      </form>
    </div>
  );
};

export default Login;
