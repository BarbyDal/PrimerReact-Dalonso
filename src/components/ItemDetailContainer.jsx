
import React, {useState, useEffect} from 'react'
import {productos} from '../mock/products';
import ItemDetail from './ItemDetail';


function ItemDetailContainer(props) {

  const [product, setProduct]= useState({});

  useEffect( ()=> {

    const traerProducto= new Promise ((res, rej)=>{
        setTimeout(()=> {
          res(productos[1])
        },2000);      
    })
    traerProducto
    .then((res)=>{
    
     setProduct(res);
    })

  },[]);



 return (
   <div className="container">     
      <p>{props.greeting}</p>  
      <ItemDetail item={product}/>
     
   </div>
  )
}


export default ItemDetailContainer