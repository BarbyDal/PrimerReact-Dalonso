import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import {createBuyOrder} from '../services/firestore';

const CartPage = () => {

    const { cart, clearCart, totalPriceCart, removeItem } = useContext(CartContext);

    function  handleBuyOrder() {
        const dataOrder= {
            buyer:{
                name:"Usuario Prueba",
                phone: 123123123,
                email:"UsuarioPrueba@gmal.com"
            },
            items: cart,
            total: totalPriceCart() }
        createBuyOrder(dataOrder).then( (orderDataCreated)=>{
            clearCart();
            console.log("orden:", orderDataCreated.id);
        });       
    }
 
    return (   

    <div>
                {cart.length === 0 ? (
            <div>
            <div >
                    <p>
                        No hay productos en el carrito, para comprar agregue productos
                    </p>
                    <Link to={"/"} ><button >Inicio</button></Link>
                </div>
            </div>
                ) : (
                    <div>
  <div>Carrito</div>  
 
 <div >

     { cart.map((item) => {
                             return (
                                 <div className="card cardList"  style={{width: '18rem'}}  key={item.id}> <img src={item.image} />
                                     <p>Producto: {item.name}</p>
                                     <p>Precio: $ {item.price}</p>
                                     <p>Cantidad: {item.cantidad}</p>
                                     <p>Subtotal: ${item.price* item.cantidad}</p>
                                     <button onClick={()=>removeItem(item.id)}>Eliminar del carrito</button>
                                 </div>)

                         })}

     <div className="card cardList">
                             <h4>TOTAL: $ {totalPriceCart()}</h4>
                             <button onClick={ handleBuyOrder} >FINALIZAR COMPRA</button>
                             <button onClick={clearCart}>Vaciar del carrito</button>
      </div>
 </div>  
                    </div>
                )}
    
  
    </div>

    ); 


};

export default CartPage;