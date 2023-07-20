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
        <div className='product-details'>
        <h2>Detalles del producto</h2>
        <div className='product-info'>
          <img className='img-det' src={product.img} alt={product.nameProduct} />
          <div className='product-text'>
            <h3>{product.nameProduct}</h3>
            <p className='product-price'>Precio: ${product.price}</p>
            <p className='product-quantity'>Cantidad: {product.quantity}</p>
          </div>
        </div>
        <p className='product-description'>
          Esta camiseta es una prenda de vestir de manga corta confeccionada con una mezcla de poliéster y algodón de alta calidad. La camiseta está fabricada principalmente con poliéster y algodón. El poliéster proporciona resistencia, elasticidad y durabilidad, lo que garantiza que la camiseta sea capaz de mantener su forma y resistir el desgaste diario. Por otro lado, el algodón aporta suavidad y transpirabilidad, lo que permite que la piel respire y se mantenga fresca durante su uso. Su estampado en vinilo es personalizado según como el cliente lo quiera o logo que desee dándole un diseño único y atractivo que ha sido estampado en vinilo de alta calidad. El vinilo es un material resistente y duradero, lo que asegura que el diseño se mantenga vívido y nítido incluso después de múltiples lavados.
        </p>
      </div>
    );
    
  }

export default Detallecamiseta;
