import React from 'react';

export const LocationCard = ({ location, storehours, address, setSelectedView, setSelectedStorefront }) => {
    return (
        <div className='col-12 col-md-6'>
            <div className='location-card card' onClick={() => {
                setSelectedView('Storefront');
                setSelectedStorefront(location);
            }}>
                <p><strong>{location}</strong></p>
                <p>{storehours}</p>
                <p>{address}</p>
            </div>
        </div>
    )
}