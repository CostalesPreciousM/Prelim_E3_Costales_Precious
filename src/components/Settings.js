import React from "react";

function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      settings: { ...prevUser.settings, darkMode: !prevUser.settings.darkMode },
    }));
  };

  return (
    <div className="card p-3 my-3">
      <h2>Settings</h2>
      <label className="form-label">Dark Mode:</label>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {user.settings.darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
}

export default Settings;
