import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';

export const Storefront = ({ locations, selectedStorefront, setSelectedStorefront, cart, setCart }) => {
    const [storefront, setStorefront] = useState();
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});

    const matchAndSetStorefront = () => {
        const matchingStorefront = locations.findIndex((el) => el.location === selectedStorefront);
        setStorefront(locations[matchingStorefront])
    }

    useEffect(() => {
        if (selectedStorefront) {
            matchAndSetStorefront();
        }
    }, [selectedStorefront]);

    return (
        <div className='container mb-5' style={{marginTop: '100px'}}>
            <ProductModal selectedProduct={selectedProduct} show={showModal} setShow={setShowModal} cart={cart} setCart={setCart}/>
            {!storefront ? (
                <div className='content-body' style={{marginTop: '100px'}}>
                    <div className='container'>
                        <div className="row">
                            <div className="col container text-start">
                                <p>Select one of our locations to see what we have for sale! Some products or available services may differ between storefronts.</p>
                                <select className="form-select" onChange={(e) => {setSelectedStorefront(e.target.value)}}>
                                    <option value="">Choose a location</option>
                                    {locations.map((el) => {
                                        return <option value={el.location}>{el.location}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {/* display top row with search, storefront select, filter options */}
                    <div className='row'>
                        <div className='col text-start'>
                            <button style={{marginTop: '16px'}} className='btn btn-outline-dark' onClick={() => {
                                setStorefront();
                                setSelectedStorefront();
                            }}>&#x2190; change location</button>
                        </div>
                        <div className='col'>
                            <h4 style={{marginTop: '16px'}}>{selectedStorefront}</h4>
                        </div>
                        <div className='col'></div>
                    </div>
                    {/* display product cards */}
                    <div className='row'>
                        {storefront.products.map((el) => {
                            return <ProductCard product={el} setShowModal={setShowModal} setSelectedProduct={setSelectedProduct} />
                        })}
                    </div>

                    {/* on click product card - display modal pop out for product with button to add to card */}
                </div>
            )}
        </div>
    )
}