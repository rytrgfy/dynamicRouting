import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div>Login Page</div>
      <span>
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
      </span>
    </>
  );
};

export default Login;
