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
    }, [])

    return (
        <div className='container mb-5'>
            <ProductModal selectedProduct={selectedProduct} show={showModal} setShow={setShowModal} cart={cart} setCart={setCart}/>
            {!storefront ? (
                <div className='content-body' style={{marginTop: '100px'}}>
                    <div className='container'>
                        <div className="row">
                            <div className="col">
                                <select className="form-select" onChange={(e) => {setSelectedStorefront(e.target.value)}}>
                                    <option value="">Choose a location</option>
                                    {locations.map((el) => {
                                        return <option value={el.location}>{el.location}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6 mx-auto">
                                <button className='btn btn-light w-100' onClick={() => {matchAndSetStorefront()}}>Go</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {/* display top row with search, storefront select, filter options */}
                    <div className='row'>
                        <div className='col text-start'>
                            <button style={{marginTop: '16px'}} className='btn btn-outline-dark' onClick={() => setStorefront()}>&#x2190; change location</button>
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