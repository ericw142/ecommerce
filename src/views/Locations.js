import React from 'react';
import { LocationCard } from '../components/LocationCard';

export const Locations = () => {
    const locations = [
        {
            location: 'Baltimore, MD',
            storehours: 'Monday - Friday 9am to 5pm',
            address: '1234 Eutaw St'
        },
        {
            location: 'Washington, D.C.',
            storehours: 'Tuesday - Friday, 12pm to 7pm',
            address: '987 Main St'
        }
    ];
    return (
        <div className='content-body'>
            <h2 className='body-main-header'>locations</h2>
            <div className='row'>
                {locations.map((el) => {
                    return <LocationCard location={el.location} storehours={el.storehours} address={el.address}/>
                })}
            </div>
        </div>
    )
}