import React from 'react'
import { data } from '../../data';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
    return (
        <div className='container-items' style={containerStyle}> 
          {data.map(product=>(
            <div className='item' key={product.id}>
              <figure>
                <img src={product.img} alt={product.nameProduct}/>
              </figure>
              <div className='info-product'>
                <h2>{product.nameProduct}</h2>
                <p className='price'>${product.price}</p>
                <button>Añadir al carrito</button>
                <Link to={`/item/${product.id}`}>
              <button>Más información</button>
            </Link>
              </div>
            </div>
          ))}     
        </div>

    );
  };
  
  const containerStyle = {
    margin: '0 auto',
    'max-width': '1200px'
  };
  
  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };
  

export default  ItemListContainer