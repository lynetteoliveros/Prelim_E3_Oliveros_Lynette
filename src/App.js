import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";
import Settings from "./components/settings";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // May "email" na rin dito
  const [user, setUser] = useState({
    name: "Default User",
    email: "sample@example.com",
    settings: {
      darkMode: false,
    },
  });

  const appStyle = {
    backgroundColor: user.settings.darkMode ? "#333" : "#E7F5F5",
    color: user.settings.darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <Router>
      <div style={appStyle}>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            backgroundColor: "#262341",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to="/"
              style={{
                color: "#F9D94A",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              MyApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    style={{ color: "#E7F5F5", marginRight: "15px" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/profile"
                    style={{ color: "#E7F5F5", marginRight: "15px" }}
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/settings"
                    style={{ color: "#E7F5F5" }}
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="container p-4"
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            color: "#262341",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {/* I-pass ang user at setUser papuntang Profile */}
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
      </div>
    </Router>
  );
}

export default App;
