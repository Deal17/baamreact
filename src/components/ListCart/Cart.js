import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Carrito de compras</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.price}</p>
          <button onClick={() => removeFromCart(item)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
