import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { prueba } = useContext(CartContext);

    const cartLog =()=>{
        
        prueba();
        };
    

    return (
        <div>
            <div>
                <button onClick={cartLog}>Click</button>
            </div>
        </div>
    );
};

export default Cart;