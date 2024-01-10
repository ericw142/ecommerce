import React from 'react';

export const LocationCard = ({ location, storehours, address }) => {
    return (
        <div className='col'>
            <p><strong>{location}</strong></p>
            <p>{storehours}</p>
            <p>{address}</p>
        </div>
    )
}