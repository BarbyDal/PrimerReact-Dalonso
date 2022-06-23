import React from 'react';
import CartWidget from  './CartWidget';
import {Link} from 'react-router-dom'

export default function NavBar(){

    return (
<nav className="navbar navbar-expand navbar-light ">
	
    <ul className="navbar-nav mr-auto">
			<li className="nav-item  ml-3"> 			
				<Link className="nav-link text-dark" to="/">Home</Link>
			</li>
			<li className="nav-item  ml-3"> 			
				<Link className="nav-link text-dark" to="/category/Jeans">Jeans</Link>
			</li>
			<li className="nav-item  ml-3"> 			
				<Link className="nav-link text-dark" to="/category/Blazers">Blazers</Link>
			</li>
			<li className="nav-item  ml-3"> 			
				<Link className="nav-link text-dark" to="/category/Remeras">Remeras</Link>
			</li>
			<CartWidget/>
		</ul>
</nav>
);


}