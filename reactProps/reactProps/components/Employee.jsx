import React from 'react'

function Employee({data}) {
  return (
    <div>
        <h1>Employee Details</h1>
        <p>Name: {data.name}</p>
        <p>Detartment: {data.department}</p>
        <p>isFullTime: {data.isFullTime ? "Yes" : "No"}</p>
        <p>Skills: {data.skills.join(", ")}</p>
    </div>
  )
}

export default Employee