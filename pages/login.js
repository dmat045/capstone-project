import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState(''); // State variable to store the email input
  const [password, setPassword] = useState(''); // State variable to store the password input

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('/api/users', {
        email,
        password,
      }); // Send a POST request to the '/api/users' endpoint with the provided email and password

      router.push('/home'); // Redirect to the '/home' page upon successful login
    } catch (error) {
      console.error('Failed to connect user', error); // Log an error message if login fails
    }
  };

  const handleSignup = () => {
    router.push('/Signup'); // Redirect to the '/Signup' page when the "Sign up" button is clicked
  };

  const handleUpdate = async () => {
    try {
      // Replace 'your-user-id' with the actual user ID of the logged-in user
      await axios.put('/api/users', {
        userId: 'your-user-id',
        firstName: 'Updated First Name',
        lastName: 'Updated Last Name',
        email: 'updated@example.com',
        password: 'updated-password',
      }); // Send a PUT request to the '/api/users' endpoint with updated user data

      // Optionally, you can fetch the updated user data and update the state accordingly
      // For example: Update the state with the updated user data
    } catch (error) {
      console.error('Failed to update user', error); // Log an error message if the update fails
    }
  };

  const handleDelete = async () => {
    try {
      // Replace 'your-user-id' with the actual user ID of the logged-in user
      await axios.delete('/api/users', {
        data: {
          userId: 'your-user-id',
        },
      }); // Send a DELETE request to the '/api/users' endpoint with the user ID to be deleted

      // Optionally, you can clear the user data from state and navigate to the login or homepage
      // For example: Clear the email and password state and navigate to the '/login' page
      setEmail('');
      setPassword('');
      router.push('/login');
    } catch (error) {
      console.error('Failed to delete user', error); // Log an error message if the delete fails
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      {/* Login form */}
      <form onSubmit={handleLogin}>
        <input
          type="text"
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
        <button type="submit">Login</button>
      </form>

      <p className="mt-4">
        Don't have an account?{' '}
        <button className="text-blue-500" onClick={handleSignup}>
          Sign up
        </button>
      </p>

      {/* Buttons to trigger update and delete actions */}
      <button onClick={handleUpdate}>Update Account</button>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default Login;
