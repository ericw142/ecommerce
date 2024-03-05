import React from 'react';
import { LocationCard } from '../components/LocationCard';
import { GoogleMap } from '../components/GoogleMap';

export const Locations = ({ locations, setSelectedView, setSelectedStorefront }) => {
    const baltimore = { lat: 39.290379405576644, lng: -76.61367725716757 };
    const dc = { lat: 38.90735205826721, lng: -77.0327748451837 };

    return (
        <div className='content-body container' style={{marginTop: '100px'}}>
            <h3 className='body-main-header'>locations</h3>
            <p>While our stores are located in the DC Baltimore area, we offer online shopping and prompt delivery, bringing our products to doorsteps across the country. Explore our selection in person or online!</p>
            <div className='row locations-row'>
                {locations.map((el) => {
                    return <LocationCard location={el.location} storehours={el.storehours} address={el.address} setSelectedView={setSelectedView} setSelectedStorefront={setSelectedStorefront}/>
                })}
            </div>
            <div className='row mt-3'>
                <div className='d-none d-sm-block col-6'>
                    <GoogleMap lat={baltimore.lat} lng = {baltimore.lng}/>
                </div>
                <div className='d-none d-sm-block col-6'>
                    <GoogleMap lat={dc.lat} lng = {dc.lng}/>
                </div>
            </div>
        </div>
    )
}