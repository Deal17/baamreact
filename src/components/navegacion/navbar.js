import React from 'react'
import logo from '../../Assets/baam-azul.png';
import CartWidget from '../paginas/CartWidget/CartWidget';
import "./navbar.css";
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
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Galeria</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
            <CartWidget/>
        </div>
        </nav>
    </div>
  )
}

export default navbar