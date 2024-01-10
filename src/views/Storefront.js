import React, { useState, useEffect } from 'react';

export const Storefront = ({ locations }) => {
    const [selectedStorefront, setSelectedStorefront] = useState();

    return (
        <div>
            {!selectedStorefront ? (
                <select>
                    {locations.map((el) => {
                        return <option onClick={setSelectedStorefront(el.location)} value={el.location}>{el.location}</option>
                    })}
                </select>
            ) : (
                <></>
            )}
            {/* on initial load, display storefront select */}

            {/* display top row with search, storefront select, filter options */}

            {/* display product cards */}

            {/* on click product card - display modal pop out for product with button to add to card */}
        </div>
    )
}