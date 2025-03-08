import React, { useState } from "react";

function ProfilePicture() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h3>Profile Picture</h3>
      <img
        src={image || "https://via.placeholder.com/100"}
        alt="Profile"
        className="profile-pic"
      />
      <input type="file" onChange={handleImageUpload} />
    </div>
  );
}

export default ProfilePicture;
