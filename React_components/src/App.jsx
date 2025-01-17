// learning about components...

import React from 'react'
import PersonInfo from './components/PersonInfo'
import ProductInfo from './components/ProductInfo'
import RanderUserdata from './components/RanderUserdata'

const App = () => {
  return (
    <div>
      {/* Randering data through components */}
      <ProductInfo />   
      <RanderUserdata />


      {/* passing some data to child component and print it through it. */}
      <PersonInfo 
      img="https://www.lockhatters.com/cdn/shop/files/HAYDOCK-FEDORA-RESIZED_1200x.jpg?v=1734429359"
      name="Saurabh"
      age={23}
      isMarried={false}
      hobbies={["coding", "reading", "sleeping"]}
      />

    </div>
  )
}

export default App
