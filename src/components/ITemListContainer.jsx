
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'
import {traerProductos} from '../services/firestore'

function ItemListContainer(props) {

const [products, setProduct]= useState([]);
const {categoryId}= useParams();

//let items= getItems();
//console.log(items);

  useEffect( ()=> {
  traerProductos(categoryId)
  .then((res)=> {
    setProduct(res);
  })
  .catch((error)=>{
 console.log(error);
  },[categoryId]);
});
        /*      const traerProductos= new Promise ((res, rej)=>{
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



  },[]); */

//console.log(products);

 return (
   <div className="container">     
      <p>{props.greeting}</p>  
      <ItemList items={products} />
     
   </div>
  )
}


export default ItemListContainer