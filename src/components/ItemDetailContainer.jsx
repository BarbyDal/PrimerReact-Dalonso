
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import {traerUnProducto} from '../services/firestore';
import RotateLoader from 'react-spinners/RotateLoader';

function ItemDetailContainer(props) {

const [product, setProduct]= useState({});
const {itemId}= useParams();
const [isLoading, setIsLoading] = useState(true);

  useEffect( ()=> {

      traerUnProducto(itemId)
      .then((res)=>{
       
        setProduct(res);
        
      }, [itemId])  
      .finally(() => {
        setIsLoading(false);
      });
  },[itemId]);

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
      <ItemDetail item={product}/>
   </div>
   
  )
}


export default ItemDetailContainer