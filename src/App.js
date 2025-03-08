import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "./styles.css";

function App() {
  const [user, setUser] = useState({ name: "", settings: { darkMode: false } });

  return (
    <Router>
      <div className={user.settings.darkMode ? "dark-mode" : ""}>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route
            path="/settings"
            element={<Settings user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
