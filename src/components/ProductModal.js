import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export const ProductModal = ({ selectedProduct, show, setShow, cart, setCart }) => {
    const maxItemsPer = 10;
    const [amountToAdd, setAmountToAdd] = useState(1)
    
    const handleClose = () => {
        setShow(false);
    }

    const handleAddToCart = () => {
        const tempProducts = cart.products?.length > 0 ? [...cart.products] : [];
        
        for (let i = 0; i < amountToAdd; i++) tempProducts.push(selectedProduct);

        setCart({ products: tempProducts });
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
                        <select className='form-select' onChange={(e) => {setAmountToAdd(e.currentTarget.value)}}>
                            {[...Array(maxItemsPer)].map((e, i) => <option value={i+1}>{i+1}</option>)}
                        </select>
                    </div>
                    <div className='col text-center'>
                        <button className='btn btn-outline-secondary' onClick={handleAddToCart}>Add to cart</button>
                    </div>
                </div>
            </Modal.Body>
      </Modal>
    )
}