import React from 'react';
import CartWidget from  './CartWidget';
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(){

    return (

		<Navbar bg="dark" variant="dark" expand="lg">
		<Container>
		  <NavLink to={"/"} className="nav-link text-light">Home</NavLink>
		  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		  <Navbar.Collapse id="basic-navbar-nav" >
			<Nav className="me-auto">
			  <NavLink to={"/category/Jeans"} className="nav-link text-light">Jeans</NavLink>
			  <NavLink to={"/category/Remeras"} className="nav-link text-light">Remeras</NavLink>
			  <NavLink to={"/category/Blazers"} className="nav-link text-light">Blazers</NavLink>
			  <CartWidget />
			</Nav>
		  </Navbar.Collapse>
		</Container>
	  </Navbar>

);


}