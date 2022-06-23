import React from 'react';
import ItemCount from './ItemCount'
import  './Item.css'
import {Link} from 'react-router-dom'


const Item = ({ item }) => {
    const urlDetalle = `/item/${item.id}`

    return (
    <div className="card cardList"  style={{width: '18rem'}}  >
         <img src={item.image}  className="rounded mx-auto d-block" alt=""  height="200" width="200" /> 
        <div className="card-body" >           
        <h5 className="card-title text-dark">{item.name}</h5>
        <p className="card-text text-dark"> ${item.price}</p>
        <span/>
        <ItemCount stock={item.stock} initial={1} />
            </div>
        <Link to={urlDetalle}>
            <button>Ver Detalle</button>
        </Link>
    </div>
    );
};


export default Item;