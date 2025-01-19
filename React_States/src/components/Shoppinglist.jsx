import React, {useState} from 'react'

const Shoppinglist = () => {
    
    const [name, setname] = useState('')
    const [qty, setqty] = useState('')
    const [items, setitems] = useState([])

    const handleSubmit = (Se) => {
        e.preventDefault()
        
        if(!name || !qty) return;

        const newItem = {
            name, 
            qty: parseInt(qty)
        };

        setitems((prevItems) => [...prevItems, newItem]);
        setname("");
        setqty("");
    };

    return (
    <div>
        <h1>Shopping List:</h1>
        <form onSubmit={handleSubmit}>

            <input type="text"
            placeholder='Enter Item Name'
            value={name}
            onChange={(e) => setname(e.target.value)}
            />

            <input type="number"
            placeholder='Enter Quantity'
            value={qty}
            onChange={(e) => setqty(e.target.value)}/>

            <button type='submit'>Add Item</button>
        </form>

        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item.name} -Quantity: {item.qty}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Shoppinglist
