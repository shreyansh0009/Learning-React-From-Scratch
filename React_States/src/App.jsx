import React, { useState } from 'react'
import Shoppinglist from './components/Shoppinglist';


const App = () => {
  
  const [count, setcount] = useState(0)
  console.log({count});
  function increment(count) {
    setcount(count+1)
  }
  function decrement(count) {
    setcount(count-1)
  }
  // *****************************************************************

  const [movie, setmovie] = useState({
    tittle: 'Interstaller',
    IMDB: 7.5
  })
  function updateRating() {
    setmovie({
      ...movie,
      IMDB: 10
    })
  }
  function updateMovie() {
    setmovie({
      ...movie,
      tittle: 'Tenet'
    })
  }
  function updateBoth() {
    setmovie({
      ...movie,
      tittle: 'Lost in Space',
      IMDB: 9.7,
    })
  }
  //************************************************************** */

  const [random, setrandom] = useState(0)
  function generateRandom() {
    const rn = Math.floor(Math.random() * 100);
    setrandom(rn)
  }
  
  return (
    
    <div>
      <h1>{count}</h1>

      {/* changing state directly using variable 'setcount' */}
      <button onClick={() => setcount(count+1)}>+</button>
      <button onClick={() => setcount(count-1)}>-</button>

      {/* changing state with calling a external function. this function could be normal function or we can also use arrow function. */}
      <button onClick={() => increment(count)}>+</button>
      <button onClick={() => decrement(count)}>-</button>
      <p>***************************************************</p>

      {/* Usestate with objects....  */}
      <h2>Tittle: {movie.tittle}</h2>
      <p>IMDB: {movie.IMDB}</p>
      <button onClick={() => updateRating()}>Update Rating</button>
      <button onClick={() => updateMovie()}>Update Movie</button>
      <button onClick={() => updateBoth()}>Update Both</button>
      <p>***********************************************************</p>


      {/* Generating random no. using States */}
      <h2>Random Number: {random}</h2>
      <button onClick={() => generateRandom()}>Generate Random Number</button>

      {/******************************************************* */} 
      <p>*******************************************************</p>
      
      <Shoppinglist />
    </div>
  )
}

export default App
