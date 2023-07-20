import React from 'react'
import logo from '../../Assets/baam-azul.png';
import CartWidget from '../paginas/CartWidget/CartWidget';
import "./navbar.css";
import { Link,NavLink } from 'react-router-dom';

function navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className='navbar-brand nvaleft'>
            <img className="logoimg" src={logo} width={"70px"} height={"70px"} alt={"logo"}/>
                <h4>Baam Baam</h4>
            </div>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar" id="navbarNavDropdown">
               <Link to='/'className='listmenu'>Home</Link> 
               <Link to='/Category/1' className='listmenu'>galeria</Link> 
               <Link to='/Category/2'className='listmenu'>contacto</Link> 
               <Link to='/Category/3'className='listmenu'>camiseta</Link> 
               <Link to='/Category/4'className='listmenu'>gorras</Link> 
            </div>
            <CartWidget/>
        </div>
        </nav>
    </div>
  )
}

export default navbar