import React, { useState } from "react";
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1> {/* Required by test */}
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
