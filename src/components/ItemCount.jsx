import { useState } from 'react'
import Button from 'react-bootstrap/Button';

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
        <Button variant="secondary" size="sm" 
          onClick={resta} disabled={count === initial ? true : null}>-</Button>
        <span className="text-dark" >{count}</span>
        <Button variant="secondary" size="sm" 
          onClick={suma} disabled={count === stock ? true : null}>+</Button>
        <br/>
        <br/>
        <Button variant="secondary"  onClick={()=>onAdd(count)}>Agregar al carrito</Button>
    </div>
    )
}

export default ItemCount