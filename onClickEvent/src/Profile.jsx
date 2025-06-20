import React from "react";

function Profile() {
  const imgURL = "https://i.imgflip.com/73u9iv.jpg";

  // After click on image, the image will disappears
  const handleClick5 = (e) => (e.target.style.display = "none");
  return (
    <div>
      <img
        onClick={(e) => handleClick5(e)}
        height={200}
        width={200}
        src={imgURL}
        alt=""
      />
    </div>
  );
}

export default Profile;
