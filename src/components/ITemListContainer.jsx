
import React, {useState, useEffect} from 'react'
import {productos} from '../mock/products';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'

function ItemListContainer(props) {

  const [products, setProduct]= useState([]);
const {id}= useParams();

  useEffect( ()=> {

    const traerProductos= new Promise ((res, rej)=>{
        setTimeout(()=> {
    
          if (id=== undefined) {
            res(productos);
          }             
          
          else{

            const itemsFound= productos.filter( p=>
              {
                return p.category=== id
              } )
  
            res(itemsFound);
          }
        },2000);      
    })
   setTimeout(()=>{console.log(traerProductos)},2001);
    traerProductos
    .then((res)=>{
      //console.log(res);
     setProduct(res);
    })

  },[id]);

//console.log(products);

 return (
   <div className="container">     
      <p>{props.greeting}</p>  
      <ItemList items={products} />
     
   </div>
  )
}


export default ItemListContainer