import React, { useState, useEffect } from 'react'

function Clock() {

    const [time, settime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        settime(new Date());
      }, 1000);
    
      return () => {
        clearInterval(timer);
      }
    }, [])

    const formatedTime = time.toLocaleTimeString("en-GB",{
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
    
  return (
    <>
    <div className='clock text-9xl font-semibold'>
        <span>{formatedTime}</span>
    </div>
    </>
  )
}

export default Clock