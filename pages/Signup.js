import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Signup = () => {
  const [firstName, setFirstName] = useState(''); // State variable to store the first name input
  const [lastName, setLastName] = useState(''); // State variable to store the last name input
  const [email, setEmail] = useState(''); // State variable to store the email input
  const [password, setPassword] = useState(''); // State variable to store the password input
  const router = useRouter(); // Next.js router for handling navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('/api/users', {
        firstName,
        lastName,
        email,
        password,
      }); // Send a POST request to the '/api/users' endpoint with user registration data

      console.log(response.data); // Log the response data from the server

      // Redirect to the home page after successful registration
      router.push('/home');
    } catch (error) {
      console.error('Registration failed', error); // Log an error message if registration fails
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
