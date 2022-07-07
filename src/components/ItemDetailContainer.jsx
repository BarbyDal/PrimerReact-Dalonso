
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom'
import {traerUnProducto} from '../services/firestore';

function ItemDetailContainer(props) {

  const [product, setProduct]= useState({});
//const id= parseInt(useParams().id);
const {itemId}= useParams();

  useEffect( ()=> {

      traerUnProducto(itemId)
      .then((res)=>{
       
        setProduct(res);
      }, [itemId])
     /*     const traerProducto= new Promise ((res, rej)=>{
        setTimeout(()=> {
         
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
    })  */

  },[itemId]);



 return (
   <div className="container">     
      <p>{props.greeting}</p>  
      <ItemDetail item={product}/>
     
   </div>
  )
}


export default ItemDetailContainer