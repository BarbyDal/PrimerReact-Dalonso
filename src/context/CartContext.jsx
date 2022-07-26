import { createContext} from  "react";
import { useState } from "react";
import 'alertifyjs/build/css/alertify.css';
import alertify from "alertifyjs";

export const CartContext= createContext();

export const CartProvider= ({children}) =>{

   const [cart, setCart]= useState([]);
   let cartCopy = [];
    
    const addItem = (item, cantidad) => {

        if (isInCart(item.id)) {
            const idToAdd= item.id;
            let itemToAdd= cart.find(cadaItem=>cadaItem.id===idToAdd);
            itemToAdd.cantidad += cantidad;
            let newCart = cart.filter(p => p.id !== item.id );

            setCart([...newCart, { ...itemToAdd}]);
            
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }

    };


    function cantInCart(){
        let total=0;
        cart.forEach( item=> total= total + item.cantidad);
        return total;
    }


    function totalPriceCart(){
        let total=0;
        cart.forEach( (item)=> (total= total + (item.cantidad * item.price)));
        return total;
    }

  
    const isInCart = (id) => {
      
        return cart.some((p) => p.id === id);
    };

  
    const clearCart = () => {
        setCart([]);
    };

    const  clickHandle = (orderId) => {
        
        alertify.alert('Pedido nro:', orderId, function(){ 
            
          alertify.success('Pedido confirmado'); 

        });
      };

  
    const removeItem = (id) => {
        cartCopy = cart.filter(p => p.id !== id )
        setCart(cartCopy);

    }; 

  

    return(       
       
        <CartContext.Provider  value={{cart, clickHandle, addItem, cantInCart, totalPriceCart, clearCart, removeItem}}>        
        {children}
        </CartContext.Provider>
      
    );
};