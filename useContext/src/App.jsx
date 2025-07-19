import React, { useContext } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

// useContext() => A react hook that allows you to share values/data between different levels of components without passing props through each level.

function App() {
  return (
    <div>

      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  )
}

export default App