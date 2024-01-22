import React from 'react';

export const ProductCard = ({ product }) => {
    // product properties -
    // imageUrl, imageAlt, name, shortDescription, longDescription, price

    const displayProductModal = (product) => {
        // set modal show to true
        // set modal data to product
    }

    return (
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 p-2">
            <div class="card rounded shadow-sm border-0">
                <div class="card-body p-0"><img src={product.imageUrl} alt={product.imageAlt} class="img-fluid d-block mx-auto mb-3"/>
                    <h5><a href="#" class="text-dark">{product.name}</a></h5>
                    <p class="small text-muted font-italic">{product.shortDescription}</p>
                    <p className='m-0 pb-4'>{product.price}</p>
                </div>
            </div>
        </div>
    )
}
