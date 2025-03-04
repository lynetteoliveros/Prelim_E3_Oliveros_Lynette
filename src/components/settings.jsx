import React from "react";

function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser((prev) => ({
      ...prev,
      settings: {
        ...prev.settings,
        darkMode: !prev.settings.darkMode,
      },
    }));
  };

  return (
    <div>
      <h2>Settings Page</h2>
      <button className="btn btn-primary" onClick={toggleDarkMode}>
        {user.settings.darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
}

export default Settings;
