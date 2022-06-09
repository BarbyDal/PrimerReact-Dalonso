import React from 'react';
import CartWidget from  './CartWidget';

export default function NavBar(){

    return (
<nav class="navbar navbar-expand navbar-light ">
		<a class="navbar-brand ps-3 text-dark" href="./">  
			 Inicio
		</a>
        <ul class="navbar-nav mr-auto">
			<li class="nav-item  ml-3"> 
				<a class="nav-link text-dark" href="./" data-abc="true">
                 Productos
				</a> 
			</li>
			<li class="nav-item  ml-3"> 
				<a class="nav-link text-dark" href="./" data-abc="true">
                 Contacto
				</a> 
			</li>
			<CartWidget/>
		</ul>
</nav>
);


}