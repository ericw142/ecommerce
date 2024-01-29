import React from 'react';
import { LocationCard } from '../components/LocationCard';

export const Locations = ({ locations, setSelectedView, setSelectedStorefront }) => {
    return (
        <div className='content-body container' style={{marginTop: '100px'}}>
            <h3 className='body-main-header'>locations</h3>
            <p>While our stores are located in the DC Baltimore area, we offer online shopping and prompt delivery, bringing our products to doorsteps across the country. Explore our selection in person or online!</p>
            <div className='row locations-row'>
                {locations.map((el) => {
                    return <LocationCard location={el.location} storehours={el.storehours} address={el.address} setSelectedView={setSelectedView} setSelectedStorefront={setSelectedStorefront}/>
                })}
            </div>
        </div>
    )
}