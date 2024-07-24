import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // Here, you would send the data to your backend
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // if(res.data.sucess){
    //   Na
    // }

    // )
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <button type="submit" style={{ width: '100%' }}>Click here to sign up</button>
      </form>
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
};

export default Signup;
