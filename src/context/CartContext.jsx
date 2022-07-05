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
            const idToAdd= item.id;
            let itemToAdd= cart.find(cadaItem=>cadaItem.id===idToAdd);
            itemToAdd.cantidad += cantidad;
            let newCart = cart.filter(p => p.id !== item.id );

            setCart([...newCart, { ...itemToAdd}]);
            
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }

    };

    //funcion para devolver cantidad de items

    function cantInCart(){
        let total=0;
        cart.forEach( item=> total= total + item.cantidad);
        return total;
    }

    //funcion para calcular el precio total de lo consumido en el carrito
    function totalPriceCart(){
        let total=0;
        cart.forEach( (item)=> (total= total + (item.cantidad * item.price)));
        return total;
    }

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
    const removeItem = (id) => {
        cartCopy = cart.filter(p => p.id !== id )
        setCart(cartCopy);

    }; 

    return(       
       
        <CartContext.Provider  value={{cart, prueba, addItem, cantInCart, totalPriceCart, clearCart, removeItem}}>        
        {children}
        </CartContext.Provider>
      
    );
};