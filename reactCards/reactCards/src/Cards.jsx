import React from "react";
import profilePic from "./assets/img.png";

function Cards() {
  return (
      <div className="w-full max-w-sm p-4 bg-gray-400 border-2 border-black rounded-xl overflow-auto text-center shadow-xl m-3">
        <img
          className="mx-auto w-32 md:w-40 h-auto border border-black rounded-[50%]"
          src={profilePic}
          alt="profile image"
        />
        <h2 className="text-2xl font-bold m-2">Shreyansh0009</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
          debitis maxime dolores reprehenderit voluptate vel doloremque earum.
        </p>
      </div>
  );
}

export default Cards;
