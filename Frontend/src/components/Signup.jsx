// import React, { useState } from 'react';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     if (password !== confirmPassword) {
//       setMessage("Passwords do not match");
//       return;
//     }
//     try {
//       const response = await fetch('http://localhost:5173/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Signup successful!");
//       } else {
//         setMessage(data.msg || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred. Please try again later.");
//     }

//     // Here, you would send the data to your backend
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // if(res.data.sucess){
//     //   Na
//     // }

//     // )
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto' }}>
//       <h1>Signup Page</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           style={{ display: 'block', marginBottom: '10px', width: '100%' }}
//         />
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={{ display: 'block', marginBottom: '10px', width: '100%' }}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{ display: 'block', marginBottom: '10px', width: '100%' }}
//         />
//         <input
//           type="password"
//           placeholder="Confirm your password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//           style={{ display: 'block', marginBottom: '10px', width: '100%' }}
//         />
//         <button type="submit" style={{ width: '100%' }}>Click here to sign up</button>
//       </form>
//       {message && <p style={{ color: 'red' }}>{message}</p>}
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Signup successful!");
      } else {
        setMessage(data.msg || "Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
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




