import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const DeleteAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [deleteStatus, setDeleteStatus] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete('/api/users', {
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      });
      setDeleteStatus(response.data.message);
    } catch (error) {
      setDeleteStatus('Failed to delete account. Please try again.');
    }
  };

  return (
    <div>
      <h1>Delete Account</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for first name, last name, email, and password */}
        {/* ... */}
        <button type="submit">Delete Account</button>
      </form>
      {deleteStatus && <p>{deleteStatus}</p>}
    </div>
  );
};

export default DeleteAccount;
