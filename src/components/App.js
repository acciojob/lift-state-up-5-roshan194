import React, { useState } from "react";
import LoginForm from "./LoginForm";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  return (
    <div>
        {/* Do not remove the main div */}
        {isLoggedIn ? (
          <h2>Welcome, you are now logged in! 🎉</h2>
        ) : (
          <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        )}
    </div>
  )
}

export default App
