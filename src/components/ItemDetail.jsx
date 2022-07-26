import React from "react";
import './ItemDetail.css'
import ItemCount from "./ItemCount";
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';

function ItemDetail({ item })  {
    
    const [ cant, setAddedToCart] = useState(0);   
    const { addItem } = useContext(CartContext);
  
    function handleOnAdd(cantidad){
                  
          setAddedToCart(cantidad);
          addItem(item, cantidad);
    }



    return (   
    <div>

    <img src={item.image}  className="rounded mx-auto d-block" alt=""  height="200" width="200" />            
    <h3>{item.name}</h3>
    <p className="desc" >{item.descripcion}</p>
    <p > ${item.price}</p>
    {cant === 0 ? (
                    <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                ) : (
                    <Link to="/cart">
                        <Button variant="outline-dark">Ir al carrito</Button>
                    </Link>
                )
                
                }
    <br/><br/>
 
</div>   
   
    );
};
export default ItemDetail;