import React from 'react';
import { Modal } from 'react-bootstrap';

export const ProductModal = ({ selectedProduct, show, setShow }) => {
    const handleClose = () => {
        setShow(false);
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={selectedProduct.imageUrl} alt={selectedProduct.imageAlt} class="img-fluid d-block mx-auto mb-3"/>
                {selectedProduct.longDescription}
            </Modal.Body>
      </Modal>
    )
}