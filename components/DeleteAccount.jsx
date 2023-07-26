import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const DeleteAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete('/api/users', {
        data: {
          email,
          password,
        },
      });

      if (response.status === 200) {
        setMessage('Account deleted successfully.');

      }
    } catch (error) {
      setMessage('Failed to delete account. Please check your credentials.');
      console.error('Failed to delete account', error);
    }
  };

  return (
    <div>
      <h1>Delete Account</h1>
      <form onSubmit={handleDelete}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Delete Account</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default DeleteAccount;
