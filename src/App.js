import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const login = (userId) => {
    setUser(userId);
    // Save the user's login to localStorage
    localStorage.setItem("user", userId);
  };

  const logout = () => {
    setUser(null);
    // Remove the user's login from localStorage
    localStorage.setItem("user", "");
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Dashboard user={user} onLogout={logout} />
              ) : (
                <Login onLogin={login} />
              )
            }
          />
          {/* Additional routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
