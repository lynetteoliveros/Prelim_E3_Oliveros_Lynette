import React from "react";
import UserInfo from "./UserInfo";

function Profile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: e.target.value,
    }));
  };

  const handleEmailChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: e.target.value,
    }));
  };

  return (
    <div className="container mt-4">
      <h2>Profile Page</h2>
      <UserInfo name={user.name} />
      <div className="mb-3 mt-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          value={user.name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          value={user.email}
          onChange={handleEmailChange}
        />
      </div>
      <button className="btn btn-primary">Save</button>
    </div>
  );
}

export default Profile;
