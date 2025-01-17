import React from 'react'

function RanderUserdata() {

    const user = [
        {
            username: "xyz",
            email: "xyz@gmail.com",
            location: "Florida"
        },
        {
            username: "dhninsi",
            email: "vnkidni@gmail.com",
            location: "Canada"
        },
        {
            username: "ndjig",
            email: "nhidi@gmail.com",
            location: "Los Angeles"
        }
    ];
    // how to rander this data on browser?....

  return (
    <div>
      {user.map(({username, email, location})=> (

        <ul key={Math.floor(Math.random()*10)}> 
        {/* har data ke liye key assign krni padti hai, ye browser pr nhi dikhega but krna padta hai.
        if any object have id, then no need to assign key */}
            <li>{username}</li>
            <li>{email}</li>
            <li>{location}</li>
        </ul>
      ))}
    </div>
  )
}

export default RanderUserdata
