import React from 'react';
import { data } from '../../../data';
import { useParams } from 'react-router-dom';

function Detallecamiseta() {
    const { id } = useParams();
    console.log(id);
    // Convertir el id a número usando parseInt()
    const productId = parseInt(id);
  
    const product = data.find((item) => item.id === productId);
  
    if (!product) {
      return <div>Producto no encontrado</div>;
    }
  
    return (
    <div>
      <div className='container-detcamiseta'> 
        <h2>Detalles del producto</h2>
        <br/>
        {product.nameProduct}
        <img src={product.img} alt={product.nameProduct} />
        <p>Precio: ${product.price}</p>
        <p>Cantidad: {product.quantity}</p>
        {/* Agrega más detalles del producto aquí */}
      </div>
    </div>
    );
    
  }

export default Detallecamiseta;
