import React from 'react';
import { LocationCard } from '../components/LocationCard';

export const Locations = ({ locations, setSelectedView, setSelectedStorefront }) => {
    return (
        <div className='content-body'>
            <h2 className='body-main-header'>locations</h2>
            <div className='row'>
                {locations.map((el) => {
                    return <LocationCard location={el.location} storehours={el.storehours} address={el.address} setSelectedView={setSelectedView} setSelectedStorefront={setSelectedStorefront}/>
                })}
            </div>
        </div>
    )
}