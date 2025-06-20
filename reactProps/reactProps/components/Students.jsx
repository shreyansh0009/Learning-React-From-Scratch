import React from "react";

function Students({ data }) {
  return (
    <div>
      <h1>Student Information</h1>
      <p>Name: {data.name}</p>
      <p>Roll: {data.roll}</p>
      <p>isStudent: {data.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

export default Students;
