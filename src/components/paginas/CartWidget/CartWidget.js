import React from 'react'
import cartIcon from '../../../Assets/carrito.png';
import "./Cart.css";
const CartWidget = () => {
    const itemCount = 5; // Número hardcodeado
  
    return (
      <div className="cart-widget">
        <img src={cartIcon} alt="Carrito" className="cart-icon" width={"70px"} height={"70px"} />
        {itemCount > 0 && <span className="badge">{itemCount}</span>}
      </div>
    );
  };
export default  CartWidget