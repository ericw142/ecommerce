import React from 'react';

export const ProductCard = ({ product, setShowModal, setSelectedProduct }) => {
    // product properties -
    // imageUrl, imageAlt, name, shortDescription, longDescription, price

    const displayProductModal = (product) => {
        setShowModal(true);
        setSelectedProduct(product);
    }

    return (
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 p-2">
            <div className="card rounded shadow-sm border-0">
                <div className="card-body p-0"><img src={product.imageUrl} alt={product.imageAlt} className="img-fluid d-block mx-auto mb-3"/>
                    <h5><a onClick={() => displayProductModal(product)} href="#" className="text-dark">{product.name}</a></h5>
                    <p className="small text-muted font-italic">{product.shortDescription}</p>
                    <p className='m-0 pb-4'>{product.price}</p>
                </div>
            </div>
        </div>
    )
}
