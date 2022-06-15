
import React, {useState, useEffect} from 'react'
import {productos} from '../mock/products';
import ItemList from './ItemList';

function ItemListContainer(props) {

  const [products, setProduct]= useState([]);

  useEffect( ()=> {

    const traerProductos= new Promise ((res, rej)=>{
        setTimeout(()=> {
          res(productos)
        },2000);      
    })
   setTimeout(()=>{console.log(traerProductos)},2001);
    traerProductos
    .then((res)=>{
      //console.log(res);
     setProduct(res);
    })

  },[]);

//console.log(products);

 return (
   <div className="container">     
      <p>{props.greeting}</p>  
      <ItemList items={products} />
   </div>
  )
}


export default ItemListContainer