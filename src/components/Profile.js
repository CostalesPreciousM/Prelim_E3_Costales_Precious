import React from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

function Profile({ user, setUser }) {
  return (
    <div className="card p-3 my-3">
      <h2>Profile</h2>

      {/* Profile Picture First */}
      <ProfilePicture />

      {/* User Info Fields */}
      <label className="form-label">Name:</label>
      <input
        type="text"
        className="form-control"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <label className="form-label mt-2">Location:</label>
      <input
        type="text"
        className="form-control"
        value={user.location}
        onChange={(e) => setUser({ ...user, location: e.target.value })}
      />

      <label className="form-label mt-2">Bio:</label>
      <textarea
        className="form-control"
        value={user.bio}
        onChange={(e) => setUser({ ...user, bio: e.target.value })}
      />

      {/* User Info After Picture */}
      <UserInfo name={user.name} location={user.location} bio={user.bio} />
    </div>
  );
}

export default Profile;
