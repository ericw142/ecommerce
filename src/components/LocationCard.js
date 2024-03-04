import React from 'react';

export const LocationCard = ({ location, storehours, address, setSelectedView, setSelectedStorefront }) => {
    return (
        <div className='col-12 col-md-6 text-start'>
            <div className='location-card card p-3' onClick={() => {
                setSelectedView('Storefront');
                setSelectedStorefront(location);
            }}>
                <p style={{fontSize: '28px'}}><strong>{location}</strong></p>
                <p style={{fontSize: '18px'}}>{storehours}</p>
                <p style={{fontSize: '18px'}}>{address}</p>
            </div>
        </div>
    )
}