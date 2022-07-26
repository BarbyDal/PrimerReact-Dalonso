import React, {useState,useContext} from 'react';
import { createBuyOrder } from '../services/firestore';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import {  Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CartForm() {
  
  const { cart, clearCart, totalPriceCart, clickHandle, cantInCart } = useContext(CartContext);   
  let total = 0;  
 
  const [buyer, setBuyer] = useState(  { name: "",
                                          phone: "",
                                          email: "",
                                        },
                                      )
                           
  const handleChange = (evt) => {
    
    const field = evt.target.name;
    const value = evt.target.value;

    setBuyer({
      ...buyer, 
      [field]: value,
    })
  }
  

  function handleBuyOrder(evt) {
    evt.preventDefault();
    
    const dataOrder = {
      buyer,
      items: cart,
      total: totalPriceCart(),
    };

    createBuyOrder(dataOrder).then(( orderDataCreated ) => {    
      
      let orderId=orderDataCreated.id; 
      clickHandle(orderId);   
      clearCart();
      
    });
  }


  return (

    <div>
    {cantInCart() === 0 ? (
            <div >
            <p>
                No hay productos en el carrito, para comprar agregue productos
            </p>
            <Link to={"/"} ><Button className="btn btn-secondary mb-2">Inicio</Button></Link>
        </div>
                ) : (
                  <form>
                  <h1>Resumen</h1>      
                  <div>
                      {cart.map((item) => (
                          <div key={item.id}>
                          <p>
                              {item.name} x{item.cantidad}
                              - ${item.price * item.cantidad}
                          </p>
                        </div>
                      ))}
                      <p>
                        <span>{cart.forEach(item => total += (item.price * item.cantidad))}
                        <span>Total:</span> ${total}</span> 
                      </p>
                    </div>
              
                  <h2>Datos del envio</h2>
                  <Row>
                    <Col>
                    <label htmlFor="username">Usuario</label>
                    <input onChange={handleChange} className="form-control" name="name"></input>                    
                    </Col>
                    
                    <Col>
                    <label htmlFor="phone">Telefono</label>
                    <input onChange={handleChange} className="form-control" name="phone"></input>                    
                    </Col>

                    <Col>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} className="form-control" name="email"></input>                    
                    </Col>
                  </Row>              
                  <Button onClick={handleBuyOrder}  variant="success" className="btn-checkout mt-2 mb-2">
                    Finalizar Compra
                  </Button>
                </form>
                )
                
                }

  </div>
  )
}

export default CartForm