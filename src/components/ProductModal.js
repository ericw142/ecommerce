import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

export const ProductModal = ({ selectedProduct, show, setShow, cart, setCart }) => {
    const maxItemsPer = 10;
    const [amountToAdd, setAmountToAdd] = useState(1);
    const [displaySuccess, setDisplaySuccess] = useState(false);
    
    useEffect(() => {
        if (displaySuccess) {
            setTimeout(() => {
                setDisplaySuccess(false);
            }, 5000);
        }
    }, [displaySuccess]);

    const handleClose = () => {
        setDisplaySuccess(false);
        setShow(false);
    }

    const handleAddToCart = () => {
        const tempProducts = cart.products?.length > 0 ? [...cart.products] : [];
        
        for (let i = 0; i < amountToAdd; i++) tempProducts.push(selectedProduct);

        setCart({ products: tempProducts });

        setDisplaySuccess(true);
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={selectedProduct.imageUrl} alt={selectedProduct.imageAlt} className="img-fluid d-block mx-auto mb-3"/>
                {selectedProduct.longDescription}
                <div className='row mt-4'>
                    <div className='col'>
                        <select style={{maxWidth: '80px', marginLeft: 'auto'}} className='form-select' onChange={(e) => {setAmountToAdd(e.currentTarget.value)}}>
                            {[...Array(maxItemsPer)].map((e, i) => <option value={i+1}>{i+1}</option>)}
                        </select>
                    </div>
                    <div className='col'>
                        <button style={{marginRight: 'auto'}} className='btn btn-outline-success' onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
                {displaySuccess && (
                    <div className='row mt-2'>
                        <div className='col text-center'>
                            <p className='text-success m-0'>Successfully added to cart!</p>
                        </div>
                    </div>
                )}
            </Modal.Body>
      </Modal>
    )
}