import React, { useState } from "react";

function LoginForm({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label><br />
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      /><br /><br />

      <label htmlFor="password">Password:</label><br />
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br /><br />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
