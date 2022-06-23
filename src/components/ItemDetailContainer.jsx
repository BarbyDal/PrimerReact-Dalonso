
import React, {useState, useEffect} from 'react'
import {productos} from '../mock/products';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'

function ItemDetailContainer(props) {

  const [product, setProduct]= useState({});
const id= parseInt(useParams().id);
//console.log(id);
  useEffect( ()=> {

    const traerProducto= new Promise ((res, rej)=>{
        setTimeout(()=> {
          /*let itemN= parseInt(id);
          res(productos[itemN])*/
          const itemFound= productos.find( p=>
            {
              return p.id=== id
            }            
          )
          res(itemFound);
        },2000);      
    })
    traerProducto
    .then((res)=>{
    
     setProduct(res);
    })

  },[id]);



 return (
   <div className="container">     
      <p>{props.greeting}</p>  
      <ItemDetail item={product}/>
     
   </div>
  )
}


export default ItemDetailContainer