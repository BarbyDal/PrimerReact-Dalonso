
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'
import {traerProductos} from '../services/firestore'
import RotateLoader from 'react-spinners/RotateLoader';

function ItemListContainer(props) {

const [products, setProduct]= useState([]);
const {categoryId}= useParams();
const [isLoading, setIsLoading] = useState(true);


  useEffect( ()=> {
    traerProductos(categoryId)
    .then((res)=> {
      setProduct(res);
    })
    .finally(() => {
      setIsLoading(false);
    });
  },[categoryId]);

  if(isLoading){
    return (
    <div className="mx-auto container h-96 flex justify-around">
      <div className="flex-1 flex justify-center items-center">
      <RotateLoader className="mx-auto align-middle" color={"rgb(000, 000, 000)"} size={20} />
      </div>
    </div>
    )
  }

  return (
      <div className="container">     
         <p>{props.greeting}</p>  
         <ItemList items={products} />        
      </div>
     )

}


export default ItemListContainer
