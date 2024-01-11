import React, { useState, useEffect } from 'react';

export const Storefront = ({ locations }) => {
    const [selectedStorefront, setSelectedStorefront] = useState('');
    const [storefront, setStorefront] = useState();

    const matchAndSetStorefront = () => {
        const matchingStorefront = locations.findIndex((el) => el.location === selectedStorefront);
        setStorefront(locations[matchingStorefront])
    }

    return (
        <div className='container'>
            {!storefront ? (
                <div>
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
            ) : (
                <div>
                    {/* display top row with search, storefront select, filter options */}
          
                    {/* display product cards */}

                    {/* on click product card - display modal pop out for product with button to add to card */}
                </div>
            )}
        </div>
    )
}