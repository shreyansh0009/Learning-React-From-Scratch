import React from 'react'

function PersonInfo(props) {
  return (
    <div>
      <img src={props.img} alt={props.name} width={250} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>isMarried: {props.isMarried}</h3>
      <h4>Hobbies: {props.hobbies}</h4>

    </div>
  )
}

export default PersonInfo
