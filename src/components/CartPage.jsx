import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartPage = () => {

    const { cart, clearCart, totalPriceCart, removeItem } = useContext(CartContext);

    return (   

    <div>
                {cart.length === 0 ? (
            <div>
            <div >
                    <p>
                        No hay productos en el carrito, para comprar agregue productos
                    </p>
                    <Link to={"/"} ><button className="btn btn-secondary mb-2">Inicio</button></Link>
                </div>
            </div>
                ) : (
                    <div>
  <div>Carrito</div>  
 
 <div >

     { cart.map((item) => {
                             return (
                                <Row key={item.id}>
                                    <Col>
                                    <div className="card cardList"  style={{width: '8rem'}}>
                                         <img src={item.image} alt=""/>
                                    </div>
                                    </Col>
                                    <Col>
                                     <p>Producto: {item.name}</p>
                                    </Col>
                                    <Col>
                                     <p>Precio: $ {item.price}</p>
                                     </Col>
                                     <Col>
                                     <p>Cantidad: {item.cantidad}</p>
                                     </Col>
                                     <Col>
                                     <p>Subtotal: ${item.price* item.cantidad}</p>
                                     </Col>
                                     <Col>
                                     <Button variant="secondary" onClick={()=>removeItem(item.id)}>
                                        Eliminar del carrito
                                     </Button>
                                     </Col>
                                 </Row>
                                 )

                         })}

     <div className="card cardList">
                             <h4>TOTAL: $ {totalPriceCart()}</h4>
                             <Container fluid>
                            
                             <Row>
                                <Col md={{ span: 4, offset: 4 }}>

                                    <Button variant="outline-secondary"  className="me-2" onClick={clearCart}>
                                        Vaciar el carrito
                                    </Button>                                        
                                    <Link to={"/cartForm"}>
                                        <Button className="botonCheckout" variant="secondary">Checkout</Button>
                                    </Link>
                                                                   
                                </Col>
                             </Row>
                             
                             </Container>
      
      </div>
 </div>  
     </div> )}
    
  
    </div>

    ); 


};

export default CartPage;