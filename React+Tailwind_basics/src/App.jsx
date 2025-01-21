import React, { useState } from 'react'
import Products from './Products'
import Score from './Score'

function App() {

  var [a, b] = useState(69)
  return (
    <div className= "w-full h-screen bg-zinc-900 p-2 m-0">

      <div className='w-40 bg-red-500 h-24 rounded-xl text-white flex items-center justify-center'>
        <h1>Hello Jii kaise hooo</h1>
      </div>
      <Products />
      <div className='w-full h-40 bg-slate-600 text-white rounded-md flex flex-col items-center justify-center'>
       <h1>{a}</h1>
       <Score u={a} v={b}/>
      </div>
    </div>
  )
}

export default App
