import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(5)

  function inCounter() {
    if(count < 20) {
      setCount(count + 1)
    } else {
      alert("Can't increase counter > 20!")
    }
  }

  function deCounter() {
    if(count > 0) {
      setCount(count - 1)
    } else {
      alert("Can't decrease counter < 0!")
    }
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={inCounter}>Increase Counter</button>
      <button onClick={deCounter}>Decrease Counter</button>
    </div>
  )
}

export default Counter
