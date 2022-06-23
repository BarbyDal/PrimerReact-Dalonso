import React from "react";
import './ItemDetail.css'
import ItemCount from "./ItemCount";

function ItemDetail({ item })  {
    return (   
    <div>

    <img src={item.image}  className="rounded mx-auto d-block" alt=""  height="200" width="200" />            
    <h3>{item.name}</h3>
    <p className="desc" >{item.descripcion}</p>
    <p > ${item.price}</p>
    <ItemCount stock={item.stock} initial={1} />
</div>   
   
    );
};
export default ItemDetail;