import React from 'react';
import ItemCount from './ItemCount'
import  './Item.css'

const Item = ({ item }) => {
    return (
    <div className="card cardList"  style={{width: '18rem'}}  >
         <img src={item.image}  className="rounded mx-auto d-block" alt=""  height="200" width="200" /> 
     <div className="card-body" >           
    <h5 className="card-title text-dark">{item.name}</h5>
    <p className="card-text text-dark"> ${item.price}</p>
    <span/>
    <ItemCount stock={item.stock} initial={1} />
        </div>
    </div>
    );
};


export default Item;