import React from 'react'

function Score({u, v}) {
  return (
    <div className='mt-4'>
      <button onClick={()=> v(u+1)}className='w-16 h-12 bg-green-400 rounded-md'>click</button>
    </div>
  )
}

export default Score
