import React from 'react';

export const ProductCard = ({ product }) => {
    // imageUrl, imageAlt, name, shortDescription, longDescription, price
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className='card-img-top' src={product.imageUrl} alt={product.imageAlt}/>
            <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>{product.shortDescription}</p>
            </div>
        </div>
    )
}