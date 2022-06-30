import { createContext} from  "react";
import { useState } from "react";

export const CartContext= createContext();

export const CartProvider= ({children}) =>{

   const [cart, setCart]= useState([]);
   let cartCopy = [];

    const prueba =()=>{
        //se deja el console.log para probar los datos
        console.log("prueba");
        console.log('agregado', cart);
    };
    //funcion para agregar al carrito
    const addItem = (item, cantidad) => {

        if (isInCart(item.id)) {
            //sumar cantidad
            console.log('ya esta en el carrito, agrega la cantidad');
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }

    };

    //función para verificar si el producto ya está en el carrito
    const isInCart = (id) => {
        //some devuelve true o false
        return cart.some((p) => p.id === id);
    };

    //funcion para eliminar todos los items del carrito
    const clearCart = () => {
        setCart([]);
    };

    //Remove item usando su id
    const removeItem = (item) => {
        cartCopy = cart.filter(p => p.id !== item.id )
        setCart(cartCopy);

        //se deja el console.log para probar los datos
        console.log('producto eliminado:', item.name);
    }; 

    return(       
       
        <CartContext.Provider  value={{cart, prueba, addItem, clearCart, removeItem}}>        
        {children}
        </CartContext.Provider>
      
    );
};