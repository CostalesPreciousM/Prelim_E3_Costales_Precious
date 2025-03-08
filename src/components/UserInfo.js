import React from "react";

function UserInfo({ name, location, bio }) {
  return (
    <div className="mt-2">
      <p> User Name: {name || "(No name set)"}</p>
      <p> Location: {location || "(No location set)"}</p>
      <p> Bio: {bio || "(No bio set)"}</p>
    </div>
  );
}

export default UserInfo;
