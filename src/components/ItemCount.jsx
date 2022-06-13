import { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial);   


  function suma(){
    if(count < stock)
    {
        setCount(count + 1);
    }
    
  }

  function resta(){
    if(count> initial){
        setCount(count-1);
    }
   
  }

return (
    <div>
        <button onClick={resta} disabled={count === initial ? true : null}>-</button>
        <span>{count}</span>
        <button onClick={suma} disabled={count === stock ? true : null}>+</button>
        <br/>
        <br/>
        <button>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount